# Design.md — Identidade Visual Vorah Company

> Fonte completa (tokens CSS, componentes React, kit de UI, deck): `branding/`.
> Este arquivo é o resumo de referência para briefings, prompts de IA e decisões rápidas de design.

---

## 1. A marca em uma frase

**Vorah Company** é um estúdio de design e marketing digital brasileiro. Vibe: **quente, terrosa, humana e premium-acessível** — o oposto do azul corporativo tech-frio. Pense em tons de papel natural + um toque de âmbar dourado, muito espaço em branco, títulos serifados grandes e acolhedores, formas suaves e arredondadas.

**Assinatura:** *"Conectamos marcas e pessoas com intenção."*
**Posicionamento:** *"Marketing com estratégia, leveza e parceria."*

---

## 2. Paleta de cores

### Cores-base (guia de marca)

| Token | Hex | Uso |
|---|---|---|
| `--amber-500` | `#eba851` | **Primária** — a marca-flor, CTAs, destaques |
| `--charcoal-900` | `#27272a` | Tinta quase-preta / superfícies escuras |
| `--cocoa-700` | `#583432` | Marrom quente (cor de seção) |
| `--forest-700` | `#36492e` | Verde profundo (cor de seção) |
| `--teal-800` | `#203e4a` | Azul-petróleo profundo (cor de seção) |
| `--mint-300` | `#b3f5a0` | Acento lima vibrante (pop, nunca fundo grande) |
| `--yellow-300` | `#ffea6d` | Acento amarelo ensolarado (pop, nunca fundo grande) |
| `--stone-500` | `#8b8780` | Cinza neutro quente — texto apagado, divisores |

### Papel / superfícies claras

- `--cream-50` `#faf7f1` — fundo padrão (papel)
- `--cream-100` `#f4efe6` — fundo sutil
- `--white` `#ffffff` — cartões/superfícies

### Regra de combinação

Um tom terroso de fundo + acento âmbar + tipografia creme, **por seção**. Nunca mais de dois tons terrosos competindo ao mesmo tempo. Mint e amarelo são pontuais (selos, sublinhados, preenchimento de gráfico) — nunca campos grandes.

**Par-herói:** âmbar `#eba851` sobre carvão `#27272a`, contra papel creme.

---

## 3. Tipografia

| Papel | Fonte | Observação |
|---|---|---|
| **Títulos / display** | **Karelle** (arquivo em `branding/assets/fonts/Karelle.otf`), fallback Recoleta/Georgia | Serifada, quente, arredondada — só para títulos |
| **Corpo / UI** | **Outfit** | Sans geométrica — só para textos menores (nunca em títulos) |
| **Eyebrow/rótulo "COMPANY"** | Outfit, bold, maiúsculas, tracking ~0.18em | Sempre versalete + espaçamento largo sob o wordmark "Vorah" |

**Escala tipográfica:** de `--text-xs` (12px) a `--text-5xl` (76px) — não tenha medo de tamanhos grandes no hero.

**Entrelinha:** títulos apertados (`1.05–1.18`), corpo relaxado (`1.65`) para leitura fácil.

**Tracking:** títulos levemente negativos (-0.02em); rótulos em caixa alta bem espaçados (+0.18em).

---

## 4. Forma, espaçamento e elevação

- **Escala de espaçamento:** base 4px (`--space-1` a `--space-10`, 4px → 128px). Layout arejado, respiro generoso (≥96px de ritmo vertical no desktop).
- **Container:** máx. ~1140px, com gutters confortáveis.
- **Cantos:** arredondados em tudo — `--radius-md 16px` (cartões), `--radius-lg 24px`+ (blocos de destaque), **pill** (`999px`) para botões e tags. Existe também um **blob orgânico** (`--radius-blob`) inspirado na pétala da flor — usar com moderação em máscaras de imagem/acentos decorativos.
- **Sombras:** quentes, suaves, difusas — sempre com opacidade baixa de carvão, nunca preto puro, nunca duras. Botões âmbar recebem um glow âmbar suave no destaque (`--shadow-amber`).
- **Bordas:** hairline cinza-pedra quente (`--color-border`) no claro; branco de baixa opacidade no escuro. Bordas fortes são raras.
- **Cartões:** superfície creme ou branca, radius 16–24px, sombra suave, hairline opcional. Nunca borda preta dura, nunca acento de borda colorida à esquerda.

---

## 5. Fundos, textura e imagens

