# AAJneeti Connect Ltd. — Homepage

Astro 5 + Bootstrap 5 homepage. All sections and copy come from aajneeti.social; the visual
language (palette, typography, buttons, cards) follows houseofeducation.com.

## Run

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
```

Requires Node 22.12+ (Astro 5). Astro 6 needs Node >= 22.23.4.

## Stack

- **Astro 5**: components, static build
- **Bootstrap 5.3**: grid, utilities, offcanvas (mobile menu), accordion (FAQ), modal (video)
- **Bootstrap Icons**
- **Swiper**: testimonials slider
- **AOS**: scroll-reveal animations
- Google Fonts: **Poppins** (headings), **IBM Plex Sans** (body), **BIZ UDPGothic** (labels)

## Structure

```
src/
  data/site.js          <- ALL text, links, stats, testimonials, FAQs (edit content here)
  styles/global.css     <- design tokens (colours, fonts) + shared classes
  layouts/BaseLayout.astro
  components/           <- one file per homepage section
  pages/index.astro     <- section order
public/images/          <- logos, photos, thumbnails
```

## Design tokens (global.css)

| Token | Value | Use |
|---|---|---|
| `--navy` | `#0f172a` | dark sections, text |
| `--red` | `#ff5555` | accent, highlights |
| `--red-600` | `#e02e2e` | button gradient end |
| `--fuchsia` | `#a21caf` | button gradient start |
| `--grad-band` | navy → slate → red | feature bands |

## To do before launch

- Newsletter form in `Footer.astro` is not connected to a backend yet (see the TODO comment).
