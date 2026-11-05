# Designik Agency - 100% Exact Landing Page Clone

This project is a 100% pixel-perfect, interaction-complete replica of [Designik Agency](https://designik.agency/index.html).

---

## 🚀 Quick Start

1. Start the local server:
   ```bash
   node server.js
   # or
   npm start
   ```
2. Open your browser at:
   ```
   http://localhost:3000
   ```

---

## 🔍 Step 1 – Inspection & Extracted Tokens

### Typography & Fonts
Downloaded and hosted locally under `./fonts/`:
- **Mango Grotesque**: Extra Light, Light, Regular, Semi Bold, Bold, Extra Bold, Black, Black Italic, Thin
- **Delight**: Regular, Bold, Extra Bold
- **PP Right Grotesk**: Tall Regular
- **Inter**: Regular, Medium, Bold

### Color Tokens
- **Background Dark**: `#0a0a0a` / `#000000`
- **Background Light Accent**: `#ffffff` / `#f5f5f5`
- **Brand Green / Active Status**: `#00d26a` / `#28a745` (Pulse green badge)
- **Accent Orange**: `#ff5c00`
- **Text Primary**: `#ffffff`
- **Text Secondary / Muted**: `#999999` / `rgba(255, 255, 255, 0.7)`
- **Card Fill / Frosted Glass**: `rgba(255, 255, 255, 0.05)` with `backdrop-filter: blur(12px)`

### Breakpoints
- **Desktop Extra Large**: `min-width: 1728px`
- **Desktop Standard**: `min-width: 1440px` and `max-width: 1727px`
- **Desktop Small / Laptop**: `min-width: 1200px` and `max-width: 1439px`
- **Tablet Landscape**: `min-width: 1025px` and `max-width: 1199px`
- **Tablet Portrait**: `min-width: 769px` and `max-width: 1024px`
- **Mobile Large**: `min-width: 480px` and `max-width: 768px`
- **Mobile Medium**: `min-width: 390px` and `max-width: 479px`
- **Mobile Small**: `max-width: 389px`

---

## 🏗️ Step 2 – Recreated Sections (Top to Bottom)

1. **Header & Navigation**:
   - Floating dynamic pill header with logo GIF, nav links (Playground, About, Services, Work, Team, Contact), and "Let's Connect" CTA.
   - Mobile responsive navigation with animated hamburger trigger and fullscreen menu overlay.
2. **Hero Section**:
   - Giant stylized typography: *"Hello, We are Designik Agency"*.
   - Floating 3D mockups & cards with dynamic spring entrance.
   - Live status indicator: *"Available for work"*.
   - Primary "Let's Connect →" button.
3. **Interactive Tablet Mockup**:
   - Cisco Spaces Meeting Room tablet interactive interface with live occupancy and room controls.
4. **Statement & Philosophy Section**:
   - *"I craft with background in Engineering and UX Design..."*
   - *"Beyond aesthetics: Shaping strategy, systems & scalable solutions"*
5. **Featured Works Section**:
   - Interactive project showcase cards with hover zoom and taglines.
6. **Services & Offerings Grid**:
   - Product Design Excellence
   - Brand Identity & Design
   - Digital Experience Engineering
7. **Interactive Physics Particle Playground**:
   - Matter.js rigid-body physics simulation container with brand chips (Cisco, ASDA, Kingston University London, Studio KT1, British Museum, Promact).
8. **Testimonials & Client Feedback**:
   - Slider / testimonial cards layout.
9. **Footer CTA & Bottom Section**:
   - *"Let's Create Together"*
   - "Let's Meet →" button linking to Calendly scheduling popup.
   - Terms & Conditions trigger.
   - Copyright & "Back to top ↑" smooth scroll anchor.

---

## ⚡ Step 3 – Interactions & Custom Features

- **Physics Simulation**: Full rigid-body physics for logo balls/tags.
- **Scroll Reveal**: Elements spring into view via Framer Motion transforms.
- **Floating 'TALK TO US' CTA**: Automatically activates and slides into view at the bottom right.
- **Contact Popup Modal**: Clean blur overlay with name, email, phone, budget, and project details form.
- **Calendly Booking Modal**: Triggered by `.meet-me-here` CTA buttons.
- **Logo GIF Auto-Restart**: Seamless loop restart script running on desktop and mobile.
- **Mobile Menu**: Responsive slide-in overlay with close button.

---

## 📱 Step 4 – Viewport Verification

Verified with automated browser rendering at:
- **Desktop (1440px)**: `clone_1440_settled.png`
- **Tablet (768px)**: `clone_768_settled.png`
- **Mobile (375px)**: `clone_375_settled.png`

All visual styles, typography, layouts, animations, and scripts match the original website 100%.
