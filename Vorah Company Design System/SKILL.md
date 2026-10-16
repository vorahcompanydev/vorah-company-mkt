---
name: vorah-design
description: Use this skill to generate well-branded interfaces and assets for Vorah Company, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `readme.md` — the full design guide: brand context, content & visual foundations, iconography, index.
- `styles.css` — single CSS entry point (link this). Imports everything in `tokens/`.
- `tokens/` — color, typography, spacing/radii/shadow/motion tokens, fonts, base element styles.
- `assets/` — logos, the flower/asterisk mark, floral monogram, repeating-V pattern.
- `components/` — React primitives (Button, IconButton, Card, Badge, Tag, Avatar, Stat, Input, Textarea, Select, Checkbox, Logo, SectionHeading). The compiled bundle is `_ds_bundle.js`; namespace `window.VorahCompanyDesignSystem_0977e7`.
- `ui_kits/website/` — full interactive recreation of the Vorah marketing site.
- `guidelines/` — foundation specimen cards.

## Brand in one breath
Warm, earthy, human. Saffron-gold (#eba851) on charcoal (#27272a), over cream paper. Display serif + humanist sans. Soft rounded corners, pill buttons, gentle motion, no bounce. Brazilian-Portuguese voice: clear, professional, partnership-driven ("a quatro mãos"). CTA is almost always "Entrar em contato".

## Font note
The brand wordmark is a Recoleta-style proprietary serif; titles use **Karelle** (`assets/fonts/Karelle.otf`) and **Outfit** is used for smaller text only (body, UI, labels).
