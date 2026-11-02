# Spec — Site institucional Rip Curl Brasil (São Bernardo do Campo, SP)

> Fonte da verdade para a `orquestra-dev`. Skills executam DENTRO deste documento. Data: 2026-11-02. Idioma: pt-BR.
> Suposição de autoria: o usuário representa a operação da Rip Curl em SP e tem autorização para usar a marca `[CONFIRMAR]`.

## 1. Missão e resultado esperado
Criar o site institucional estático da Rip Curl Brasil (escritório em São Bernardo do Campo), mobile-first, que:
1. apresenta a marca e a operação no Brasil com informações reais e verificáveis;
2. leva o visitante ao **WhatsApp** (conversão primária) ou à **ligação** (secundária), respeitando o horário do escritório;
3. rankeia para busca local ("Rip Curl Brasil", "Rip Curl São Bernardo do Campo", "wetsuit Rip Curl").
Público-alvo da conversão: lojistas/parceiros, clientes com dúvida de produto/pedido, atletas/surfistas. `[CONFIRMAR]` qual público é prioridade.

## 2. Fatos confirmados
| Fato | Origem |
|---|---|
| Nome: Rip Curl Brasil | print Google Maps |
| Categoria: **Escritório da empresa** (não é loja de varejo) | Maps |
| Nota 4,5 · 248 avaliações | Maps (valor do dia do print; não fixar no código) |
| Endereço: Av. Humberto de Alencar Castelo Branco, 1260 — Independência, São Bernardo do Campo — SP, 09850-300 | Maps |
| Telefone/WhatsApp: (11) 97591-8915 (Maps mostra botão WhatsApp e ligação com o mesmo número) | Maps |
| Horário: seg–qui 08:00–17:00; sex, sáb, dom fechado | Maps |
| Instagram: @ripcurl_brasil | link do usuário (conteúdo não acessível: HTTP 429) |
| Logo: círculo verde-limão com "RIP CURL WETSUITS" e "Torquay, Trestles, Hossegor." | imagem enviada |
| Marca fundada em 1969, Torquay (Austrália), por Doug Warbrick e Brian Singer; wetsuits desde 1969/1970 (fontes divergem); hoje do grupo Kathmandu (compra em 2019, US$ 236 mi) | Wikipedia; ripcurl.com "the beginning"; Peru Retail 2019 |

## 3. O que ainda não sabemos `[CONFIRMAR]`
- Razão social, CNPJ e relação jurídica com a Rip Curl International (licenciada? distribuidora?). **Nenhuma fonte pública encontrada.**
- Se o escritório recebe visitas ou é só administrativo (afeta "Como chegar").
- E-mail institucional; domínio; link de loja/e-commerce oficial; lista de lojas/franquias atuais (2019: 13 lojas — dado antigo, não publicar).
- Bairro correto: Maps diz "Independência"; diretório de CEP lista 09850-300 como "Assunção".
- Atletas patrocinados atuais, eventos no Brasil, catálogo (wetsuits? apparel? hardgoods?).
- Fotos originais, logo vetorial/PNG transparente, texto institucional aprovado.
- Preferência de WhatsApp: mensagem pré-preenchida.

**Regras de integridade (invioláveis):** nada de depoimento, número de vendas, prêmio, preço, certificação ou "revendedor/distribuidor oficial" inventado; a avaliação 4,5/248 só aparece como texto atribuído ao Google, nunca como selo falso; componentes dependentes de dado real ficam ocultos enquanto vazios; sem logos de terceiros (patrocinadores, WSL); sem hotlink de imagem de rede social; sem foto identificável de menores; atletas só com autorização.

## 4. Análise de marca
- **Nome:** "Rip Curl" = a curva da onda que rasga/quebra; linguagem de surf raiz, ação, risco.
- **Logo:** tipografia bolhuda/psicodélica anos 70 em círculo, herança de Torquay. O texto circular cita três picos lendários (Torquay, Trestles, Hossegor): a marca vende **origem e autenticidade de surf**, não moda genérica.
- **Paleta amostrada do logo (pixels reais):**
  - Lima `#CBFB4F` (média 203,247,85) — cor de marca/destaque.
  - Preto `#000000` — tipografia do logo e base.
  - Grafite de fundo da imagem `#25262A` (só contexto do print, não é cor de marca).
- **Personalidade:** autêntica, energética, direta, descontraída mas técnica (wetsuit = engenharia).
- **Posicionamento:** "Surf de verdade, desde Torquay — agora com atendimento no Brasil." Evitar prometer o que a operação local não comprovou.
- **Fraquezas a resolver:** presença web própria inexistente (só Maps/Instagram); Maps mostra "Fechado" fora do horário sem alternativa; Instagram é a única vitrine.

