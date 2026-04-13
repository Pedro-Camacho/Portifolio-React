# Portfolio — Design Review & Roadmap

## Project Overview
Single-page React portfolio for Pedro Camacho. Dark theme, JetBrains Mono font throughout, accent color `#DE9494` (muted pink/salmon). Sections: Home, Habilidades, Projetos, Contato.

## Tech Stack
- React (Vite)
- Pure CSS (one file per component, under `src/Styles/`)
- No external component library
- No backend — contact form currently only `console.log`s

## Color Tokens
| Token | Value | Usage |
|---|---|---|
| Background | `#000` / `#080808` | Page background |
| Surface | `#1c1c1c` | Cards, form |
| Border | `#2a2a2a` / `#2e2e2e` | Dividers, card borders |
| Accent | `#DE9494` | Name, links, active states, button |
| Accent hover | `#c87a7a` | Button hover |
| Text primary | `#fff` | Headings |
| Text secondary | `#999` / `#ccc` | Body paragraphs, nav |
| Text muted | `#555` / `#666` | Labels, footer copy |

---

## Design Issues & Proposed Changes

### HIGH PRIORITY

#### Hero section — Missing CTA and social links
- Add primary button **"Ver Projetos"** (scroll to `#projetos`) and secondary **"Download CV"**
- Add GitHub + LinkedIn icon links directly under the role badge in the left column
- Change profile photo border from `#3A3A3A` to a glowing ring using `#DE9494`

#### Project cards — Missing context
- Add a short **description** field to each project in the `projetos` array in `Projetos.jsx`
- Add **tech stack tags** as small pill badges on each card
- Add an image hover overlay with a slide-up "Ver Projeto →" button instead of always-visible links

#### Contact form — Non-functional
- `enviar()` only does `console.log` — integrate **EmailJS** or fall back to a `mailto:` link
- Add a **success state** (swap form for a thank-you message after send)
- Add a loading state on the submit button

#### Footer — Wrong year
- Copyright hardcoded to `2024`; fix to `{new Date().getFullYear()}`

---

### MEDIUM PRIORITY

#### Typography — Flat hierarchy
- Hero name: bump from `26px` → `42–48px`
- Role badge: bump from `13px` → `15–16px`
- `h2` inside `ItemHeader.jsx` is semantically wrong — replace with `span`

#### Active nav state
- Use `IntersectionObserver` to track active section and highlight the matching nav item with `#DE9494`

#### Background — Too stark
- Change `body` background from `#000` to `#080808` or `#0d0d0d` for softer contrast

#### Skills — Too few
- Currently only 4 skills; add JavaScript, Java, SQL, Git, Node.js (even if learning)
- Consider adding a level indicator (colored dot: green = proficient, yellow = learning)
- With more skills the `14s` carousel animation speed is fine; with only 4 it feels slow

---

### LOW PRIORITY

#### Mobile navigation
- On `<600px` the logo hides but all 4 nav items remain crammed; add a hamburger menu or reduce nav item padding

#### Scroll indicator
- Add a subtle animated scroll-down arrow at the bottom of the hero section

#### Background texture
- Add a very subtle dot grid or CSS noise texture to give the background depth without distraction

---

## Implementation Priority Order

| # | Change | File(s) |
|---|---|---|
| 1 | Hero CTA buttons + social links | `Principal.jsx`, `Principal.css` |
| 2 | Project cards: description + tech tags + hover overlay | `Projetos.jsx`, `Projeto.jsx`, `Projeto.css` |
| 3 | Fix contact form (EmailJS or mailto) + success state | `Contato.jsx`, `Contato.css` |
| 4 | Fix footer year | `Footer.jsx` |
| 5 | Active nav with IntersectionObserver | `Header.jsx`, `Header.css`, `App.jsx` |
| 6 | Profile photo glow border | `Principal.css` |
| 7 | More skills + level indicator | `HabilidadesSection.jsx`, `HabilidadesSection.css` |
| 8 | Typography hierarchy | `Principal.css`, `ItemHeader.jsx`, `ItemHeader.css` |
| 9 | Background softening | `index.css` |
| 10 | Mobile hamburger menu | `Header.jsx`, `Header.css` |
| 11 | Scroll-down arrow | `Principal.jsx`, `Principal.css` |
