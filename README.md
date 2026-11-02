# Rip Curl Brasil — site institucional

Site estático (Astro 7) do escritório da Rip Curl Brasil, São Bernardo do Campo (SP).
Especificação completa: [`docs/spec/rip-curl-brasil.md`](docs/spec/rip-curl-brasil.md) (fonte da verdade).

## Rodar
```bash
npm install
npm run dev        # desenvolvimento
npm run build      # gera dist/
npm run check      # astro check (TypeScript)
```
Defina `PUBLIC_SITE_URL` (ver `.env.example`) antes do build de produção: é usado em canonical, sitemap, robots e JSON-LD.

## Onde editar
- Telefone, endereço, horários, FAQ: `src/data/site.ts` (única fonte; o status "aberto agora" lê daqui).
- Cores/tipografia: variáveis em `src/styles/global.css` (lima `#CBFB4F`, preto `#000`, amostrados do logo).
- Fotos: `src/assets/` (Wikimedia Commons, com crédito no rodapé; trocar por fotos do cliente).

## Deploy
Saída 100% estática em `dist/`. Cabeçalhos de segurança prontos para Netlify/Cloudflare (`public/_headers`), Vercel (`vercel.json`) e Hostinger/Apache (`public/.htaccess`).

## Pendências do cliente
Ver seção 3 da spec ([CONFIRMAR]) e a lista "Fotos necessárias" (seção 14).