## 5. Nicho e concorrência
- Surf no Brasil: ~3 milhões (Ibrasurf, via Gazeta do Povo, sem data) a 4 milhões de praticantes (CEO WSL América Latina, Flashscore, base IBOPE/Repucom). Números divergentes: **não usar como afirmação no site**.
- 70% dos consumidores de surfwear não praticam o esporte (presidente do Ibrasurf, Times Brasil, sem data) — insumo de estratégia, não de copy.
- Surfwear brasileiro teve auge nos anos 1990/2000 e retraiu com fast fashion (Times Brasil). Diferencial defensável: **heritage + produto técnico**.
- Rip Curl no Brasil: lojas em SP, RJ, BA, PE, AL, SC (Gironews 2019); foco histórico em pontos de venda e na base (Rip Curl Grom Search, categoria até 16 anos — Máquina do Esporte, 2007; `[CONFIRMAR]` se segue ativa).
- Concorrentes de referência (para posicionamento, a listar na revisão): Quiksilver/Billabong, Hang Loose, Oakley surf. Nenhum benchmark local de SBC encontrado.

## 6. Público e objetivos
- **Visitante principal:** celular, vem do Google/Maps/Instagram, quer saber "é loja? onde? quando atendem? como falo?".
- **Conversão primária:** clique em WhatsApp. **Secundária:** ligar; "Como chegar" (Maps); Instagram.
- **KPIs:** cliques WhatsApp/ligação/rota, por página; (com consentimento).
- **Metas técnicas:** ver §11.

## 7. Direção de design
- **Conceito: "Selo de Torquay"** — o círculo lima do logo como motivo gráfico: o preto domina, o lima é o sinal. Sensação de adesivo/etiqueta de prancha: bordas arredondadas orgânicas, cantos "bolha", ritmo ousado. Porquê: o logo já é um selo; o site deve parecer extensão dele, não um template corporativo.
- **Tokens obrigatórios:** `--lime:#CBFB4F`, `--black:#000000`; neutros derivados: `--ink:#0B0B0C`, `--paper:#F6F6EF`, `--mute:#6B6D70`. Cor de destaque extra: no máximo 1 (azul-oceano profundo `#0A2A3A`, apenas em blocos de apoio).
- **Tipografia:** display largo, pesado, levemente arredondado (candidatas: *Bricolage Grotesque*, *Unbounded*, *Rubik*); corpo humanista legível (*Inter*, *DM Sans*). Escolha final: `design-taste-frontend`. Self-host (sem Google Fonts em runtime).
- **Hero:** fundo preto, H1 em **um único bloco legível** (sem quebra decorativa por palavra), selo lima circular girando levemente atrás/ao lado; subtítulo curto; CTA "Falar no WhatsApp" lima sobre preto visível acima da dobra em 360×640; CTA secundário "Ver horário". Faixa "Aberto agora / Fechado — volta segunda 08:00" calculada no fuso America/Sao_Paulo.
- **Contraste:** texto preto sobre lima = ~17:1 (OK). Texto lima sobre preto OK. Nunca lima sobre branco para texto.
- **Movimento:** discreto, só `transform/opacity`, respeitar `prefers-reduced-motion`.
- **Não fazer:** fotos de stock de praia/surf genéricas; gradientes roxos; ícones de template; carrossel automático; "mockup de loja online"; simular e-commerce sem existir; copiar o ripcurl.com; usar logos de atletas/patrocinadores; banner de cookies gigante; mapa pesado carregado no load.

## 8. UX: páginas e fluxo
Páginas (SPA-less, estáticas): 
1. **Home `/`** — hero + faixa de status/horário + "O que é a Rip Curl" (resumo) + "Atendimento" (3 cartões: WhatsApp, telefone, endereço) + história em linha do tempo curta + Instagram + FAQ resumido + CTA final.
2. **Sobre `/sobre/`** — história da marca (fatos §2) e da operação no Brasil (`[CONFIRMAR]` texto do dono; enquanto vazio, mostrar só a história global com atribuição).
3. **Contato `/contato/`** — endereço, mapa (clique para carregar), horários, WhatsApp, telefone, "Como chegar", aviso "escritório administrativo `[CONFIRMAR]`: não é loja".
4. **FAQ `/faq/`** — dúvidas reais: é loja? onde comprar? horário? como falar com o escritório? (respostas conservadoras).
5. **Privacidade `/privacidade/`** — LGPD.
6. 404.
Navegação: logo · Sobre · Contato · FAQ · botão WhatsApp fixo no mobile (barra inferior). Sem formulário (decisão: WhatsApp-first; evita backend, spam e dados pessoais). Botões: `wa.me/5511975918915?text=<mensagem codificada>`; `tel:+5511975918915`; Maps com query do endereço.

