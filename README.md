# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Overview

This is a simplified interactive real estate UI prototype built with React, designed to let users visually explore residential towers, browse through floors, and inspect apartment layouts in a user-friendly, responsive interface.

# App Flow

## Tower Overview Page

A full header with navigation links (Home, About, Services, Projects, etc.).

A hero section with large, high-resolution images of towers that automatically slide every 3 seconds.

Below the hero, three clickable tower cards are displayed. On larger screens, hovering on a tower card reveals a “Click to View Details” button that slides in from the bottom with a smooth animation.

# Floor List Page

When a tower is selected, the user is taken to a list of floors in that tower.

Each floor is presented as a card showing the floor number, preview image and the number of apartments in the floor.

Clicking on a floor navigates to the layout view for that floor.

# Apartment Layout Page

The layout page is split into two sections:

**Left Section:** A large main apartment image at the top with smaller apartment thumbnails underneath.

Clicking a thumbnail updates the large image with that apartment’s preview.

**Right Section:** Displays detailed metadata of the selected apartment (e.g., unit type, area, room count).

Fully responsive across devices.

# Bonus Interaction

When hovering over an apartment thumbnail, the background subtly darkens and the thumbnail scales up with a soft animation—enhancing visual feedback and engagement.

Works smoothly on both desktop and mobile.

# Tools & Libraries

**React (Functional Components with Hooks)**

**React Router DOM** – For navigation between pages

**Tailwind CSS** – For utility-first responsive styling and animations

**React Icons** – For intuitive UI icons

**Dummy JSON data & local assets** – For towers, floors, and apartments

# Limitations & Tradeoffs

**No backend:** All data is static and hardcoded (no API or dynamic content).

Apartment layouts and floor images are placeholders; real-world data integration is not implemented.

Some transitions (e.g., page loads) are instant due to lack of routing animations or global state.

# Status
The app meets the functional requirements of the prototype task and is optimized for responsiveness, basic UX transitions, and clear navigation flow.

