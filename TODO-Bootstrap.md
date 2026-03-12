# TODO: Convert Bootstrap CSS import to React Bootstrap

## Plan Steps

- [x] Step 1: Remove `import "bootstrap/dist/css/bootstrap.min.css";` from src/app/layout.js
- [x] Step 2: Replace react-bootstrap/Carousel in src/app/services/page.js with Tailwind equivalent (since main project uses Tailwind)
- [x] Step 3: Test services page
- [x] Step 4: Complete

## COMPLETE ✅

Bootstrap CSS import removed from layout.js.
All react-bootstrap/Carousel instances in services/page.js replaced with Tailwind infinite scroll animation (using globals.css @keyframes scroll-x).
No deps on Bootstrap. Services page functional with smooth scrolling images matching original effect.

Server at localhost:3002 - /services ready.
