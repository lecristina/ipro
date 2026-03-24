#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const BASE = path.join(__dirname);

// ---- NEW CONTRACT HTML for verbose files (multiline contract sections) ----
const NEW_VERBOSE_CONTENT = `                <h3 class="text-xl font-bold text-[#1a1a1a] mb-1 tracking-tight">CONTRATO DE PRESTAÇÃO DE SERVIÇOS TÉCNICOS, TERMO DE GARANTIA E JURÍDICA TOTAL</h3>
        <p class="text-sm text-[#888] mb-1"><strong>xPro Assistência Técnica Premium</strong></p>
        <p class="text-sm text-[#888] mb-1">FORNECEDOR: xPro Assistência Técnica Premium</p>
        <p class="text-sm text-[#888] mb-1">CNPJ: 33.774.587/0001-45</p>
        <p class="text-sm text-[#888] mb-5">ENDEREÇO: Rua Alvaro Muller, 795, Vila Itapura, Campinas - SP, CEP: 13023-181</p>
        <div class="text-[13px] text-[#555] leading-relaxed space-y-4">
          <div>
            <h4 class="font-bold text-[#1a1a1a] mb-1">I. DAS DISPOSIÇÕES PRELIMINARES E IDENTIFICAÇÃO</h4>
            <p>1. O presente instrumento regula a prestação de serviços técnicos especializados e o fornecimento de componentes eletrônicos pela xPro7, doravante denominada CONTRATADA, ao proprietário do dispositivo, doravante denominado CONTRATANTE.</p>
            <p class="mt-2">2. A CONTRATADA declara-se assistência técnica independente, atuando com plena autonomia técnica, sem qualquer vínculo, autorização ou parceria oficial com a fabricante Apple Inc. ou outras marcas (Art. 421 e 425 do Código Civil).</p>
            <p class="mt-2">3. O CONTRATANTE declara ciência inequívoca de que a intervenção técnica por empresa não autorizada implica na perda imediata de qualquer garantia de fábrica remanescente sobre o dispositivo (Art. 6º, III do CDC).</p>
            <p class="mt-2">4. Este contrato é regido pelo Código de Defesa do Consumidor (Lei 8.078/90) e pelo Código Civil (Lei 10.406⁄02), interpretados sob a égide da boa-fé objetiva (Art. 422 do CC).</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">II. DA NATUREZA DO SERVIÇO E RESPONSABILIDADE</h4>
            <p>1. A responsabilidade da CONTRATADA é objetiva quanto à prestação do serviço, nos termos do Art. 14 do CDC, respondendo por falhas técnicas comprovadas, ressalvadas as excludentes legais.</p>
            <p class="mt-2">2. Nos termos do Art. 14, §3º, I e II do CDC, a CONTRATADA fica isenta de responsabilidade quando comprovada a inexistência do defeito no serviço ou a culpa exclusiva do consumidor ou de terceiros.</p>
            <p class="mt-2">3. O serviço prestado possui natureza de obrigação de meio, consistindo na aplicação da melhor técnica disponível para a tentativa de reparo, não sendo garantido êxito absoluto em hardware severamente danificado.</p>
            <p class="mt-2">4. A impossibilidade de reparo em dispositivos com danos estruturais, oxidação severa ou curto-circuito em placa lógica não configura falha na prestação do serviço (Art. 20, §2º do CDC).</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">III. DO DIAGNÓSTICO E ORÇAMENTO</h4>
            <p>1. O diagnóstico inicial realizado no balcão possui caráter meramente preliminar, podendo ser alterado após testes técnicos aprofundados em bancada (Art. 40 do CDC).</p>
            <p class="mt-2">2. Qualquer alteração de orçamento dependerá de aprovação expressa do CONTRATANTE, podendo ser formalizada por meios eletrônicos (WhatsApp, SMS ou E-mail), com plena validade jurídica.</p>
            <p class="mt-2">3. A recusa do orçamento após a realização de análise técnica autoriza a cobrança de taxa de diagnóstico, previamente informada, para cobrir o tempo técnico e insumos (Art. 39, VI do CDC).</p>
            <p class="mt-2">4. A aprovação do orçamento via meios digitais autoriza o início da execução do serviço e constitui obrigação de pagamento, nos termos acordados entre as partes, servindo como prova de autorização, nos termos do Art. 369 do Código de Processo Civil.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">IV. DOS RISCOS INERENTES AO MANUSEIO TÉCNICO</h4>
            <p>1. O CONTRATANTE declara ciência de que o dispositivo objeto do serviço pode apresentar desgaste natural decorrente do uso, tempo de utilização, ciclos de carga, envelhecimento de componentes ou condições anteriores à entrada em assistência.</p>
            <p class="mt-2">2. Tais fatores podem influenciar direta ou indiretamente no funcionamento do aparelho, podendo ocasionar falhas supervenientes, sem que isso caracterize falha na prestação do serviço pela CONTRATADA.</p>
            <p class="mt-2">3. Eventuais defeitos que venham a se manifestar após o reparo deverão ser analisados tecnicamente, sendo indispensável a comprovação de nexo causal entre o serviço executado e o problema apresentado para eventual responsabilização.</p>
            <p class="mt-2">4. Em aparelhos com danos estruturais (empenamentos ou quedas graves), o processo de abertura e fechamento pode agravar falhas preexistentes ou levar à perda total do dispositivo.</p>
            <p class="mt-2">5. O CONTRATANTE declara ciência de que dispositivos com danos estruturais, oxidação ou histórico de intervenções anteriores podem apresentar fragilidades ocultas, as quais podem se manifestar ou se agravar durante o procedimento técnico.</p>
            <p class="mt-2">6. O serviço prestado consiste em tentativa técnica de recuperação, podendo não haver êxito em razão das condições pré-existentes do aparelho.</p>
            <p class="mt-2">7. O CONTRATANTE declara ciência dos riscos inerentes ao processo de reparo, permanecendo a responsabilidade da CONTRATADA nos termos da legislação aplicável.</p>
            <p class="mt-2">8. Não haverá responsabilidade da CONTRATADA por danos decorrentes exclusivamente de vícios preexistentes, ocultos ou relacionados à condição estrutural do dispositivo, desde que não haja relação de causa e efeito com o serviço executado, mediante comprovação técnica.</p>
            <p class="mt-2">9. A responsabilidade da CONTRATADA limita-se aos componentes e serviços efetivamente objeto da intervenção técnica realizada.</p>
            <p class="mt-2">10. Não haverá responsabilidade da CONTRATADA por defeitos, falhas ou mau funcionamento de componentes não relacionados ao serviço executado, especialmente quando decorrentes do estado geral do aparelho, desgaste natural, oxidação, danos estruturais ou falhas preexistentes.</p>
            <p class="mt-2">11. Eventuais defeitos que venham a se manifestar após o reparo deverão ser analisados tecnicamente, sendo indispensável a comprovação de nexo causal entre o serviço realizado e o problema apresentado para eventual responsabilização da CONTRATADA.</p>
            <p class="mt-2">12. Na ausência de comprovação de relação direta entre o serviço executado e o defeito alegado, não haverá responsabilidade da CONTRATADA por falhas supervenientes.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">V. DAS PEÇAS E RESTRIÇÕES DE SOFTWARE</h4>
            <p>1. Nos termos do Art. 21 do CDC, o CONTRATANTE autoriza o uso de componentes que podem ser: originais retirados, compatíveis premium ou compatíveis standard, conforme discriminado no orçamento.</p>
            <p class="mt-2">2. O CONTRATANTE declara ciência de que fabricantes (especialmente Apple Inc.) impõem restrições de software via "pareamento de hardware" (Serialization).</p>
            <p class="mt-2">3. Peças substituídas podem gerar avisos como "peça não reconhecida", "componente desconhecido", "usada" ou "histórico de peça".</p>
            <p class="mt-2">4. Tais avisos decorrem de restrições técnicas e de software impostas pelo fabricante, especialmente relacionadas a mecanismos de pareamento de hardware, não estando relacionados a defeito da peça ou falha na prestação do serviço.</p>
            <p class="mt-2">5. O CONTRATANTE declara ciência de que tais mensagens podem ocorrer inclusive na utilização de peças originais retiradas de outros dispositivos (semi-novas) ou peças compatíveis, não comprometendo, por si só, a funcionalidade essencial do aparelho.</p>
            <p class="mt-2">6. A exibição de tais mensagens de software não caracteriza vício, defeito ou má prestação de serviço, sendo uma limitação imposta pela fabricante original (Art. 31 do CDC).</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">VI. DA GARANTIA E SUAS CONDIÇÕES</h4>
            <p>1. O prazo de garantia legal é de 90 dias (Art. 26, II do CDC). A CONTRATADA poderá oferecer garantia contratual complementar, totalizando o prazo informado na Ordem de Serviço.</p>
            <p class="mt-2">2. A garantia cobre exclusivamente defeitos de fabricação dos componentes substituídos ou falhas diretas da execução técnica do serviço prestado.</p>
            <p class="mt-2">3. A garantia contratual cobre exclusivamente defeitos relacionados às peças substituídas ou à execução do serviço realizado pela CONTRATADA.</p>
            <p class="mt-2">4. A exclusão da garantia dependerá de comprovação técnica de que o dano apresentado decorre de mau uso, queda, impacto, contato com líquidos, intervenção de terceiros ou qualquer fator externo alheio ao serviço prestado.</p>
            <p class="mt-2">5. A simples ocorrência de dano no aparelho não implica, por si só, perda da garantia, sendo indispensável a verificação de nexo causal entre o evento danoso e a conduta do CONTRATANTE ou de terceiros.</p>
            <p class="mt-2">6. Na ausência de comprovação técnica de causa excludente, permanece a responsabilidade da CONTRATADA nos termos da legislação aplicável.</p>
            <p class="mt-2">7. O contato com líquidos (oxidação), ainda que em dispositivos com certificação de resistência à água (IP), poderá comprometer o funcionamento interno do aparelho e gerar danos progressivos.</p>
            <p class="mt-2">8. A presença de oxidação poderá ensejar a exclusão da garantia, desde que comprovado, por meio de análise técnica, que o defeito apresentado possui relação direta com o dano causado por contato com líquido.</p>
            <p class="mt-2">9. Em aparelhos previamente afetados por oxidação, o CONTRATANTE declara ciência de que poderão ocorrer falhas supervenientes em componentes distintos daqueles inicialmente reparados, em razão da propagação do dano interno.</p>
            <p class="mt-2">10. Nessas hipóteses, não haverá responsabilidade da CONTRATADA por defeitos decorrentes da evolução natural do dano por oxidação, desde que não haja nexo causal com o serviço executado.</p>
            <p class="mt-2">11. A intervenção de terceiros, abertura do dispositivo por pessoas não autorizadas ou rompimento de selos de garantia internos ou externos poderá implicar na perda da garantia, desde que comprovado, por meio de análise técnica, que tal intervenção possui relação direta com o defeito apresentado.</p>
            <p class="mt-2">12. Na ausência de comprovação de nexo causal entre a intervenção de terceiros e o defeito alegado, a garantia permanecerá válida nos termos deste contrato e da legislação aplicável.</p>
            <p class="mt-2">13. Atualizações de software realizadas pelo fabricante que venham a restringir funções de hardware (ex: Face ID, Touch ID) não são cobertas pela garantia da CONTRATADA.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">VII. DO PAGAMENTO E DIREITO DE RETENÇÃO</h4>
            <p>1. Poderá ser exigido pagamento antecipado de até 20% (Arras) para reserva de bancada ou aquisição de peças específicas (Arts. 417 a 420 do Código Civil).</p>
            <p class="mt-2">2. Em caso de desistência imotivada após o início dos atos preparatórios, o valor das arras será retido proporcionalmente para compensar custos operacionais efetivamente incorridos.</p>
            <p class="mt-2">3. A entrega do dispositivo reparado está condicionada à quitação integral dos valores acordados, nos termos do Art. 476 do Código Civil (Exceção do Contrato não Cumprido).</p>
            <p class="mt-2">4. A CONTRATADA exerce o direito de retenção do bem (Art. 1.219 do CC) enquanto houver débito líquido e certo, não configurando abuso, mas exercício regular de direito.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">VIII. DO ABANDONO E PROTEÇÃO DE DADOS</h4>
            <p>1. Considera-se o bem abandonado caso não seja retirado no prazo de 90 (noventa) dias após a notificação de conclusão do serviço (Art. 1.275 do Código Civil).</p>
            <p class="mt-2">2. A CONTRATADA realizará 03 (três) tentativas de contato comprovadas. Persistindo o silêncio, fica autorizada a alienar o bem para ressarcimento de custos e armazenamento.</p>
            <p class="mt-2">3. O backup integral dos dados é de responsabilidade exclusiva do CONTRATANTE, devendo ser realizado antes da entrega do dispositivo para reparo.</p>
            <p class="mt-2">4. O CONTRATANTE declara ciência de que procedimentos técnicos podem implicar na perda total ou parcial de dados armazenados no aparelho.</p>
            <p class="mt-2">5. A CONTRATADA não se responsabiliza por perda de dados, exceto nos casos em que comprovada falha direta na prestação do serviço.</p>
            <p class="mt-2">6. A entrega do aparelho sem a realização de backup prévio implica na aceitação dos riscos relacionados à eventual perda de informações.</p>
            <p class="mt-2">7. A CONTRATADA compromete-se com a LGPD (Lei 13.709⁄18), utilizando dados do cliente apenas para fins de faturamento, comunicações técnicas e exercício de direitos.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">IX. DAS CLÁUSULAS ANTI-FRAUDE E PROVAS</h4>
            <p>1. A retirada do dispositivo pelo CONTRATANTE, após realização de testes funcionais, constitui presunção de aceitação quanto ao funcionamento do aparelho no momento da entrega, especialmente em relação a vícios aparentes.</p>
            <p class="mt-2">2. O aceite no ato da retirada não afasta o direito do consumidor de reclamar posteriormente quanto a vícios ocultos, nos termos do Código de Defesa do Consumidor.</p>
            <p class="mt-2">3. Eventuais alegações posteriores deverão ser acompanhadas da comprovação de que o defeito decorre de falha na prestação do serviço, observado o nexo causal entre o serviço executado e o problema apresentado.</p>
            <p class="mt-2">4. Na ausência de comprovação de falha técnica relacionada ao serviço prestado, não haverá responsabilidade da CONTRATADA por defeitos supervenientes.</p>
            <p class="mt-2">5. Em caso de contestação de pagamento junto à operadora (chargeback), a CONTRATADA poderá apresentar toda a documentação comprobatória da prestação do serviço, incluindo ordem de serviço, registros técnicos, comunicações eletrônicas e comprovantes de entrega.</p>
            <p class="mt-2">6. A contestação considerada indevida, especialmente após a efetiva prestação do serviço e retirada do dispositivo, poderá caracterizar indícios de má-fé, sujeitando o CONTRATANTE às medidas administrativas e judiciais cabíveis.</p>
            <p class="mt-2">7. A CONTRATADA poderá promover a cobrança dos valores devidos pelos meios legais disponíveis, inclusive com apresentação de provas à operadora de pagamento e, se necessário, ajuizamento de ação competente.</p>
            <p class="mt-2">8. Os registros técnicos, incluindo checklist de entrada/saída, fotografias e laudos de bancada, constituem prova técnica relevante da condição do aparelho (Art. 369 do CPC).</p>
            <p class="mt-2">9. O CONTRATANTE autoriza o registro fotográfico do dispositivo para fins de documentação técnica e prova de estado físico.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">X. DAS DISPOSIÇÕES FINAIS</h4>
            <p>1. As partes reconhecem a validade jurídica de assinaturas digitais e comunicações via aplicativos de mensagens para todos os fins de direito e prova documental.</p>
            <p class="mt-2">2. A CONTRATADA disponibilizará canal de atendimento para análise da reclamação, comprometendo-se a avaliar tecnicamente o caso e apresentar resposta fundamentada.</p>
            <p class="mt-2">3. O CONTRATANTE declara ciência de que a tentativa de solução prévia visa a resolução rápida e eficaz do conflito, podendo evitar custos, tempo e desgaste para ambas as partes.</p>
            <p class="mt-2">4. O não exercício da tentativa de solução prévia não impede o acesso ao Poder Judiciário, mas será considerado para fins de análise da boa-fé das partes.</p>
            <p class="mt-2">5. Fica eleito o foro do domicílio do consumidor (Art. 101, I do CDC) para dirimir quaisquer controvérsias oriundas deste contrato.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <p class="font-bold text-[#1a1a1a]">DECLARAÇÃO DE CIÊNCIA E ACEITE:</p>
            <p class="mt-2">O CONTRATANTE declara que leu, compreendeu e concorda com todos os 68 parágrafos, riscos e condições aqui expostos.</p>
          </div>
        </div>`;

