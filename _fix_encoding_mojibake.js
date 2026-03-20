'use strict';
const fs = require('fs');
const path = require('path');

// Windows-1252 special characters (0x80–0x9F range) → Unicode code points
const WIN1252_CP = {
  0x80:0x20AC, 0x82:0x201A, 0x83:0x0192, 0x84:0x201E, 0x85:0x2026,
  0x86:0x2020, 0x87:0x2021, 0x88:0x02C6, 0x89:0x2030, 0x8A:0x0160,
  0x8B:0x2039, 0x8C:0x0152, 0x8E:0x017D, 0x91:0x2018, 0x92:0x2019,
  0x93:0x201C, 0x94:0x201D, 0x95:0x2022, 0x96:0x2013, 0x97:0x2014,
  0x98:0x02DC, 0x99:0x2122, 0x9A:0x0161, 0x9B:0x203A, 0x9C:0x0153,
  0x9E:0x017E, 0x9F:0x0178,
};

// Reverse map: Unicode code point → Win-1252 byte value
const CP_TO_WIN1252 = {};
for (const [b, cp] of Object.entries(WIN1252_CP)) CP_TO_WIN1252[cp] = parseInt(b);

/**
 * Reverse the double-encoding: UTF-8 bytes were misread as Windows-1252 chars,
 * then re-saved as UTF-8 (mojibake). This function undoes that.
 */
function fixMojibake(str) {
  const bytes = [];
  for (let i = 0; i < str.length; i++) {
    const cp = str.codePointAt(i);
    if (cp > 0xFFFF) i++; // advance past surrogate pair for astral code points
    if (cp <= 0x7F) {
      bytes.push(cp); // ASCII unchanged
    } else if (cp <= 0xFF) {
      // Covers 0x80-0xFF:
      //   0x80-0x9F: undefined Win-1252 control bytes (U+008F → byte 0x8F, etc.)
      //   0xA0-0xFF: Latin-1 supplement where code point == byte value
      // Note: CP_TO_WIN1252 keys are all > 0xFF so no overlap here.
      bytes.push(cp);
    } else if (CP_TO_WIN1252[cp] !== undefined) {
      bytes.push(CP_TO_WIN1252[cp]); // Win-1252 special chars (0x80-0x9F mapped range)
    } else {
      // Unmappable high Unicode char: emit UTF-8 bytes unchanged
      const buf = Buffer.from(String.fromCodePoint(cp), 'utf8');
      for (const b of buf) bytes.push(b);
    }
  }
  return Buffer.from(bytes).toString('utf8');
}

const BASE = 'C:\\Users\\crist\\Downloads\\ipro-main';

// ── 1. HTML service pages: fix terms popup block ──────────────────────────────
// Matches from <h3>TERMO GERAL...</h3><p>...</p><div>...all content...</div>
// up to (but not including) the line with the OK button wrapper.
const HTML_RE = /(<h3 class="text-xl font-bold text-\[#1a1a1a\] mb-1 tracking-tight">TERMO GERAL[\s\S]*?<\/div>)(?=\r?\n      <\/div><div class="px-8 pb-8)/;

let htmlFixed = 0;
for (const name of fs.readdirSync(BASE)) {
  if (!name.endsWith('.html') || name === 'termos.html') continue;
  const fp = path.join(BASE, name);
  const src = fs.readFileSync(fp, 'utf8');
  if (!src.includes('TERMO GERAL')) continue;
  const out = src.replace(HTML_RE, (_, p1) => fixMojibake(p1));
  if (out !== src) { fs.writeFileSync(fp, out, 'utf8'); htmlFixed++; }
}
console.log('HTML files fixed:', htmlFixed);

// ── 2. agendamento.js: fix terms modal block ──────────────────────────────────
// Matches from <div class="termos-body"> through its closing </div>
// up to (but not including) the Fechar button.
const JS_RE = /(<div class="termos-body"[\s\S]*?<\/div>)(?=<button onclick="window\.agendCloseTermosContent\(\)")/;
const jsPath = path.join(BASE, 'js', 'agendamento.js');
const jsSrc = fs.readFileSync(jsPath, 'utf8');
const jsOut = jsSrc.replace(JS_RE, (_, p1) => fixMojibake(p1));
if (jsOut !== jsSrc) { fs.writeFileSync(jsPath, jsOut, 'utf8'); console.log('agendamento.js fixed'); }
else console.log('agendamento.js: pattern not matched - check regex');
