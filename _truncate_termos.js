const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'termos.html');
const content = fs.readFileSync(filePath, 'utf8');

// Find the first occurrence of </html> and truncate there
const marker = '</html>';
const idx = content.indexOf(marker);
if (idx === -1) {
  console.log('ERROR: </html> not found');
  process.exit(1);
}

const truncated = content.slice(0, idx + marker.length) + '\n';
fs.writeFileSync(filePath, truncated, 'utf8');
console.log('Done. File truncated to first </html>. Total chars:', truncated.length);
