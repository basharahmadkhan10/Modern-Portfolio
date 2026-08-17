# Modern Portfolio Architecture

A highly optimized, aesthetically driven personal portfolio built with React and Tailwind CSS. The design language follows a strict, dark-matte cinematic approach inspired by ancient Japanese aesthetics and modern minimalism.

## Core Technologies

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS (Custom thematic configurations)
- **Animation**: Framer Motion & GSAP (ScrollTrigger)
- **State Management**: React Context API (Theme, Audio, Interactions)

## Architecture Overview

The codebase is strictly modularized to separate core functionality from visual sections:

```
src/
├── components/       # Reusable, logic-heavy UI elements (Cursor, Audio, Theme Toggles)
├── context/          # Global state providers (AudioContext, ThemeContext)
├── sections/         # Distinct page sections (Hero, ThePath, TheBuild, Stack)
├── index.css         # Global styling and base Tailwind directives
└── App.jsx           # Root layout and component composition
```

## Performance & UX Considerations

- **Scroll Hijacking (GSAP)**: Horizontal scroll sections (`The Build`) are pinned and scrubbed natively via GSAP for a 60fps cinematic feel.
- **Audio Context**: Implemented a resilient audio provider that bypasses strict browser autoplay policies by attaching one-time event listeners on initial user interaction.
- **Custom Cursor**: A global framer-motion driven cursor that dynamically reacts to hover states across the application without layout shifts.
- **Render Optimization**: Components rely on `useInView` hooks to defer animations until elements enter the viewport, reducing off-screen paint calculations.

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Development Guidelines

- **Typography**: Strictly adhere to `Cormorant Garamond` (font-serif) for body and descriptive text to maintain the editorial, old-world aesthetic.
- **Modularity**: Any new section must be created inside `/sections` and injected sequentially in `App.jsx`.
- **Animations**: Favor Framer Motion for micro-interactions (hover, click) and GSAP exclusively for complex scroll-linked timelines.

---
*Designed for precision, scalability, and impact.*