## 9. Conteúdo (copy base — validar com o dono)
- **H1:** "Surf de verdade desde Torquay. Rip Curl Brasil."
- **Sub:** "Fale com o escritório da Rip Curl em São Bernardo do Campo, de segunda a quinta, das 8h às 17h."
- **CTA:** "Falar no WhatsApp" / "Ligar agora".
- **História (fatos, com tom de voz curto):** 1969, Torquay: dois amigos surfistas, Doug Warbrick e Brian Singer, começam a fazer pranchas; logo vêm os wetsuits. Hoje a marca é conhecida pelo Rip Curl Pro em Bells Beach (campeonato em operação contínua mais antigo do mundo — fonte: Wikipedia; `[CONFIRMAR]` redação final).
- **Tom:** direto, 2ª pessoa, gírias leves de surf com moderação, sem exagero de "stoke".
- **FAQ (respostas só com fatos confirmados):** Horário; endereço; "O escritório vende ao público?" → `[CONFIRMAR]`, enquanto isso: "Fale com a gente pelo WhatsApp para saber como comprar"; "Como virar parceiro?" → WhatsApp.
- **Avisos:** "Rip Curl é marca registrada de seus titulares." Rodapé: razão social/CNPJ quando existir.
- Páginas educativas de topo de funil (futuro, sem implementar agora): guia de espessura de wetsuit (3/2, 4/3), cuidados com neoprene.

## 10. SEO
- **Termos:** "Rip Curl Brasil", "Rip Curl São Bernardo do Campo", "escritório Rip Curl SP", "wetsuit Rip Curl Brasil". Intenção: navegacional/local.
- **Metadados:** `title` ≤ 60, `description` ≤ 155, únicos por página; `canonical`; Open Graph/Twitter com imagem 1200×630 (selo lima, gerada).
- **JSON-LD:** `Organization` (nome, logo, sameAs Instagram) + `LocalBusiness`/`Organization` com `address`, `telephone`, `openingHoursSpecification` (Mon–Thu 08:00–17:00). **Não** incluir `aggregateRating` (evita marcação de avaliação autoanunciada); `FAQPage` na FAQ.
- **NAP idêntico** ao Maps: "Av. Humberto de Alencar Castelo Branco, 1260 — Independência, São Bernardo do Campo — SP, 09850-300 · (11) 97591-8915".
- `sitemap.xml`, `robots.txt`, `lang="pt-BR"`, links internos Home↔Contato↔FAQ.
- **Checklist GMN para o dono:** link do site na ficha; horário de feriados ("Dia de Finados" marcado "pode mudar"); categoria correta; fotos reais; responder avaliações; atualizar sex–dom conforme operação; postagens.
- **Analytics:** eventos `click_whatsapp`, `click_phone`, `click_directions`, `click_instagram`; só após consentimento; sem cookies até lá. `[CONFIRMAR]` ferramenta (Plausible/GA4).

## 11. Performance e acessibilidade
- Metas (mobile 4G, Lighthouse): Performance ≥ 95, A11y ≥ 95, SEO ≥ 95, Best Practices ≥ 95; LCP < 2,0 s, CLS < 0,05, INP < 150 ms.
- JS mínimo (Astro sem ilhas; script do status "aberto agora" < 2 KB). Imagens AVIF/WebP com `width/height`; hero sem imagem pesada (SVG/CSS). Fonte: `woff2` self-host, `font-display: swap`, subset latin.
- WCAG 2.1 AA: contraste, foco visível, skip link, landmarks, alvos ≥ 44 px, `aria-label` nos ícones, teste de teclado, 360 px sem scroll horizontal.

