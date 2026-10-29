# Sourav Sahoo — Portfolio

Premium, cinematic dark portfolio inspired by the supplied product-design reference: oversized editorial typography, a custom code-workspace hero composition, fine borders, warm-red micro accents, restrained motion, and carefully styled project visualizations. Built with React, Vite, JavaScript, Tailwind CSS v4, Framer Motion, Lucide icons, and CSS-variable design tokens.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Before publishing

- Confirm the Job Application Tracker GitHub repository. The resume lists `NestJs-fullStack`, but the project stack is Next.js, so its repository link is intentionally omitted.
- Add real live-demo URLs and project screenshots when available. No demo buttons are shown without verified URLs.
- The contact form validates fields and prepares an email using `mailto:`. For end-to-end form delivery without requiring the visitor's email app, configure a Formspree/EmailJS endpoint and replace the submit handler.
- Replace `YOUR-DOMAIN.example` in `public/robots.txt` and `public/sitemap.xml` with the deployed domain.
- Add a canonical URL and 1200×630 Open Graph image after deployment.
- Review the desktop and mobile hero layouts after running locally; the illustration is built with HTML/CSS, not a stock image.
- The downloadable resume PDF was generated from the supplied DOCX. Review it before publishing.

## Content policy

Skills, experience, education, and project descriptions are based on the supplied resume and PRD. AI/ML work, metrics, testimonials, profile photo, and live demos are not invented. Job Application Tracker repo link is held back pending confirmation.


## Interactive 3D hero

The hero renders a live Three.js scene made from procedural geometry: a metallic crystal, rotating orbit rings, satellite meshes, particles, and a technical grid floor. It requires no external model assets. Pointer movement subtly adjusts the scene, it responds to viewport resizing, and it respects `prefers-reduced-motion`. If WebGL cannot initialize, the CSS scene background remains.

Install and run:

```bash
npm install
npm run dev
```

The added dependency is `three` in `package.json`.

## Responsive name and color studio

The oversized `SOURAV SAHOO` wordmark now scales down on medium screens and splits cleanly across two lines on narrow screens to prevent clipping. Use the paint-palette icon in the navbar to switch among five accent combinations: Ember, Electric Violet, Cyber Cyan, Acid Lime, and Royal Blue. The selected palette is saved in browser local storage and also updates the Three.js hero lighting and accent geometry.


## Component structure

Each major website section is now in its own component so you can edit it independently:

- `src/components/sections/Hero.jsx` — hero and 3D showcase composition
- `src/components/sections/About.jsx` — About section
- `src/components/sections/Skills.jsx` — skills grid
- `src/components/sections/Projects.jsx` — filterable project cards and details
- `src/components/sections/Experience.jsx` — internship and education timeline
- `src/components/sections/Services.jsx` — service cards
- `src/components/sections/Contact.jsx` — contact form
- `src/components/layout/Navbar.jsx` and `Footer.jsx` — shared layout
- `src/components/layout/PalettePicker.jsx` — accent palette selector
- `src/components/scene/ThreeDScene.jsx` — interactive Three.js scene
- `src/components/ui/Reveal.jsx` and `SectionTitle.jsx` — reusable UI helpers
- `src/data/site.js` — portfolio content data
- `src/styles.css` — global visual styling

`src/App.jsx` composes the components together; `src/main.jsx` is only the app entry point.


## Styling and Tailwind CSS

This project uses Tailwind CSS v4 utilities for common page layout, spacing, responsive grids, typography, form fields, buttons, and cards. Most section styling is now defined directly in the React components through `className` utilities.

`src/styles.css` is intentionally reserved for effects that are more maintainable as custom CSS: the animated 3D hero overlay, CSS-drawn project previews, color-palette popover, accent/theme variables, ticker animation, and reduced-motion rules. Avoid putting ordinary padding, grid, text, or button styles back into this file when a Tailwind utility can express them.

### Where to edit

- `src/components/sections/Hero.jsx`: hero layout and headline.
- `src/components/scene/ThreeDScene.jsx`: Three.js scene, lighting, geometry, and animation.
- `src/components/sections/Projects.jsx`: project cards, filters, and details.
- `src/components/layout/Navbar.jsx`: navigation and theme toggle.
- `src/components/layout/PalettePicker.jsx`: color picker UI.
- `src/styles.css`: accent variables and custom art/3D effects only.
- `src/data/site.js`: content such as projects, skills, experience, and contact information.

### Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.
