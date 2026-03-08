# JEROM● — Agency Website

A high-end, Awwwards-quality agency website built with React (Vite), Tailwind CSS 3, and Framer Motion. Features a custom cursor, magnetic buttons, scroll-triggered animations, parallax effects, and a fully responsive layout.

## Tech Stack

- **React 18** + **Vite 5** — Lightning-fast development and builds
- **Tailwind CSS 3** — Utility-first styling with a strict monochromatic palette
- **Framer Motion** — Fluid animations: `useSpring`, `useScroll`, `useTransform`, `AnimatePresence`, `whileInView`
- **Space Grotesk** — Google Fonts display typeface

## Features

- 🖱️ Custom geometric cursor with spring physics (hidden on mobile)
- 🧲 Magnetic buttons that pull toward the mouse
- 📜 Staggered text-reveal hero animation
- 🎠 Infinite CSS marquee background
- 🖼️ Parallax portfolio cards with gradient placeholders
- 📌 Sticky expertise sidebar layout
- 🔢 Animated count-up stats triggered on scroll
- 🌐 Sector hover with seamless gradient transitions
- 📱 Fully responsive — mobile hamburger menu, stacked layouts, disabled cursor on touch

## Sections

1. **Navbar** — Glassmorphism fixed header with magnetic CTA
2. **Hero** — Full-viewport with marquee background and staggered headline reveal
3. **Capabilities** — Three-pillar Brand / Digital / Marketing grid
4. **Portfolio** — 6-item dark grid with parallax and hover reveal
5. **Expertise** — Sticky-left + scrolling-right card layout
6. **Stats** — Animated count-up: 24 awards · 20 years · 400+ projects
7. **Sectors** — Interactive list with background gradient transitions
8. **Insights** — Blog card grid with gradient thumbnails
9. **Footer** — Massive "Let's Talk." CTA with office addresses

## Getting Started

```bash
# Clone the repository
git clone https://github.com/abdelaliboulgha/Agency-.git
cd Agency-

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
Agency-/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── context/
│   │   └── CursorContext.jsx
│   ├── hooks/
│   │   ├── useMousePosition.js
│   │   └── useCountUp.js
│   └── components/
│       ├── CustomCursor.jsx
│       ├── Navbar.jsx
│       ├── MobileMenu.jsx
│       ├── MagneticButton.jsx
│       ├── Hero.jsx
│       ├── Marquee.jsx
│       ├── TextReveal.jsx
│       ├── Capabilities.jsx
│       ├── Portfolio.jsx
│       ├── PortfolioCard.jsx
│       ├── Expertise.jsx
│       ├── ExpertiseCard.jsx
│       ├── Stats.jsx
│       ├── Sectors.jsx
│       ├── Insights.jsx
│       └── Footer.jsx
```

## Design Tokens

| Token | Value |
|-------|-------|
| Background | `#FFFFFF` |
| Foreground | `#0A0A0A` |
| Accent | `#4ADE80` (electric green) |
| Font | Space Grotesk |

## License

MIT