// ---- NEW CONTRACT HTML for compact files (10-section compact version) ----
const NEW_COMPACT_CONTENT = `                <h3 class="text-xl font-bold text-[#1a1a1a] mb-1 tracking-tight">CONTRATO DE PRESTAÇÃO DE SERVIÇOS TÉCNICOS, TERMO DE GARANTIA E JURÍDICA TOTAL</h3>
        <p class="text-sm text-[#888] mb-1"><strong>xPro Assistência Técnica Premium</strong></p>
        <p class="text-sm text-[#888] mb-1">FORNECEDOR: xPro Assistência Técnica Premium</p>
        <p class="text-sm text-[#888] mb-1">CNPJ: 33.774.587/0001-45</p>
        <p class="text-sm text-[#888] mb-5">ENDEREÇO: Rua Alvaro Muller, 795, Vila Itapura, Campinas - SP, CEP: 13023-181</p>
        <div class="text-[13px] text-[#555] leading-relaxed space-y-4">
          <div><h4 class="font-bold text-[#1a1a1a] mb-1">I. DAS DISPOSIÇÕES PRELIMINARES E IDENTIFICAÇÃO</h4><p>1. O presente instrumento regula a prestação de serviços técnicos especializados e o fornecimento de componentes eletrônicos pela xPro7, doravante denominada CONTRATADA, ao proprietário do dispositivo, doravante denominado CONTRATANTE.</p><p class="mt-2">2. A CONTRATADA declara-se assistência técnica independente, atuando com plena autonomia técnica, sem qualquer vínculo, autorização ou parceria oficial com a fabricante Apple Inc. ou outras marcas (Art. 421 e 425 do Código Civil).</p><p class="mt-2">3. O CONTRATANTE declara ciência inequívoca de que a intervenção técnica por empresa não autorizada implica na perda imediata de qualquer garantia de fábrica remanescente sobre o dispositivo (Art. 6º, III do CDC).</p><p class="mt-2">4. Este contrato é regido pelo Código de Defesa do Consumidor (Lei 8.078/90) e pelo Código Civil (Lei 10.406⁄02), interpretados sob a égide da boa-fé objetiva (Art. 422 do CC).</p></div>
          <div class="border-t border-[#eee] pt-3"><h4 class="font-bold text-[#1a1a1a] mb-1">II. DA NATUREZA DO SERVIÇO E RESPONSABILIDADE</h4><p>1. A responsabilidade da CONTRATADA é objetiva quanto à prestação do serviço, nos termos do Art. 14 do CDC, respondendo por falhas técnicas comprovadas, ressalvadas as excludentes legais.</p><p class="mt-2">2. Nos termos do Art. 14, §3º, I e II do CDC, a CONTRATADA fica isenta de responsabilidade quando comprovada a inexistência do defeito no serviço ou a culpa exclusiva do consumidor ou de terceiros.</p><p class="mt-2">3. O serviço prestado possui natureza de obrigação de meio, consistindo na aplicação da melhor técnica disponível para a tentativa de reparo, não sendo garantido êxito absoluto em hardware severamente danificado.</p><p class="mt-2">4. A impossibilidade de reparo em dispositivos com danos estruturais, oxidação severa ou curto-circuito em placa lógica não configura falha na prestação do serviço (Art. 20, §2º do CDC).</p></div>
          <div class="border-t border-[#eee] pt-3"><h4 class="font-bold text-[#1a1a1a] mb-1">III. DO DIAGNÓSTICO E ORÇAMENTO</h4><p>1. O diagnóstico inicial realizado no balcão possui caráter meramente preliminar, podendo ser alterado após testes técnicos aprofundados em bancada (Art. 40 do CDC).</p><p class="mt-2">2. Qualquer alteração de orçamento dependerá de aprovação expressa do CONTRATANTE, podendo ser formalizada por meios eletrônicos (WhatsApp, SMS ou E-mail), com plena validade jurídica.</p><p class="mt-2">3. A recusa do orçamento após a realização de análise técnica autoriza a cobrança de taxa de diagnóstico, previamente informada, para cobrir o tempo técnico e insumos (Art. 39, VI do CDC).</p><p class="mt-2">4. A aprovação do orçamento via meios digitais autoriza o início da execução do serviço e constitui obrigação de pagamento, nos termos acordados entre as partes, servindo como prova de autorização, nos termos do Art. 369 do Código de Processo Civil.</p></div>
          <div class="border-t border-[#eee] pt-3"><h4 class="font-bold text-[#1a1a1a] mb-1">IV. DOS RISCOS INERENTES AO MANUSEIO TÉCNICO</h4><p>1. O CONTRATANTE declara ciência de que o dispositivo objeto do serviço pode apresentar desgaste natural decorrente do uso, tempo de utilização, ciclos de carga, envelhecimento de componentes ou condições anteriores à entrada em assistência.</p><p class="mt-2">2. Tais fatores podem influenciar direta ou indiretamente no funcionamento do aparelho, podendo ocasionar falhas supervenientes, sem que isso caracterize falha na prestação do serviço pela CONTRATADA.</p><p class="mt-2">3. Eventuais defeitos que venham a se manifestar após o reparo deverão ser analisados tecnicamente, sendo indispensável a comprovação de nexo causal entre o serviço executado e o problema apresentado para eventual responsabilização.</p><p class="mt-2">4. Em aparelhos com danos estruturais (empenamentos ou quedas graves), o processo de abertura e fechamento pode agravar falhas preexistentes ou levar à perda total do dispositivo.</p><p class="mt-2">5. O CONTRATANTE declara ciência de que dispositivos com danos estruturais, oxidação ou histórico de intervenções anteriores podem apresentar fragilidades ocultas, as quais podem se manifestar ou se agravar durante o procedimento técnico.</p><p class="mt-2">6. O serviço prestado consiste em tentativa técnica de recuperação, podendo não haver êxito em razão das condições pré-existentes do aparelho.</p><p class="mt-2">7. O CONTRATANTE declara ciência dos riscos inerentes ao processo de reparo, permanecendo a responsabilidade da CONTRATADA nos termos da legislação aplicável.</p><p class="mt-2">8. Não haverá responsabilidade da CONTRATADA por danos decorrentes exclusivamente de vícios preexistentes, ocultos ou relacionados à condição estrutural do dispositivo, desde que não haja relação de causa e efeito com o serviço executado, mediante comprovação técnica.</p><p class="mt-2">9. A responsabilidade da CONTRATADA limita-se aos componentes e serviços efetivamente objeto da intervenção técnica realizada.</p><p class="mt-2">10. Não haverá responsabilidade da CONTRATADA por defeitos, falhas ou mau funcionamento de componentes não relacionados ao serviço executado, especialmente quando decorrentes do estado geral do aparelho, desgaste natural, oxidação, danos estruturais ou falhas preexistentes.</p><p class="mt-2">11. Eventuais defeitos que venham a se manifestar após o reparo deverão ser analisados tecnicamente, sendo indispensável a comprovação de nexo causal entre o serviço realizado e o problema apresentado para eventual responsabilização da CONTRATADA.</p><p class="mt-2">12. Na ausência de comprovação de relação direta entre o serviço executado e o defeito alegado, não haverá responsabilidade da CONTRATADA por falhas supervenientes.</p></div>
          <div class="border-t border-[#eee] pt-3"><h4 class="font-bold text-[#1a1a1a] mb-1">V. DAS PEÇAS E RESTRIÇÕES DE SOFTWARE</h4><p>1. Nos termos do Art. 21 do CDC, o CONTRATANTE autoriza o uso de componentes que podem ser: originais retirados, compatíveis premium ou compatíveis standard, conforme discriminado no orçamento.</p><p class="mt-2">2. O CONTRATANTE declara ciência de que fabricantes (especialmente Apple Inc.) impõem restrições de software via "pareamento de hardware" (Serialization).</p><p class="mt-2">3. Peças substituídas podem gerar avisos como "peça não reconhecida", "componente desconhecido", "usada" ou "histórico de peça".</p><p class="mt-2">4. Tais avisos decorrem de restrições técnicas e de software impostas pelo fabricante, especialmente relacionadas a mecanismos de pareamento de hardware, não estando relacionados a defeito da peça ou falha na prestação do serviço.</p><p class="mt-2">5. O CONTRATANTE declara ciência de que tais mensagens podem ocorrer inclusive na utilização de peças originais retiradas de outros dispositivos (semi-novas) ou peças compatíveis, não comprometendo, por si só, a funcionalidade essencial do aparelho.</p><p class="mt-2">6. A exibição de tais mensagens de software não caracteriza vício, defeito ou má prestação de serviço, sendo uma limitação imposta pela fabricante original (Art. 31 do CDC).</p></div>
          <div class="border-t border-[#eee] pt-3"><h4 class="font-bold text-[#1a1a1a] mb-1">VI. DA GARANTIA E SUAS CONDIÇÕES</h4><p>1. O prazo de garantia legal é de 90 dias (Art. 26, II do CDC). A CONTRATADA poderá oferecer garantia contratual complementar, totalizando o prazo informado na Ordem de Serviço.</p><p class="mt-2">2. A garantia cobre exclusivamente defeitos de fabricação dos componentes substituídos ou falhas diretas da execução técnica do serviço prestado.</p><p class="mt-2">3. A garantia contratual cobre exclusivamente defeitos relacionados às peças substituídas ou à execução do serviço realizado pela CONTRATADA.</p><p class="mt-2">4. A exclusão da garantia dependerá de comprovação técnica de que o dano apresentado decorre de mau uso, queda, impacto, contato com líquidos, intervenção de terceiros ou qualquer fator externo alheio ao serviço prestado.</p><p class="mt-2">5. A simples ocorrência de dano no aparelho não implica, por si só, perda da garantia, sendo indispensável a verificação de nexo causal entre o evento danoso e a conduta do CONTRATANTE ou de terceiros.</p><p class="mt-2">6. Na ausência de comprovação técnica de causa excludente, permanece a responsabilidade da CONTRATADA nos termos da legislação aplicável.</p><p class="mt-2">7. O contato com líquidos (oxidação), ainda que em dispositivos com certificação de resistência à água (IP), poderá comprometer o funcionamento interno do aparelho e gerar danos progressivos.</p><p class="mt-2">8. A presença de oxidação poderá ensejar a exclusão da garantia, desde que comprovado, por meio de análise técnica, que o defeito apresentado possui relação direta com o dano causado por contato com líquido.</p><p class="mt-2">9. Em aparelhos previamente afetados por oxidação, o CONTRATANTE declara ciência de que poderão ocorrer falhas supervenientes em componentes distintos daqueles inicialmente reparados, em razão da propagação do dano interno.</p><p class="mt-2">10. Nessas hipóteses, não haverá responsabilidade da CONTRATADA por defeitos decorrentes da evolução natural do dano por oxidação, desde que não haja nexo causal com o serviço executado.</p><p class="mt-2">11. A intervenção de terceiros, abertura do dispositivo por pessoas não autorizadas ou rompimento de selos de garantia internos ou externos poderá implicar na perda da garantia, desde que comprovado, por meio de análise técnica, que tal intervenção possui relação direta com o defeito apresentado.</p><p class="mt-2">12. Na ausência de comprovação de nexo causal entre a intervenção de terceiros e o defeito alegado, a garantia permanecerá válida nos termos deste contrato e da legislação aplicável.</p><p class="mt-2">13. Atualizações de software realizadas pelo fabricante que venham a restringir funções de hardware (ex: Face ID, Touch ID) não são cobertas pela garantia da CONTRATADA.</p></div>
          <div class="border-t border-[#eee] pt-3"><h4 class="font-bold text-[#1a1a1a] mb-1">VII. DO PAGAMENTO E DIREITO DE RETENÇÃO</h4><p>1. Poderá ser exigido pagamento antecipado de até 20% (Arras) para reserva de bancada ou aquisição de peças específicas (Arts. 417 a 420 do Código Civil).</p><p class="mt-2">2. Em caso de desistência imotivada após o início dos atos preparatórios, o valor das arras será retido proporcionalmente para compensar custos operacionais efetivamente incorridos.</p><p class="mt-2">3. A entrega do dispositivo reparado está condicionada à quitação integral dos valores acordados, nos termos do Art. 476 do Código Civil (Exceção do Contrato não Cumprido).</p><p class="mt-2">4. A CONTRATADA exerce o direito de retenção do bem (Art. 1.219 do CC) enquanto houver débito líquido e certo, não configurando abuso, mas exercício regular de direito.</p></div>
          <div class="border-t border-[#eee] pt-3"><h4 class="font-bold text-[#1a1a1a] mb-1">VIII. DO ABANDONO E PROTEÇÃO DE DADOS</h4><p>1. Considera-se o bem abandonado caso não seja retirado no prazo de 90 (noventa) dias após a notificação de conclusão do serviço (Art. 1.275 do Código Civil).</p><p class="mt-2">2. A CONTRATADA realizará 03 (três) tentativas de contato comprovadas. Persistindo o silêncio, fica autorizada a alienar o bem para ressarcimento de custos e armazenamento.</p><p class="mt-2">3. O backup integral dos dados é de responsabilidade exclusiva do CONTRATANTE, devendo ser realizado antes da entrega do dispositivo para reparo.</p><p class="mt-2">4. O CONTRATANTE declara ciência de que procedimentos técnicos podem implicar na perda total ou parcial de dados armazenados no aparelho.</p><p class="mt-2">5. A CONTRATADA não se responsabiliza por perda de dados, exceto nos casos em que comprovada falha direta na prestação do serviço.</p><p class="mt-2">6. A entrega do aparelho sem a realização de backup prévio implica na aceitação dos riscos relacionados à eventual perda de informações.</p><p class="mt-2">7. A CONTRATADA compromete-se com a LGPD (Lei 13.709⁄18), utilizando dados do cliente apenas para fins de faturamento, comunicações técnicas e exercício de direitos.</p></div>
          <div class="border-t border-[#eee] pt-3"><h4 class="font-bold text-[#1a1a1a] mb-1">IX. DAS CLÁUSULAS ANTI-FRAUDE E PROVAS</h4><p>1. A retirada do dispositivo pelo CONTRATANTE, após realização de testes funcionais, constitui presunção de aceitação quanto ao funcionamento do aparelho no momento da entrega, especialmente em relação a vícios aparentes.</p><p class="mt-2">2. O aceite no ato da retirada não afasta o direito do consumidor de reclamar posteriormente quanto a vícios ocultos, nos termos do Código de Defesa do Consumidor.</p><p class="mt-2">3. Eventuais alegações posteriores deverão ser acompanhadas da comprovação de que o defeito decorre de falha na prestação do serviço, observado o nexo causal entre o serviço executado e o problema apresentado.</p><p class="mt-2">4. Na ausência de comprovação de falha técnica relacionada ao serviço prestado, não haverá responsabilidade da CONTRATADA por defeitos supervenientes.</p><p class="mt-2">5. Em caso de contestação de pagamento junto à operadora (chargeback), a CONTRATADA poderá apresentar toda a documentação comprobatória da prestação do serviço, incluindo ordem de serviço, registros técnicos, comunicações eletrônicas e comprovantes de entrega.</p><p class="mt-2">6. A contestação considerada indevida, especialmente após a efetiva prestação do serviço e retirada do dispositivo, poderá caracterizar indícios de má-fé, sujeitando o CONTRATANTE às medidas administrativas e judiciais cabíveis.</p><p class="mt-2">7. A CONTRATADA poderá promover a cobrança dos valores devidos pelos meios legais disponíveis, inclusive com apresentação de provas à operadora de pagamento e, se necessário, ajuizamento de ação competente.</p><p class="mt-2">8. Os registros técnicos, incluindo checklist de entrada/saída, fotografias e laudos de bancada, constituem prova técnica relevante da condição do aparelho (Art. 369 do CPC).</p><p class="mt-2">9. O CONTRATANTE autoriza o registro fotográfico do dispositivo para fins de documentação técnica e prova de estado físico.</p></div>
          <div class="border-t border-[#eee] pt-3"><h4 class="font-bold text-[#1a1a1a] mb-1">X. DAS DISPOSIÇÕES FINAIS</h4><p>1. As partes reconhecem a validade jurídica de assinaturas digitais e comunicações via aplicativos de mensagens para todos os fins de direito e prova documental.</p><p class="mt-2">2. A CONTRATADA disponibilizará canal de atendimento para análise da reclamação, comprometendo-se a avaliar tecnicamente o caso e apresentar resposta fundamentada.</p><p class="mt-2">3. O CONTRATANTE declara ciência de que a tentativa de solução prévia visa a resolução rápida e eficaz do conflito, podendo evitar custos, tempo e desgaste para ambas as partes.</p><p class="mt-2">4. O não exercício da tentativa de solução prévia não impede o acesso ao Poder Judiciário, mas será considerado para fins de análise da boa-fé das partes.</p><p class="mt-2">5. Fica eleito o foro do domicílio do consumidor (Art. 101, I do CDC) para dirimir quaisquer controvérsias oriundas deste contrato.</p></div>
          <div class="border-t border-[#eee] pt-3"><p class="font-bold text-[#1a1a1a]">DECLARAÇÃO DE CIÊNCIA E ACEITE:</p><p class="mt-2">O CONTRATANTE declara que leu, compreendeu e concorda com todos os 68 parágrafos, riscos e condições aqui expostos.</p></div>
        </div>`;