## 12. Segurança e privacidade
- Sem formulário e sem backend → superfície mínima. Sem segredos no cliente.
- LGPD: política de privacidade; analytics só com consentimento; sem cookies de terceiros no load; Maps/embeds sob clique.
- Headers (via `_headers`/`vercel.json`/`.htaccess` conforme host): CSP restritiva (`default-src 'self'`; fontes/imagens self; `frame-src` só Maps sob clique), HSTS, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` vazia, `frame-ancestors 'none'`.
- Links externos com `rel="noopener noreferrer"`. `npm audit` limpo; dependências mínimas e com versão fixada.

## 13. Stack e estrutura
- Repo vazio → **Astro 5 + CSS próprio (variáveis) + TypeScript**, saída 100% estática. Porquê: HTML pronto para SEO, zero JS por padrão, deploy em qualquer host (Hostinger/Vercel).
- Dados editáveis em `src/data/site.ts` (nome, NAP, horários, links, FAQ). Nada de dado duplicado em componentes.
- Variáveis de ambiente: `PUBLIC_SITE_URL` (canônico), `PUBLIC_WHATSAPP_MSG` (opcional).
- Estrutura: `src/{pages,components,layouts,data,styles}`, `public/{fonts,img}`, `docs/`.

## 14. Assets e política de imagens
| Arquivo | O que é | Res. | Origem | Uso |
|---|---|---|---|---|
| `docs/assets-origem/logo-wetsuits-original.jpg` | selo lima | 845×806 JPG | cliente | logo/favicon/OG (**recriar em SVG vetorial** só se aprovado; senão usar o JPG recortado em círculo) |
| `docs/assets-origem/print-google-maps.png` | print Maps | 1206×2622 | cliente | **só fonte de dados; nunca publicar** |
- Foto do cliente primeiro. **Nenhuma foto de campanha foi enviada.** Hero é tipográfico/gráfico (selo + preto/lima). Seções de foto ficam como **placeholders marcados** ou ocultas.
- Hero fotográfico exige ≥ 1600 px; conteúdo ≥ 800 px; sem repetir imagem; nada de miniatura de Maps/Instagram.
- **Fotos necessárias (pedir ao cliente):** fachada/entrada do escritório; equipe; wetsuits em uso (autorizadas); atletas (autorização); logo vetorial.

## 15. Processo e QA
1. Setup Astro + tokens + layout. 2. **Home** → **checkpoint visual** (screenshot 390/768/1440; corrigir antes de seguir). 3. Demais páginas. 4. SEO/JSON-LD/headers. 5. Auditorias (Lighthouse, a11y, segurança). 6. Revisão final 390/768/1440 com ≥ 1 ciclo de correção. 7. Relatório final com pendências `[CONFIRMAR]`.

## 16. Critérios de aceite
- [ ] 6 páginas existem e navegam entre si; 404 funcional.
- [ ] NAP, telefone e horários idênticos aos fatos (§2) e vindos de uma só fonte (`site.ts`).
- [ ] Nenhum dado inventado; nenhum selo/estatística/depoimento falso; `[CONFIRMAR]` não aparece como afirmação.
- [ ] CTA WhatsApp visível acima da dobra em 360×640; barra fixa mobile.
- [ ] Sem scroll horizontal em 360 px; alvos ≥ 44 px; foco visível; contraste AA.
- [ ] Lighthouse ≥ 95 nas 4 categorias (mobile); LCP/CLS/INP nas metas.
- [ ] JSON-LD válido; sem `aggregateRating`; sitemap/robots/canonical.
- [ ] Headers de segurança presentes; sem cookie antes de consentimento.
- [ ] `build` e `lint`/`astro check` limpos; `npm audit` sem críticos.
- [ ] Imagens conforme §14; placeholders marcados; lista "Fotos necessárias" no relatório.

## 17. Fontes
- Print Google Maps "Rip Curl Brasil" (enviado pelo usuário), 2026-11-02 (Dia de Finados).
- Logo enviado pelo usuário (amostragem de pixels).
- Rip Curl, "the beginning" — ripcurl.com/pages/the-beginning.
- Wikipedia, "Rip Curl" — en.wikipedia.org/wiki/Rip_Curl; "Doug Warbrick".
- Peru Retail, "Kathmandu compra Rip Curl por US$236 millones", 2019.
- Gironews, "Rip Curl abre primeira loja em shopping" (2019; resumo via busca) — gironews.com/franchising/rip-curl-abre-primeira-loja-em-shopping-13317/
- Máquina do Esporte, "Entrevista Caio Umehara", 28/09/2007 — maquinadoesporte.com.br/entrevista/entrevista-caio-umehara/
- Times Brasil, "Surfwear: ascensão, declínio e reinvenção" — timesbrasil.com.br/esportes/surfwear-o-que-explica-a-ascensao-o-declinio-e-a-reinvencao-do-setor/
- Gazeta do Povo, "Surfe vira modalidade olímpica e um negócio bilionário no Brasil" (sem data).
- Flashscore, "Brasil tem 40% da audiência global de surfe, diz CEO da WSL" .
- RuaCEP, CEP 09850-300 (divergência de bairro).
- Instagram @ripcurl_brasil: acesso bloqueado (HTTP 429), conteúdo não usado.
