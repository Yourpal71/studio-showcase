

# Password-Protected Portfolio Website

## Overview
A minimalist, password-protected portfolio site for a graphic production specialist — clean aesthetic inspired by studioallstars.com with generous white space, modern typography, and smooth animations.

---

## Page 1: Landing / Login Screen
- Centered login form with a single password field (no username)
- "View Work" button with subtle hover animation
- Minimalist design with professional sans-serif typography
- Fade-in entrance animation
- Responsive layout that looks great on all devices

## Page 2: Portfolio Gallery (Protected)
- **Grid layout**: 2 columns on desktop, 1 column on mobile
- Initially shows one row (2 items), with a "Load More" button to reveal additional work
- Each item is a card with a placeholder image, project title, and short description
- Smooth hover effects (subtle scale + overlay with project info)
- Clean top navigation bar with a logo/name and logout button
- Session-based auth — stays logged in until browser close or manual logout

## Page 3: Image Lightbox / Modal
- Clicking a portfolio item opens a full-screen modal with the larger image
- Project title and description displayed alongside
- Close button + click-outside-to-close
- Smooth open/close transitions

---

## Authentication
- Simple client-side password check (hardcoded for now since no backend is connected)
- Password stored in a constant that you can later move to an environment variable if you connect a backend
- Session persisted via `sessionStorage`

## Design System
- Neutral color palette with ample white space
- Modern sans-serif font (Inter)
- Subtle fade and slide animations for page transitions
- Minimal UI chrome — the work is the focus

## Placeholder Content
- 6 placeholder portfolio items with sample images, titles, and descriptions
- Easy to swap out with your real work later