- **Fundo padrão:** papel creme. Blocos full-bleed em tons terrosos (cacau/floresta/petróleo) para contraste entre seções.
- **Textura de marca:** padrão repetido em V (`assets/pattern-v.png`) e silhuetas grandes e discretas da flor/pétala — usar de forma sutil, sangrando pela borda, atrás do conteúdo.
- **Gradientes:** evitar; se usar, wash quente sutil (creme→âmbar-50), nunca gradiente saturado tech.
- **Fotografia:** real, quente, humana — donos de pequenos negócios brasileiros, luz natural, sorrisos genuínos, grade de cor levemente quente. Pessoas > stock abstrato. Máscara em cantos arredondados ou na forma blob/pétala.

---

## 6. Iconografia

- **Marca própria (não é kit de ícones de UI):**
  - **Flor de seis pétalas** (`mark-flower-amber.png` / `-black.png`, versões `-t.png` transparentes) — glifo principal da marca. Usar como bullet, "faísca", divisor de seção, ou textura de fundo grande e discreta.
  - **Monograma V** em hexágono arredondado — uso como ícone de app/avatar.
  - **Monograma floral** — selo decorativo secundário.
  - **Padrão-V repetido** — preenchimento de textura.
- **Ícones funcionais de UI** (menus, setas, formulários, checkmarks): padronizado em **Lucide** (lucide.dev) — traço leve arredondado, ~1.75px, `currentColor`, pontas/junções arredondadas. Substituição documentada — se a Vorah tiver um set próprio, trocar.
- **Emoji:** só como marcadores dos 4 diferenciais — 💬 (transparência) 🤝 (parceria) 🧭 (processo definido) 🎯 (foco em vendas). Um por card, nunca espalhado em parágrafos.

---

## 7. Movimento

- Suave e intencional: fades e pequenas subidas no scroll, curvas standard/ease-out, 140–420ms.
- **Nada de bounce, overshoot elástico ou spin** — "leveza" significa contenção.
- **Hover:** botões escurecem âmbar (500→600/700); cartões levantam levemente com sombra mais profunda; links tendem a âmbar.
- **Press:** leve scale-down (~0.98) e/ou tom âmbar ativo, rápido (`--duration-fast`).
- **Transparência/blur:** uso leve e raro (ex.: scrim translúcido de carvão sobre fotos, header levemente frosted no scroll). Não é uma marca "glassmorphism".

---

## 8. Voz e conteúdo (resumo)

- **Idioma:** português do Brasil, sempre.
- **Ponto de vista:** primeira pessoa do plural para o estúdio ("Nós guiamos", "Ajudamos") + segunda pessoa "você" para o cliente — parceria "a quatro mãos".
- **Tom:** confiante, encorajador, claro, humano. Vende resultado (vendas, autoridade, posicionamento), não métrica de vaidade.
- **Frase-contraste recorrente:** *"conteúdo bonito é bom, mas conteúdo com propósito é o que traz faturamento."*
- **Casing:** sentence case no corpo/maioria dos títulos; "COMPANY" sempre em caixa alta com tracking largo; rótulos de seção em minúsculas e gentis.
- **Números:** formatação brasileira (`R$ 1.200/mês`, `+430`, `85%`).
- **CTA padrão:** "Entrar em contato" → WhatsApp.

---

## 9. Onde encontrar cada coisa

| O que você precisa | Onde está |
|---|---|
| Tokens CSS completos (cor, tipo, espaçamento, sombra, motion) | `branding/tokens/*.css` |
| Folha de estilo única para linkar | `branding/styles.css` |
| Logos e marcas (PNG/SVG, incl. versões transparentes) | `branding/assets/` |
| Fonte Karelle | `branding/assets/fonts/Karelle.otf` |
| Componentes React prontos (Button, Card, Input, Logo...) | `branding/components/` |
| Kit de UI completo do site institucional | `branding/ui_kits/website/` |
| Template de deck comercial (11 slides) | `branding/templates/vorah-deck/` |
| Cards de especificação visual (cor, tipo, espaçamento) | `branding/guidelines/*.card.html` |
| Explicação completa e detalhada do sistema | `branding/readme.md` |

---

**Como aplicar:** ao gerar qualquer peça nova (landing page, post, deck, PDF, e-mail) para a Vorah ou para produtos dela (ex.: Mentoria Social Media Pro), usar esta paleta, tipografia e princípios de forma como guia rápido — e puxar os tokens/componentes reais de `branding/` sempre que o formato permitir (HTML/CSS/React).
