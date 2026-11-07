# Imagens — Sucatas Valinhos Ambiental

Produção em 07/11/2026 pela ferramenta integrada image_gen. Dez imagens ilustrativas geradas por IA; nenhuma fotografia real da empresa estava disponível no projeto. Não representam documentalmente a frota ou as instalações. Sem marcas ou textos adicionados às cenas. Os espaços provisórios foram substituídos, mantendo textos comerciais, layout, tipografia, cores, dimensões das seções, header, footer e funcionalidades existentes.

Arquivos em public/images/:
- hero-sucatas-valinhos.webp — primeira dobra, 1774 × 887.
- hero-sucatas-valinhos-mobile.webp — enquadramento vertical para celular, 900 × 1200.
- sobre-sucatas-valinhos.webp — área sobre, 1400 × 1000.
- servico-coleta.webp — caminhão de coleta, 1200 × 900.
- servico-sucatas.webp — metais organizados, 1200 × 900.
- servico-plasticos.webp — fardos de plástico, 1200 × 900.
- servico-residuos.webp — logística e contêineres, 1200 × 900.
- background-materiais.webp — folhas e espaço negativo, 2000 × 667.
- cta-sucatas-valinhos.webp — chamada final, 1961 × 802.
- cta-sucatas-valinhos-mobile.webp — chamada no celular, 900 × 1200.

Os originais permanecem em C:/Users/Ludovik/.codex/generated_images/. Os caminhos, prompts completos, dimensões e tamanhos estão em artifacts/image-production/manifest.json. Foram mantidas as proporções nativas, sem ampliar artificialmente os arquivos. Os nomes e caminhos do briefing foram usados nas versões finais.

Componentes atualizados: src/components/ui.tsx (Photo, alt, identificação ilustrativa, picture responsivo e sizes), src/app/page.tsx (nomes das imagens), src/data/site.ts (imagens dos serviços). src/app/globals.css recebeu apenas fundo de materiais e regras de enquadramento/sobreposição das imagens; as alterações de escala e espaçamento que já existiam antes da tarefa foram preservadas.

Validação: renderização em 1440, 1366, 768 e 390 px, sete imagens de conteúdo carregadas em cada largura, dez arquivos WebP acessíveis, fundo dos materiais carregado e sem overflow horizontal ou erros JavaScript. Menu mobile verificado. Capturas e relatório: artifacts/image-production. A primeira inspeção identificou corte lateral na hero mobile; o enquadramento foi corrigido para conter o veículo inteiro, sem mudar a altura da seção.

Build Next.js concluído sem erros. Prévia local em http://localhost:3007 . Nenhuma imagem pendente de geração. Fotos reais e logo oficial continuam dependendo do cliente, conforme PRODUCT.md. Sem commit ou publicação nesta tarefa.
