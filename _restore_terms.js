'use strict';
const fs = require('fs');
const path = require('path');
const BASE = 'C:\\Users\\crist\\Downloads\\ipro-main';

// ─────────────────────────────────────────────────────────────────────────────
// CORRECT POPUP HTML (used in 68 service HTML files)
// ─────────────────────────────────────────────────────────────────────────────
const POPUP_HTML = `<h3 class="text-xl font-bold text-[#1a1a1a] mb-1 tracking-tight">TERMO GERAL DE PRESTAÇÃO DE SERVIÇOS, GARANTIA E PAGAMENTO</h3>
        <p class="text-sm text-[#888] mb-5">DISPOSITIVOS ELETRÔNICOS (APPLE E SIMILARES)</p>
        <div class="text-[13px] text-[#555] leading-relaxed space-y-4">
          <div>
            <h4 class="font-bold text-[#1a1a1a] mb-1">1. IDENTIFICAÇÃO DO FORNECEDOR</h4>
            <p>O presente instrumento regula a prestação de serviços técnicos especializados e o fornecimento de peças por empresa de assistência técnica independente. A empresa declara não possuir vínculo com a fabricante Apple Inc., não sendo assistência autorizada, atuando de forma autônoma, nos termos dos Arts. 421 e 425 do Código Civil. O CONTRATANTE declara ciência inequívoca de que a intervenção por assistência não autorizada poderá acarretar a perda de garantias vigentes junto ao fabricante original.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">2. FUNDAMENTAÇÃO LEGAL</h4>
            <p>Este contrato é regido pelo Código de Defesa do Consumidor (Lei nº 8.078/90) e Código Civil (Lei nº 10.406⁄2002), especialmente pelos Arts. 6º, 12, 14, 18, 20, 26, 30, 35, 39, 46, 50, 51 e 101 do CDC e Arts. 187, 389, 395, 408, 409, 418, 421, 422, 476 e 927 do Código Civil. As cláusulas aqui dispostas visam o equilíbrio contratual e a preservação da boa-fé objetiva (Art. 422, CC).</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <p class="font-bold text-[#1a1a1a]">🔧 PARTE I – PRESTAÇÃO DE SERVIÇOS</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">3. NATUREZA DO SERVIÇO</h4>
            <p>A assistência realiza manutenção, reparo e substituição de componentes, podendo utilizar:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>peças originais (retiradas de outro aparelho)</li>
              <li>peças compatíveis premium</li>
              <li>peças compatíveis standard</li>
            </ul>
            <p class="mt-2">O cliente declara ciência de que a assistência não realiza pareamento com servidores da fabricante nem possui acesso a sistemas proprietários, podendo haver limitações de funcionalidade, desde que previamente informadas, conforme Art. 6º, III do CDC. A escolha da peça será formalizada no orçamento, sendo o CONTRATANTE o único responsável pela opção técnica/financeira adotada.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">4. DIAGNÓSTICO TÉCNICO</h4>
            <p>O diagnóstico inicial possui caráter preliminar, podendo ser alterado após testes técnicos aprofundados. Qualquer alteração de orçamento dependerá de aprovação do cliente, inclusive por meios eletrônicos (WhatsApp, SMS ou sistema), nos termos do Art. 30 do CDC. A aprovação por meio digital possui força vinculante e autoriza o início imediato dos serviços e aquisição de insumos.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">5. RISCO DO REPARO</h4>
            <p>O cliente declara ciência de que reparos eletrônicos envolvem risco técnico. Em aparelhos com:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>oxidação</li>
              <li>danos estruturais</li>
              <li>intervenções anteriores</li>
              <li>falhas graves</li>
            </ul>
            <p class="mt-2">poderá ocorrer agravamento ou perda total. A assistência não responde por danos decorrentes exclusivamente de vícios preexistentes, desde que comprovados por registros técnicos e inexistente falha na prestação do serviço. O CONTRATANTE assume o risco inerente à tentativa de recuperação de dispositivos em estado crítico ou com danos ocultos.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">6. CLASSIFICAÇÃO DAS PEÇAS</h4>
            <p>O cliente declara ciência quanto à natureza das peças utilizadas, conforme dever de informação (Art. 6º, III do CDC). A CONTRATADA garante que as peças utilizadas mantêm a compatibilidade técnica necessária para o funcionamento do dispositivo, ressalvadas as limitações de software impostas pelo fabricante.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">7. PEÇAS FORNECIDAS PELO CLIENTE</h4>
            <p>Não há garantia sobre peças fornecidas pelo cliente quanto à qualidade, compatibilidade ou procedência. A responsabilidade da assistência limita-se à execução do serviço. Eventuais danos causados ao dispositivo em decorrência de defeitos na peça fornecida pelo cliente são de inteira responsabilidade deste.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">8. PEÇA NÃO RECONHECIDA</h4>
            <p>Após substituição, poderá ocorrer aviso de:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>"peça não reconhecida"</li>
            </ul>
            <p class="mt-2">Isso não caracteriza defeito, desde que:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>não comprometa a função essencial</li>
              <li>tenha sido previamente informado</li>
            </ul>
            <p class="mt-2">O CONTRATANTE declara estar ciente de que tais avisos são restrições de software da fabricante e não configuram vício do serviço ou da peça aplicada.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">9. LIMITAÇÕES TÉCNICAS</h4>
            <p>Após o reparo, poderão ocorrer:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>perda de vedação contra água</li>
              <li>indisponibilidade de funções (Face ID, True Tone, etc.)</li>
              <li>alterações por atualização de sistema</li>
            </ul>
            <p class="mt-2">Tais situações não caracterizam vício, quando previamente informadas. A CONTRATADA não se responsabiliza por atualizações de software posteriores que venham a restringir funcionalidades do dispositivo.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">10. RESPONSABILIDADE SOBRE DADOS</h4>
            <p>O cliente é responsável por realizar backup prévio. A assistência não se responsabiliza por perda de dados, salvo se comprovada culpa direta. A entrega do aparelho sem backup prévio implica na aceitação do risco de perda integral das informações armazenadas.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">11. DEFEITOS PREEXISTENTES</h4>
            <p>A assistência não responde por defeitos já existentes no momento da entrada, desde que registrados. O registro fotográfico ou checklist de entrada servirá como prova técnica absoluta da condição inicial do dispositivo.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <p class="font-bold text-[#1a1a1a]">🛡️ PARTE II – GARANTIA</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">12. PRAZO DE GARANTIA</h4>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>Telas e baterias (Original/Premium): até 12 meses</li>
              <li>Peças Standard: 90 dias</li>
              <li>Demais serviços: 90 dias</li>
            </ul>
            <p class="mt-2">Nos termos do Art. 26 do CDC. O prazo de garantia contratual soma-se à garantia legal, salvo disposição em contrário na Ordem de Serviço.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">13. COBERTURA</h4>
            <p>A garantia cobre exclusivamente:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>defeitos de fabricação</li>
              <li>falhas técnicas diretamente relacionadas ao serviço</li>
            </ul>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">14. EXCLUSÕES</h4>
            <p>Não estão cobertos:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>queda ou impacto</li>
              <li>contato com líquido</li>
              <li>mau uso</li>
              <li>intervenção de terceiros</li>
              <li>desgaste natural</li>
              <li>atualizações de sistema</li>
            </ul>
            <p class="mt-2">A presença de qualquer um dos itens acima invalida imediatamente a garantia prestada.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">15. CONDIÇÕES DA GARANTIA</h4>
            <p>A garantia depende de:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>apresentação do comprovante</li>
              <li>ausência de violação do aparelho</li>
            </ul>
            <p class="mt-2">A remoção ou dano aos selos de garantia internos ou externos implica na perda total do direito à assistência gratuita.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">16. PRAZO DE SOLUÇÃO</h4>
            <p>Prazo de até 30 dias para solução, conforme Art. 18 do CDC. Em casos de complexidade técnica elevada ou dependência de importação de peças, o prazo poderá ser estendido mediante acordo entre as partes.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">17. CIÊNCIA EXPRESSA DO CLIENTE</h4>
            <p>O cliente declara ciência quanto a:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>peça não reconhecida</li>
              <li>limitações técnicas</li>
              <li>riscos do reparo</li>
              <li>possíveis incompatibilidades futuras</li>
            </ul>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">18. LIMITAÇÃO DE RESPONSABILIDADE</h4>
            <p>A assistência não responde por restrições impostas por fabricante ou software, desde que não decorrentes de falha na prestação do serviço. A responsabilidade da CONTRATADA limita-se ao valor total do serviço contratado, não abrangendo lucros cessantes ou danos indiretos.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <p class="font-bold text-[#1a1a1a]">💳 PARTE III – PAGAMENTO (FORTE / BLINDADA)</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">19. PAGAMENTO ANTECIPADO – ARRAS CONFIRMATÓRIAS</h4>
            <p>Para início do serviço, será exigido pagamento antecipado de até 20% do valor total, com natureza jurídica de arras confirmatórias, nos termos dos Arts. 408, 409 e 418 do Código Civil. Este valor possui função de:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>confirmar a contratação</li>
              <li>garantir execução</li>
              <li>cobrir mobilização operacional</li>
            </ul>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">20. VINCULAÇÃO CONTRATUAL</h4>
            <p>O pagamento antecipado vincula as partes, autorizando:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>reserva de agenda</li>
              <li>bloqueio de horário técnico</li>
              <li>aquisição de peças</li>
              <li>início da execução</li>
            </ul>
            <p class="mt-2">A contratação pode ser formalizada por meios eletrônicos, com plena validade jurídica.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">21. IRRETRATABILIDADE RELATIVA</h4>
            <p>Após iniciadas providências operacionais, o valor pago não será devolvido integralmente em caso de desistência imotivada. Poderá ser retido para cobertura de:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>custos administrativos</li>
              <li>peças adquiridas</li>
              <li>tempo técnico reservado</li>
              <li>mobilização de equipe</li>
            </ul>
            <p class="mt-2">Sempre de forma proporcional e comprovada, vedado enriquecimento sem causa.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">22. CANCELAMENTO</h4>
            <p>Antes de custos: → devolução integral Após custos: → retenção proporcional ao prejuízo comprovado</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">23. DESISTÊNCIA APÓS INÍCIO</h4>
            <p>Autoriza:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>retenção das arras</li>
              <li>cobrança de custos já incorridos</li>
              <li>cobrança complementar, se necessário</li>
            </ul>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">24. NÃO COMPARECIMENTO (NO-SHOW)</h4>
            <p>Autoriza:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>retenção proporcional</li>
              <li>perda de prioridade de agenda</li>
              <li>eventual nova cobrança para reagendamento</li>
            </ul>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">25. PAGAMENTO FINAL</h4>
            <p>A entrega do aparelho fica condicionada à quitação integral do débito, nos termos do Art. 476 do Código Civil. O CONTRATANTE renuncia ao direito de retirada do bem sem a devida contraprestação financeira.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">26. DIREITO DE RETENÇÃO</h4>
            <p>A assistência poderá reter o aparelho até pagamento integral, desde que:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>o valor seja certo e exigível</li>
              <li>não haja abuso</li>
            </ul>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">27. INADIMPLEMENTO</h4>
            <p>O não pagamento autoriza:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>cobrança extrajudicial</li>
              <li>negativação</li>
              <li>protesto</li>
              <li>ação judicial</li>
            </ul>
            <p class="mt-2">Com incidência de:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>juros</li>
              <li>correção</li>
              <li>honorários</li>
            </ul>
            <p class="mt-2">(Arts. 389 e 395 do Código Civil)</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">28. PROVA CONTRATUAL</h4>
            <p>Este contrato, junto com:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>ordem de serviço</li>
              <li>comprovantes</li>
              <li>mensagens</li>
              <li>registros técnicos</li>
            </ul>
            <p class="mt-2">constitui prova válida para cobrança. As conversas via aplicativos de mensagens são reconhecidas como prova documental de autorização e ciência.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">29. CHARGEBACK</h4>
            <p>A contestação indevida caracteriza inadimplemento e poderá gerar:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>cobrança judicial</li>
              <li>indenização</li>
              <li>envio de provas à operadora</li>
            </ul>
            <p class="mt-2">O CONTRATANTE declara que a retirada do aparelho após o reparo constitui aceite irrevogável da qualidade do serviço, tornando nula qualquer tentativa de chargeback por "serviço não prestado" ou "mercadoria não recebida".</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">30. ABANDONO DE APARELHO</h4>
            <p>Após 90 dias sem retirada, caracteriza abandono (Art. 1.275, CC). A assistência poderá:</p>
            <ul class="mt-1 pl-4 list-disc space-y-0.5">
              <li>vender o bem</li>
              <li>quitar débitos</li>
              <li>devolver eventual saldo</li>
            </ul>
            <p class="mt-2">O CONTRATANTE será notificado por 03 (três) vezes antes da caracterização do abandono.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">31. ARMAZENAMENTO</h4>
            <p>Poderá ser cobrada taxa de permanência após comunicação de conclusão. O valor da taxa será de R$ [Inserir Valor] por dia de atraso na retirada.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">32. RETIRADA PARCIAL</h4>
            <p>Não será permitida retirada sem pagamento integral, salvo acordo formal.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">33. RENEGOCIAÇÃO</h4>
            <p>Só terá validade se formalizada por escrito.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">34. FORÇA PROBATÓRIA</h4>
            <p>Este instrumento constitui início de prova escrita para fins judiciais.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <p class="font-bold text-[#1a1a1a]">⚖️ PARTE IV – DISPOSIÇÕES FINAIS</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">35. BOA-FÉ CONTRATUAL</h4>
            <p>As partes se obrigam a cumprir o contrato conforme os princípios da boa-fé objetiva (Art. 422 do Código Civil).</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">36. NULIDADE PARCIAL</h4>
            <p>A eventual nulidade de cláusula não invalida o restante do contrato.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">37. FORO</h4>
            <p>Fica eleito o foro do domicílio do consumidor, nos termos do Art. 101 do CDC.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">38. ACEITE</h4>
            <p>O cliente declara que leu, compreendeu e concorda integralmente com os termos.</p>
          </div>
          <div class="border-t border-[#eee] pt-3">
            <h4 class="font-bold text-[#1a1a1a] mb-1">39. VALIDADE DIGITAL</h4>
            <p>Este contrato possui validade jurídica inclusive quando firmado por meios eletrônicos.</p>
          </div>
        </div>
      </div>`;