// Regex that matches the entire old contract block in verbose files
// from the h3 title down through the closing of the content div
const OLD_VERBOSE_RE = /(<h3 class="text-xl font-bold text-\[#1a1a1a\] mb-1 tracking-tight">)TERMO GERAL DE PRESTA[^<]+<\/h3>\s*<p class="text-sm text-\[#888\] mb-5">DISPOSITIVOS ELETR[^<]+<\/p>\s*<div class="text-\[13px\][^"]*">[^]*?<h4 class="font-bold text-\[#1a1a1a\] mb-1">39\. VALIDADE DIGITAL<\/h4>\s*<p>Este contrato possui validade jur[^<]+<\/p>\s*<\/div>\s*<\/div>/g;

// Regex for compact files (10-section variant with inline divs)
const OLD_COMPACT_RE = /(<h3 class="text-xl font-bold text-\[#1a1a1a\] mb-1 tracking-tight">)TERMO GERAL DE PRESTA[^<]+<\/h3>\s*<p class="text-sm text-\[#888\] mb-5">DISPOSITIVOS ELETR[^<]+<\/p>\s*<div class="text-\[13px\][^"]*">\s*<div><h4 class="font-bold text-\[#1a1a1a\] mb-1">1\. IDENTIFICA[^]*?<\/div>\s*<\/div>/g;

const files = fs.readdirSync(BASE).filter(f => f.endsWith('.html') && f !== 'termos.html');
let changed = 0;
let errors = 0;

for (const file of files) {
  const fp = path.join(BASE, file);
  let content;
  try { content = fs.readFileSync(fp, 'utf8'); } catch (e) { continue; }
  
  if (!content.includes('TERMO GERAL DE PREST')) continue;
  
  // Try verbose version first
  let newContent = content.replace(OLD_VERBOSE_RE, (match, prefix) => {
    return NEW_VERBOSE_CONTENT;
  });
  
  if (newContent === content) {
    // Try compact version
    newContent = content.replace(OLD_COMPACT_RE, (match, prefix) => {
      return NEW_COMPACT_CONTENT;
    });
  }
  
  if (newContent !== content) {
    try {
      fs.writeFileSync(fp, newContent, 'utf8');
      changed++;
      console.log('Updated:', file);
    } catch (e) {
      console.error('Error writing', file, e.message);
      errors++;
    }
  } else {
    console.warn('No match:', file);
  }
}

console.log(`\nDone: ${changed} updated, ${errors} errors`);
