# TuneSpec

**Tudo o que seu carro pode se tornar.**

TuneSpec é uma plataforma para entusiastas automotivos: escolha seu carro, entenda as especificações, descubra upgrades compatíveis (com peças, preços e profissionais recomendados) e participe da comunidade de donos do mesmo modelo.

Não é um e-commerce — é um catálogo inteligente + guia de preparação + comunidade automotiva.

## MVP

Este repositório contém o MVP front-end, 100% estático (HTML + CSS + JavaScript puro, sem build). Basta abrir no navegador:

```bash
# opção 1: abrir direto
open index.html

# opção 2: servidor local
python3 -m http.server 8000
# → http://localhost:8000
```

### Fluxo

```
Home → Selecionar marca → Selecionar modelo → Página do veículo
                                              ├── Informações  (ficha técnica em cards)
                                              ├── Upgrades     (Performance · Estética)
                                              └── Comunidade   (posts, curtidas, comentários)
```

### O que está implementado

- **Home** — hero premium, marcas populares, "como funciona".
- **Página da marca** — cards de modelos com specs resumidas (10 marcas, 50+ modelos mockados).
- **Página do veículo** — foto/arte grande, specs em destaque, preço FIPE e 3 abas:
  - **Informações**: motor, potência, torque, peso, consumo, 0–100, velocidade máxima, câmbio, tração e FIPE — tudo em cards.
  - **Upgrades / Performance**: Stage 1, Stage 2, Stage 3, Projeto Turbo e Projeto Aspirado — cada um com descrição, objetivo, faixa de preço, dificuldade, tempo médio, peças recomendadas (com preço médio e botão "Ver produto") e profissionais recomendados (avaliação, Instagram, WhatsApp, site e contato). O conteúdo se adapta a motor aspirado ou turbo de fábrica.
  - **Upgrades / Estética**: faróis, lanternas, rodas, aerofólio, bodykit, suspensão e interior — produtos com imagem, descrição, preço médio e compatibilidade.
  - **Comunidade**: feed estilo Reddit moderno — criar post, curtir, comentar, compartilhar e salvar, com persistência local (localStorage).
- **Responsivo** — desktop first, com layout adaptado para mobile.

### Estrutura

```
index.html            entrada única (SPA com roteamento por hash)
assets/css/styles.css design system (tokens, componentes, responsivo)
assets/js/data.js     dados mockados (marcas, veículos, upgrades, comunidade)
assets/js/app.js      roteador + views + interações
```

### Identidade visual

- Paleta: preto `#0B0B0B`, cinzas `#1B1B1B` / `#2B2B2B`, branco e vermelho `#E10600` como acento pontual, com detalhes metálicos.
- Tipografia: Inter (Google Fonts) com fallback SF Pro / system.
- Estilo: minimalista, muito espaço em branco, sombras suaves, glassmorphism discreto na navegação. Sem aparência gamer ou de marketplace.

### Fotos reais dos veículos

A UI procura a foto de cada veículo em `assets/img/vehicles/<marca>-<modelo>.jpg` (ex.: `mitsubishi-lancer-gt.jpg`, 960px de largura, paisagem). Quando o arquivo não existe, ela usa a silhueta SVG automaticamente — basta adicionar as fotos que elas aparecem no catálogo e na página do veículo.

O script `scripts/fetch_images.py` busca e baixa fotos livremente licenciadas do Wikimedia Commons para todos os modelos (requer rede liberada para `commons.wikimedia.org` e `upload.wikimedia.org`) e registra os créditos/licenças em `assets/img/credits.json`:

```bash
python3 scripts/fetch_images.py            # todos os modelos
python3 scripts/fetch_images.py mitsubishi-lancer-gt  # apenas um
```

### Próximos passos (fora do MVP)

- Backend real (API + banco) para catálogo, comunidade e contas de usuário.
- Botão "Ver produto" redirecionando para Mercado Livre / Shopee (afiliados).
- Perfis de profissionais com agenda de contato real.
- Upload de fotos nos posts e projetos públicos ("garagem" do usuário).