// ─────────────────────────────────────────────────────────────────────────────
// CORRECT JS OVERLAY HTML (used in agendamento.js)
// ─────────────────────────────────────────────────────────────────────────────
const JS_HTML = `<div class="termos-body" style="font-family:Inter,sans-serif">
          <h2 style="font-size:15px;font-weight:800;margin:0 0 8px;color:#1a1a1a">TERMO GERAL DE PRESTAÇÃO DE SERVIÇOS, GARANTIA E PAGAMENTO</h2>
          <p style="font-size:12px;color:#888;margin:0 0 12px">DISPOSITIVOS ELETRÔNICOS (APPLE E SIMILARES)</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">1. IDENTIFICAÇÃO DO FORNECEDOR</h3>
          <p>O presente instrumento regula a prestação de serviços técnicos especializados e o fornecimento de peças por empresa de assistência técnica independente. A empresa declara não possuir vínculo com a fabricante Apple Inc., não sendo assistência autorizada, atuando de forma autônoma, nos termos dos Arts. 421 e 425 do Código Civil. O CONTRATANTE declara ciência inequívoca de que a intervenção por assistência não autorizada poderá acarretar a perda de garantias vigentes junto ao fabricante original.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">2. FUNDAMENTAÇÃO LEGAL</h3>
          <p>Este contrato é regido pelo Código de Defesa do Consumidor (Lei nº 8.078/90) e Código Civil (Lei nº 10.406⁄2002), especialmente pelos Arts. 6º, 12, 14, 18, 20, 26, 30, 35, 39, 46, 50, 51 e 101 do CDC e Arts. 187, 389, 395, 408, 409, 418, 421, 422, 476 e 927 do Código Civil. As cláusulas aqui dispostas visam o equilíbrio contratual e a preservação da boa-fé objetiva (Art. 422, CC).</p>
          <p style="font-weight:700;margin:12px 0 4px">🔧 PARTE I – PRESTAÇÃO DE SERVIÇOS</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">3. NATUREZA DO SERVIÇO</h3>
          <p>A assistência realiza manutenção, reparo e substituição de componentes, podendo utilizar:</p>
          <ul><li>peças originais (retiradas de outro aparelho)</li><li>peças compatíveis premium</li><li>peças compatíveis standard</li></ul>
          <p>O cliente declara ciência de que a assistência não realiza pareamento com servidores da fabricante nem possui acesso a sistemas proprietários, podendo haver limitações de funcionalidade, desde que previamente informadas, conforme Art. 6º, III do CDC. A escolha da peça será formalizada no orçamento, sendo o CONTRATANTE o único responsável pela opção técnica/financeira adotada.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">4. DIAGNÓSTICO TÉCNICO</h3>
          <p>O diagnóstico inicial possui caráter preliminar, podendo ser alterado após testes técnicos aprofundados. Qualquer alteração de orçamento dependerá de aprovação do cliente, inclusive por meios eletrônicos (WhatsApp, SMS ou sistema), nos termos do Art. 30 do CDC. A aprovação por meio digital possui força vinculante e autoriza o início imediato dos serviços e aquisição de insumos.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">5. RISCO DO REPARO</h3>
          <p>O cliente declara ciência de que reparos eletrônicos envolvem risco técnico. Em aparelhos com:</p>
          <ul><li>oxidação</li><li>danos estruturais</li><li>intervenções anteriores</li><li>falhas graves</li></ul>
          <p>poderá ocorrer agravamento ou perda total. A assistência não responde por danos decorrentes exclusivamente de vícios preexistentes, desde que comprovados por registros técnicos e inexistente falha na prestação do serviço. O CONTRATANTE assume o risco inerente à tentativa de recuperação de dispositivos em estado crítico ou com danos ocultos.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">6. CLASSIFICAÇÃO DAS PEÇAS</h3>
          <p>O cliente declara ciência quanto à natureza das peças utilizadas, conforme dever de informação (Art. 6º, III do CDC). A CONTRATADA garante que as peças utilizadas mantêm a compatibilidade técnica necessária para o funcionamento do dispositivo, ressalvadas as limitações de software impostas pelo fabricante.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">7. PEÇAS FORNECIDAS PELO CLIENTE</h3>
          <p>Não há garantia sobre peças fornecidas pelo cliente quanto à qualidade, compatibilidade ou procedência. A responsabilidade da assistência limita-se à execução do serviço. Eventuais danos causados ao dispositivo em decorrência de defeitos na peça fornecida pelo cliente são de inteira responsabilidade deste.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">8. PEÇA NÃO RECONHECIDA</h3>
          <p>Após substituição, poderá ocorrer aviso de:</p>
          <ul><li>"peça não reconhecida"</li></ul>
          <p>Isso não caracteriza defeito, desde que:</p>
          <ul><li>não comprometa a função essencial</li><li>tenha sido previamente informado</li></ul>
          <p>O CONTRATANTE declara estar ciente de que tais avisos são restrições de software da fabricante e não configuram vício do serviço ou da peça aplicada.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">9. LIMITAÇÕES TÉCNICAS</h3>
          <p>Após o reparo, poderão ocorrer:</p>
          <ul><li>perda de vedação contra água</li><li>indisponibilidade de funções (Face ID, True Tone, etc.)</li><li>alterações por atualização de sistema</li></ul>
          <p>Tais situações não caracterizam vício, quando previamente informadas. A CONTRATADA não se responsabiliza por atualizações de software posteriores que venham a restringir funcionalidades do dispositivo.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">10. RESPONSABILIDADE SOBRE DADOS</h3>
          <p>O cliente é responsável por realizar backup prévio. A assistência não se responsabiliza por perda de dados, salvo se comprovada culpa direta. A entrega do aparelho sem backup prévio implica na aceitação do risco de perda integral das informações armazenadas.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">11. DEFEITOS PREEXISTENTES</h3>
          <p>A assistência não responde por defeitos já existentes no momento da entrada, desde que registrados. O registro fotográfico ou checklist de entrada servirá como prova técnica absoluta da condição inicial do dispositivo.</p>
          <p style="font-weight:700;margin:12px 0 4px">🛡️ PARTE II – GARANTIA</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">12. PRAZO DE GARANTIA</h3>
          <ul><li>Telas e baterias (Original/Premium): até 12 meses</li><li>Peças Standard: 90 dias</li><li>Demais serviços: 90 dias</li></ul>
          <p>Nos termos do Art. 26 do CDC. O prazo de garantia contratual soma-se à garantia legal, salvo disposição em contrário na Ordem de Serviço.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">13. COBERTURA</h3>
          <p>A garantia cobre exclusivamente:</p>
          <ul><li>defeitos de fabricação</li><li>falhas técnicas diretamente relacionadas ao serviço</li></ul>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">14. EXCLUSÕES</h3>
          <p>Não estão cobertos:</p>
          <ul><li>queda ou impacto</li><li>contato com líquido</li><li>mau uso</li><li>intervenção de terceiros</li><li>desgaste natural</li><li>atualizações de sistema</li></ul>
          <p>A presença de qualquer um dos itens acima invalida imediatamente a garantia prestada.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">15. CONDIÇÕES DA GARANTIA</h3>
          <p>A garantia depende de:</p>
          <ul><li>apresentação do comprovante</li><li>ausência de violação do aparelho</li></ul>
          <p>A remoção ou dano aos selos de garantia internos ou externos implica na perda total do direito à assistência gratuita.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">16. PRAZO DE SOLUÇÃO</h3>
          <p>Prazo de até 30 dias para solução, conforme Art. 18 do CDC. Em casos de complexidade técnica elevada ou dependência de importação de peças, o prazo poderá ser estendido mediante acordo entre as partes.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">17. CIÊNCIA EXPRESSA DO CLIENTE</h3>
          <p>O cliente declara ciência quanto a:</p>
          <ul><li>peça não reconhecida</li><li>limitações técnicas</li><li>riscos do reparo</li><li>possíveis incompatibilidades futuras</li></ul>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">18. LIMITAÇÃO DE RESPONSABILIDADE</h3>
          <p>A assistência não responde por restrições impostas por fabricante ou software, desde que não decorrentes de falha na prestação do serviço. A responsabilidade da CONTRATADA limita-se ao valor total do serviço contratado, não abrangendo lucros cessantes ou danos indiretos.</p>
          <p style="font-weight:700;margin:12px 0 4px">💳 PARTE III – PAGAMENTO (FORTE / BLINDADA)</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">19. PAGAMENTO ANTECIPADO – ARRAS CONFIRMATÓRIAS</h3>
          <p>Para início do serviço, será exigido pagamento antecipado de até 20% do valor total, com natureza jurídica de arras confirmatórias, nos termos dos Arts. 408, 409 e 418 do Código Civil. Este valor possui função de:</p>
          <ul><li>confirmar a contratação</li><li>garantir execução</li><li>cobrir mobilização operacional</li></ul>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">20. VINCULAÇÃO CONTRATUAL</h3>
          <p>O pagamento antecipado vincula as partes, autorizando:</p>
          <ul><li>reserva de agenda</li><li>bloqueio de horário técnico</li><li>aquisição de peças</li><li>início da execução</li></ul>
          <p>A contratação pode ser formalizada por meios eletrônicos, com plena validade jurídica.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">21. IRRETRATABILIDADE RELATIVA</h3>
          <p>Após iniciadas providências operacionais, o valor pago não será devolvido integralmente em caso de desistência imotivada. Poderá ser retido para cobertura de:</p>
          <ul><li>custos administrativos</li><li>peças adquiridas</li><li>tempo técnico reservado</li><li>mobilização de equipe</li></ul>
          <p>Sempre de forma proporcional e comprovada, vedado enriquecimento sem causa.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">22. CANCELAMENTO</h3>
          <p>Antes de custos: → devolução integral Após custos: → retenção proporcional ao prejuízo comprovado</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">23. DESISTÊNCIA APÓS INÍCIO</h3>
          <p>Autoriza:</p>
          <ul><li>retenção das arras</li><li>cobrança de custos já incorridos</li><li>cobrança complementar, se necessário</li></ul>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">24. NÃO COMPARECIMENTO (NO-SHOW)</h3>
          <p>Autoriza:</p>
          <ul><li>retenção proporcional</li><li>perda de prioridade de agenda</li><li>eventual nova cobrança para reagendamento</li></ul>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">25. PAGAMENTO FINAL</h3>
          <p>A entrega do aparelho fica condicionada à quitação integral do débito, nos termos do Art. 476 do Código Civil. O CONTRATANTE renuncia ao direito de retirada do bem sem a devida contraprestação financeira.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">26. DIREITO DE RETENÇÃO</h3>
          <p>A assistência poderá reter o aparelho até pagamento integral, desde que:</p>
          <ul><li>o valor seja certo e exigível</li><li>não haja abuso</li></ul>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">27. INADIMPLEMENTO</h3>
          <p>O não pagamento autoriza:</p>
          <ul><li>cobrança extrajudicial</li><li>negativação</li><li>protesto</li><li>ação judicial</li></ul>
          <p>Com incidência de:</p>
          <ul><li>juros</li><li>correção</li><li>honorários</li></ul>
          <p>(Arts. 389 e 395 do Código Civil)</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">28. PROVA CONTRATUAL</h3>
          <p>Este contrato, junto com:</p>
          <ul><li>ordem de serviço</li><li>comprovantes</li><li>mensagens</li><li>registros técnicos</li></ul>
          <p>constitui prova válida para cobrança. As conversas via aplicativos de mensagens são reconhecidas como prova documental de autorização e ciência.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">29. CHARGEBACK</h3>
          <p>A contestação indevida caracteriza inadimplemento e poderá gerar:</p>
          <ul><li>cobrança judicial</li><li>indenização</li><li>envio de provas à operadora</li></ul>
          <p>O CONTRATANTE declara que a retirada do aparelho após o reparo constitui aceite irrevogável da qualidade do serviço, tornando nula qualquer tentativa de chargeback por "serviço não prestado" ou "mercadoria não recebida".</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">30. ABANDONO DE APARELHO</h3>
          <p>Após 90 dias sem retirada, caracteriza abandono (Art. 1.275, CC). A assistência poderá:</p>
          <ul><li>vender o bem</li><li>quitar débitos</li><li>devolver eventual saldo</li></ul>
          <p>O CONTRATANTE será notificado por 03 (três) vezes antes da caracterização do abandono.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">31. ARMAZENAMENTO</h3>
          <p>Poderá ser cobrada taxa de permanência após comunicação de conclusão. O valor da taxa será de R$ [Inserir Valor] por dia de atraso na retirada.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">32. RETIRADA PARCIAL</h3>
          <p>Não será permitida retirada sem pagamento integral, salvo acordo formal.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">33. RENEGOCIAÇÃO</h3>
          <p>Só terá validade se formalizada por escrito.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">34. FORÇA PROBATÓRIA</h3>
          <p>Este instrumento constitui início de prova escrita para fins judiciais.</p>
          <p style="font-weight:700;margin:12px 0 4px">⚖️ PARTE IV – DISPOSIÇÕES FINAIS</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">35. BOA-FÉ CONTRATUAL</h3>
          <p>As partes se obrigam a cumprir o contrato conforme os princípios da boa-fé objetiva (Art. 422 do Código Civil).</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">36. NULIDADE PARCIAL</h3>
          <p>A eventual nulidade de cláusula não invalida o restante do contrato.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">37. FORO</h3>
          <p>Fica eleito o foro do domicílio do consumidor, nos termos do Art. 101 do CDC.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">38. ACEITE</h3>
          <p>O cliente declara que leu, compreendeu e concorda integralmente com os termos.</p>
          <h3 style="font-size:13px;font-weight:700;margin:12px 0 4px;color:#1a1a1a">39. VALIDADE DIGITAL</h3>
          <p>Este contrato possui validade jurídica inclusive quando firmado por meios eletrônicos.</p>
        </div>`;

