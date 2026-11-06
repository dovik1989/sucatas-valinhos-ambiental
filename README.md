# Sucatas Valinhos Ambiental

V1 local em Next.js 15, React 19, TypeScript, Tailwind CSS e Lucide.

## Executar
```sh
npm install
npm run dev
```
Abra http://localhost:3002. Produção: `npm run build` e `npm start`. Verificação: `npm run typecheck`.

## Editar
Dados e categorias em `src/data/site.ts`; seções em `src/app/page.tsx`; cabeçalho e formulário em `src/components`; estilos em `src/app/globals.css`. Fontes locais Space Grotesk com licença OFL em `fonts/`.

## Imagens
Todos os arquivos SVG em `public/images` são placeholders geométricos identificados, não fotografias reais. Substitua por fotos autorizadas e atualize nomes no page.tsx e site.ts. O logotipo atual é somente o nome da empresa em texto; substituir pelo arquivo oficial. Favicon provisório SV.

## Contato
Copie `.env.example` para `.env.local`. Configure NEXT_PUBLIC_WHATSAPP_NUMBER com 55 + DDD + número. Sem número válido, os CTAs levam ao contato. Formulário prepara mailto e não afirma envio concluído. Confirme se o aplicativo de e-mail está configurado no dispositivo.

## Vercel
Importe esta pasta em um repositório próprio, selecione Next.js na Vercel e configure NEXT_PUBLIC_SITE_URL com o domínio HTTPS definitivo. Isso ativa canonical e sitemap. Não houve push ou publicação.

## Pendências
Confirmar endereço, número de WhatsApp, categorias e condições de atendimento; fornecer fotos e logo. Layout segue largura máxima de 1280 px, margens desktop de 64 px e header de 88 px do código local designer-ortiz; a composição e densidade seguem o mockup de reciclagem. Animações nativas leves com IntersectionObserver e Web Animations; respeitam redução de movimento.
