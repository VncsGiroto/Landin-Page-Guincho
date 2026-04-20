# GiroFrancis Site

Landing page profissional para a GiroFrancis Auto Socorro, com foco em conversão imediata para atendimentos de guincho 24h em Itu e região.

## Objetivo

O projeto foi desenvolvido para captar leads de emergência com prioridade em:

- ligação direta para o telefone `(11) 97648-7350`
- abertura rápida do WhatsApp
- navegação mobile-first
- comunicação clara sobre atendimento em Itu, região e cobertura nacional sob consulta

## Estrutura

- [index.html](/C:/Dev/GiroFrancisSite/index.html:1): estrutura principal da landing page, SEO, CTAs e conteúdo
- [styles.css](/C:/Dev/GiroFrancisSite/styles.css:1): identidade visual, responsividade e ajustes dos botões
- [script.js](/C:/Dev/GiroFrancisSite/script.js:1): camada simples de tracking para cliques em telefone e WhatsApp
- `img/`: logo, ícones e fotos utilizadas na página

## Funcionalidades

- Hero com copy voltada para SEO local
- CTA de ligação em destaque
- CTA de WhatsApp com botão principal e botão flutuante
- Seção de serviços e diferenciais
- Estrutura visual adaptada para celular
- Meta tags para SEO
- Eventos JavaScript para futura integração com Google Analytics

## Serviços apresentados

- Guincho leve
- Remoção programada
- Transporte de máquinas
- Socorro mecânico

## Tecnologias

- HTML5
- CSS3
- JavaScript puro

## Rastreamento de eventos

Os cliques em telefone e WhatsApp enviam um evento `contact_click` para `window.dataLayer` e também suportam integração com `gtag` quando o Google Analytics estiver configurado.

## Como executar

1. Abra o arquivo `index.html` no navegador.
2. Para edição, altere `index.html`, `styles.css`, `script.js` e os arquivos da pasta `img`.

## Observações

- Todas as imagens do projeto são carregadas a partir da pasta `img`.
- O layout foi ajustado para reduzir excesso de botões no mobile e melhorar a leitura dos CTAs.
- O conteúdo foi alinhado com a operação informada: o site não divulga atendimento de guincho pesado.