// ─────────────────────────────────────────────────────────────────────────────
// 1. Fix HTML service pages
// ─────────────────────────────────────────────────────────────────────────────
const HTML_RE = /<h3 class="text-xl font-bold text-\[#1a1a1a\] mb-1 tracking-tight">TERMO GERAL[\s\S]*?<\/div>\s*<\/div>(?=\s*<div class="px-8 pb-8)/;

let htmlFixed = 0;
for (const name of fs.readdirSync(BASE)) {
  if (!name.endsWith('.html') || name === 'termos.html') continue;
  const fp = path.join(BASE, name);
  const src = fs.readFileSync(fp, 'utf8');
  if (!src.includes('TERMO GERAL')) continue;
  const out = src.replace(HTML_RE, POPUP_HTML);
  if (out !== src) { fs.writeFileSync(fp, out, 'utf8'); htmlFixed++; }
}
console.log('HTML files fixed:', htmlFixed);

// ─────────────────────────────────────────────────────────────────────────────
// 2. Fix agendamento.js
// ─────────────────────────────────────────────────────────────────────────────
const JS_RE = /<div class="termos-body"[\s\S]*?<\/div>(?=\s*<button onclick="window\.agendCloseTermosContent)/;
const jsPath = path.join(BASE, 'js', 'agendamento.js');
const jsSrc = fs.readFileSync(jsPath, 'utf8');
const jsOut = jsSrc.replace(JS_RE, JS_HTML);
if (jsOut !== jsSrc) { fs.writeFileSync(jsPath, jsOut, 'utf8'); console.log('agendamento.js fixed'); }
else console.log('agendamento.js: pattern not matched');
