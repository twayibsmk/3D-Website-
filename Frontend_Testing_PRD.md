# Frontend Testing Product Specification Document
## Neuro-Grav AI Agency Website

### 1. Executive Summary
This document outlines the frontend testing strategy, product specifications, and test cases for the Neuro-Grav AI Agency 3D Website. The project leverages Next.js/React, Vite, Framer Motion, and customized 3D elements powered by Spline. The objective is to ensure responsive design, smooth 3D rendering interactions, performance stability, and overall visual excellence across Desktop, Tablet, and Mobile environments.

### 2. Product Objectives
- Provide a bug-free, highly interactive portfolio site utilizing Spline 3D scenes.
- Ensure the seamless performance of scrolling animations (scrollytelling) powered by Framer Motion.
- Validate responsive layouts and typography scaling across all device viewports.
- Confirm high-end aesthetic components, specifically "tech/dark mode" elements, remain intact.

### 3. Application Architecture
- **Framework:** React / Vite (or Next.js 14 based on recent deployments)
- **Styling:** Vanilla CSS / Module CSS with custom responsive breakpoints.
- **3D Engine:** `@splinetool/react-spline`
- **Animations:** `framer-motion`
- **Icons:** `lucide-react`

### 4. Testing Strategy
Our frontend testing approach incorporates:
1. **Unit Testing:** Ensuring individual UI components (Navbar, Holographic Carousel, 3D Hero Scene) render correctly.
2. **Integration Testing:** Ensuring React components communicate correctly with the Framer Motion state values for scroll animations.
3. **End-to-End (E2E) Testing (via TestSprite):** Automating user flows across the Home, Capabilities, and Engine pages, emulating both desktop and mobile behaviors.
4. **Visual Regression Testing:** Catching regressions in UI responsiveness, dynamic scaling, and layout shifts regarding 3D elements.

### 5. Automated Testing Flows (TestSprite)
Below are the key automated user flows to be tested:

#### Flow 1: 3D Hero Scene Rendering
- **Action:** Visit the Homepage (`/`).
- **Assertion 1:** Validate the `<HeroScene>` component mounts successfully.
- **Assertion 2:** Wait for Spline runtime to emit 'onLoad' event without crashing the React tree.
- **Assertion 3:** Confirm layout covers 100vh and scales seamlessly on `768px` (Mobile) and `1024px` (Tablet) breakpoints.

#### Flow 2: Scrollytelling & Framer Motion Integration
- **Action:** Scroll down the Engine page incrementally.
- **Assertion 1:** Validate text-overlays fade-in synchronously with scroll progression.
- **Assertion 2:** Ensure the Framer Motion `useScroll` hook updates CSS transform values.
- **Assertion 3:** Check that scroll-linked canvas animations execute with frame interpolation properly.

#### Flow 3: Navigation & Responsive Menu
- **Action:** Click the hamburger menu on a mobile viewport `< 768px`.
- **Assertion 1:** Validate navigation drawer slides into view smoothly.
- **Assertion 2:** Verify links to Home, Capabilities, and Engine route correctly.

### 6. Edge Cases & Constraints
- **WebGL Context Limits:** Ensure the browser does not drop WebGL contexts during fast route changes between 3D heavy pages.
- **Load Performance:** Measure layout shifts if Spline payload takes >2s to load under Slow 3G throttling.
- **Fallback Configurations:** Test fallback UI (loader/spinner) while the 3D Spline scene is downloading.

### 7. Environments
- Development: `localhost:5173`
- Pre-Production: Vercel Preview Links
- Production: Production Vercel URL
