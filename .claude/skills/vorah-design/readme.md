# Vorah Company — Design System

> Conectamos marcas e pessoas com intenção.
> *(We connect brands and people with intention.)*

This is the brand & UI design system for **Vorah Company**, a Brazilian
strategic-communication and digital-marketing studio. Vorah helps small and
mid-sized businesses **position themselves with clarity, attract clients, and
sell with consistency** through social-media management, websites, landing
pages, visual identity, profile diagnostics, and social-media consulting.

It is built to let design agents produce on-brand interfaces, decks, social
posts and marketing assets that match Vorah's warm, confident, human voice.

---

## Company at a glance

| | |
|---|---|
| **Name** | Vorah Company |
| **Sector** | Digital marketing / social-media management studio |
| **Audience** | Small & mid-sized businesses (PMEs) across Brazil |
| **Location** | Florianópolis, SC — operates 100% online |
| **Languages** | Brazilian Portuguese (primary) |
| **Offer** | Social-media management, websites & landing pages, visual identity, profile diagnostics, social-media consulting. Plans from **R$ 1.599,00/mês**. |
| **Positioning** | "Marketing com estratégia, leveza e parceria." Beautiful content is good; *purposeful* content is what drives revenue. |
| **Contact** | contato@vorahcompany.com · +55 11 94554-9187 · [WhatsApp](https://wa.me/5511945549187) |
| **Social** | [Instagram @vorahcompany](https://instagram.com/vorahcompany) · [LinkedIn](https://www.linkedin.com/company/vorah-company) |

### Source materials used to build this system
- **Website:** https://www.vorahcompany.com/ (Wix) — primary source for copy, voice and structure.
- **Brand marks (uploaded PNGs):** V-monogram, "Vorah COMPANY" wordmark lockups,
  the amber six-petal flower mark, a floral monogram, and a repeating-V pattern.
  Copied into `assets/` (see Index).
- **Color palette (provided by client):**
  `#eba851 #27272a #583432 #36492e #203e4a #b3f5a0 #ffea6d #8b8780`.

> ⚠️ **Substitution still pending:** brand fonts (see Typography). The
> commercial PDF (`Apresentação Comercial`) **has** been incorporated — see the
> deck template and pricing below.

### Commercial deck — key facts (from `Apresentação Comercial.pdf`)
- Vorah = **estúdio de Design e Marketing Digital**; **+12 anos** em design para
  marcas/websites, **+5 anos** em conteúdo e gestão de redes sociais.
- Three services: **Site**, **Social Media**, **Identidade Visual**.
- Social-media plans (Instagram, monthly, one profile):
  **Básico R$ 1.100** · **Intermediário R$ 1.500** · **Avançado R$ 2.000**.
- Deck contact: **(47) 99795-7541** · contato@vorahcompany.com.

---

## CONTENT FUNDAMENTALS — how Vorah writes

**Language.** Brazilian Portuguese, always. Headlines and CTAs are short and
direct. Body copy is warm and plainspoken — professional but never corporate
or jargon-heavy. The site's own promise sums up the bar: *"de fácil
entendimento mas sem deixar de ser profissional"* (easy to understand without
ceasing to be professional).

**Point of view.** First-person **plural** for the studio ("**Nós** guiamos",
"**Ajudamos**", "**Acreditamos**", "**Atendemos**") and second-person **"você"**
for the client. The relationship is framed as a partnership built *"a quatro
mãos"* (four hands) — the studio and client build results **together**.

**Tone & vibe.** Confident, encouraging, clear, human. Sells outcomes (sales,
authority, positioning), not vanity metrics. Recurring contrast device:
*"conteúdo bonito é bom, mas conteúdo com propósito é o que traz faturamento"*
(pretty content is good, but purposeful content brings revenue). It states a
problem as a question, then answers with calm competence.

**Casing.** Sentence case for body and most headings. The brand label
**"COMPANY"** is always uppercase + wide letter-spacing under the "Vorah"
wordmark. Section labels on the site are often lowercase ("sobre nós", "Nosso
Diferencial") — keep them gentle, not shouty.

**Emoji.** Used sparingly and purposefully as section markers for the four
differentiators — 💬 (transparency), 🤝 (partnership), 🧭 (defined process),
🎯 (sales focus). Treat emoji as the exception, used 1 per feature card, never
sprinkled through paragraphs. Prefer the brand flower mark or icons elsewhere.

**Numbers.** Brazilian formatting: `R$ 1.599,00/mês`, `+430`, `85%`, `3 anos`.
Lead with the metric, then the label.

**Signature phrases (reuse verbatim where natural):**
- *Conectamos marcas e pessoas com intenção.*
- *Marketing com estratégia, leveza e parceria.*
- *Estratégia + execução, com foco em resultados.*
- *100% online e 100% humano.*
- *Aumentar vendas nas redes sociais?*
- CTA label, almost always: **"Entrar em contato"** (→ WhatsApp).

**Example micro-copy block (hero):**
> **Aumentar vendas nas redes sociais?**
> Ajudamos pequenas e médias empresas a se posicionar com clareza, atrair
> clientes e vender com consistência.
> `[ Entrar em contato ]`

---

## VISUAL FOUNDATIONS

**Overall mood.** Warm, earthy, human and premium-but-approachable. Think
natural paper tones with a saffron-gold spark — the opposite of cold corporate
tech blue. Generous white space, big friendly serif headlines, soft rounded
shapes.

**Color.** The hero pairing is **amber/saffron `#eba851` on charcoal
`#27272a`**, set against **cream paper** (`--cream-50 #faf7f1`) for light
surfaces. Earth tones — **cocoa `#583432`, forest `#36492e`, deep teal
`#203e4a`** — are *section* colors: use them as full-bleed background blocks,
one per section, with cream/amber type on top. **Mint `#b3f5a0`** and **yellow
`#ffea6d`** are bright accent pops — small highlights, underlines, sticker-like
badges, chart fills — never large fields. Warm gray `#8b8780` is for muted
text and dividers. Rule of thumb: one earth background + amber accent + cream
type per section; never more than two earth tones competing at once.

**Typography.** Display = a warm, rounded **serif** (brand wordmark is a
Recoleta-style face; shipped substitute is **Petrona**) used large for
headlines and brand-voice moments. UI/body = a geometric **sans (Outfit)**.
The "COMPANY"/eyebrow style is **uppercase, bold, ~0.18em tracked** sans.
Headlines lean tight tracking and balanced wrapping; body is relaxed
(1.65 line-height) for easy reading. Big type/small type contrast is part of
the look — don't be timid with hero sizes.

**Spacing & layout.** 4px base scale, airy. Content centers in a max ~1140px
container with comfortable gutters. Sections breathe (≥96px vertical rhythm on
desktop). Numbered lists (01–05) are a recurring layout device for "what we
do." Stats are shown as big-number + small-label pairs.

**Shape & corners.** Soft, friendly **rounded corners** everywhere
(`--radius-md 16px` for cards, `--radius-lg 24px`+ for feature blocks, full
**pills** for buttons and tags). The brand also has an **organic petal/blob**
shape (`--radius-blob`) echoing the flower mark — use sparingly for image masks
or decorative accents.

**Cards.** Cream or white surface, 16–24px radius, soft low-spread warm shadow
(`--shadow-sm`/`--shadow-md`), hairline `--color-border` (warm stone) optional.
No hard black borders, no colored-left-border accents.

**Shadows.** Warm-tinted, soft, diffuse — shadows use charcoal at low opacity,
never pure black, never harsh. Amber buttons get a soft amber glow
(`--shadow-amber`) on emphasis. Elevation is gentle; this is a paper-and-warmth
brand, not a heavy-drop-shadow brand.

**Borders.** Hairline warm-gray (`--color-border`) on light; low-opacity white
on dark surfaces. Strong borders are rare.

**Backgrounds & texture.** Cream paper as the default canvas; charcoal and
earth-tone full-bleed blocks for contrast sections. The **repeating-V pattern**
and oversized, low-contrast **flower/petal silhouettes** (see the dark lockup)
are the brand's texture motifs — use them faint and large, bleeding off an
edge, behind content. Avoid busy gradients; if any gradient is used, keep it a
subtle warm wash (cream→amber-50), not a saturated tech gradient.

**Imagery.** Real, warm, human photography — Brazilian small-business owners
and customers, natural light, genuine smiles, slightly warm color grade. People
> stock-abstract. Mask photos into rounded rects or the petal/blob shape.

**Iconography style.** Light, rounded-stroke line icons (see ICONOGRAPHY).

**Motion.** Gentle and intentional — soft fades and short rises on scroll,
standard/ease-out curves (`--ease-out`), 140–420ms. **No bounce, no springy
overshoot, no spin.** "Leveza" (lightness) means restraint.

**Hover states.** Buttons darken amber (`--amber-500 → --amber-600/700`); cards
lift slightly with a deeper soft shadow; links shift toward amber. Subtle, not
flashy.

**Press states.** Slight scale-down (~0.98) and/or move to the active amber
shade. Quick (`--duration-fast`).

**Transparency & blur.** Used lightly — e.g. a translucent charcoal scrim over
photos so cream text stays legible, or a faint frosted header on scroll. Not a
glassmorphism brand; keep it tasteful and rare.

---

## ICONOGRAPHY

Vorah's own marks are **custom logo artwork**, not a UI icon set — the brief and
website do not ship a functional UI icon library. The brand's iconographic
language is:

- **The flower / six-petal asterisk mark** (`assets/mark-flower-amber.png`,
  `mark-flower-black.png`) — the primary brand glyph. Teardrop petals radiating
  from a center; reads as a star/flower/sparkle. Use it as a bullet, a "spark"
  accent, a loading/section divider motif, or oversized faint background texture.
- **The V-monogram** in a rounded hexagon (`assets/logo-horizontal-black.png`) —
  app-icon / avatar use.
- **The floral monogram** (`assets/mark-floral-monogram.png`) — secondary
  decorative seal.
- **The repeating-V pattern** (`assets/pattern-v.png`) — texture fill.
- **Emoji** appear only as the four differentiator markers (💬 🤝 🧭 🎯) — see
  Content Fundamentals. Don't expand emoji use beyond that.

**For functional UI icons** (menus, arrows, forms, social, checkmarks) the site
gives no bespoke set, so this system standardizes on **Lucide**
(https://lucide.dev) — light, rounded-stroke, ~1.75px, which matches the warm,
soft, friendly feel. *This is a documented substitution: if Vorah has a
preferred icon set, supply it and we'll swap.* Load via CDN:
`<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`.
Default stroke-width 1.75, `currentColor`, round caps/joins.

---

## Index — what's in this folder

**Foundations / entry**
- `styles.css` — the single entry point consumers link (imports only).
- `tokens/fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `base.css`
  — fonts, color, type, spacing/radii/shadow/motion tokens, and base element styles.

**Assets** (`assets/`)
- `logo-horizontal-black.png` — V-monogram + "Vorah COMPANY" lockup (light bg).
- `logo-wordmark-stacked.png` — stacked "Vorah / COMPANY" wordmark (light bg).
- `logo-lockup-dark.png` — white wordmark + amber flower on charcoal (hero lockup).
- `logo-wordmark-small.png` — small horizontal wordmark.
- `mark-flower-amber.png` / `mark-flower-black.png` — six-petal brand mark (on cream).
- `mark-flower-amber-t.png` / `mark-flower-black-t.png` — **transparent** cut-outs
  for overlaying on colored/photographic backgrounds (use these in decks/heroes).
- `mark-floral-monogram.png` / `-t.png` — floral seal monogram (+ transparent).
- `pattern-v.png` — repeating-V texture tile.

**Components** (`components/`) — reusable React primitives. See `_ds_bundle.js`
(auto-generated) and each component's `.prompt.md`. Available on
`window.VorahCompanyDesignSystem_0977e7`:
- `buttons/` — **Button** (primary/secondary/outline/ghost · sm/md/lg), **IconButton**.
- `data-display/` — **Card** (paper/cream/dark/amber), **Badge**, **Tag**, **Avatar**, **Stat**.
- `forms/` — **Input**, **Textarea**, **Select**, **Checkbox** (warm amber focus ring).
- `brand/` — **Logo** (recolorable text lockup), **SectionHeading** (eyebrow + serif title).

**UI kit** (`ui_kits/website/`) — full interactive recreation of the Vorah
marketing homepage (nav, hero, differentials, numbered services, results,
about, testimonials, contact form, footer). Composes the components above.

**Templates** (`templates/`) — copy-and-go starting points (shown in the
consuming project's Templates picker):
- `vorah-deck/` — **Vorah Commercial Deck**, an 11-slide brand-styled
  presentation rebuilt from `Apresentação Comercial.pdf` (cover, sobre,
  Site, Social Media + pillars, pricing, depoimentos, Identidade Visual,
  contato, closing). Uses `deck-stage.js`; loads the DS via `ds-base.js`.

**Specimen cards** (`guidelines/`) — the small HTML cards shown in the Design
System tab (Type, Colors, Spacing, Brand).

**Specimen cards** also live under `guidelines/` (Type, Colors, Spacing, Brand)
and component cards under each `components/<group>/`.

- `SKILL.md` — makes this folder usable as a downloadable Claude Agent Skill.

---

## Using this system

Link the one stylesheet and use the tokens / `window.VorahCompanyDesignSystem_0977e7`
namespace for components:

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script>
  const { Button, Card, Badge } = window.VorahCompanyDesignSystem_0977e7;
</script>
```
