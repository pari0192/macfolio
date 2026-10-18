# 💻 macOS Portfolio

An interactive, macOS-inspired developer portfolio website built with **React 19**, **Tailwind CSS v4**, and **GSAP**. Features draggable windows, an animated dock, interactive file system navigation, and native-feeling desktop applications.

<p align="center">
  <img src="public/screenshots/Screenshot%20From%202026-10-18%2003-06-52.png" alt="macOS Portfolio Showcase" width="100%" />
</p>

---

## 📸 Development Stages & Project Evolution

The project was built iteratively from a blank desktop shell into a fully interactive macOS simulation. Below is the chronological breakdown of the different development stages:

| Stage                                                                   | Milestone                | Key Deliverables                                                               |
| ----------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------ |
| **[Stage 1](#stage-1-desktop-shell--top-menu-bar)**                     | Desktop Shell & Menu Bar | Wallpaper configuration, top menu bar with live Day.js clock and system icons  |
| **[Stage 2](#stage-2-welcome-hero--typography)**                        | Hero Welcome Screen      | Centered greeting screen with custom serif italic typography                   |
| **[Stage 3](#stage-3-interactive-dock--terminal-emulator)**             | Dock & Terminal Emulator | GSAP dock magnification animations, Terminal app with custom commands          |
| **[Stage 4](#stage-4-multi-window-system--core-apps)**                  | Window Management & Apps | `WindowWrapper` HOC, Finder file navigation, Safari blogs, embedded PDF Resume |
| **[Stage 5](#stage-5-draggable-desktop-project-folders)**               | Desktop Folders          | Freeform draggable project folders directly on the desktop wallpaper           |
| **[Stage 6](#stage-6-photos-gallery-case-study-reader--image-preview)** | Rich Media & Polish      | Photos gallery, Case Study reader, Image Preview modal, nested directory files |

---

### Stage 1: Desktop Shell & Top Menu Bar

> **Milestone:** Initial foundation setup with macOS wallpaper styling, the responsive top menu bar, dynamic clock powered by Day.js, and system status indicators.

<p align="center">
  <img src="public/screenshots/Screenshot%20From%202026-10-17%2000-00-39.png" alt="Stage 1 - Desktop Shell & Menu Bar" width="100%" />
</p>

---

### Stage 2: Welcome Hero & Typography

> **Milestone:** Implemented the desktop hero greeting (*"Hey, I'm Pari! Welcome to my portfolio"*) with refined serif italic typography and responsive layout.

<p align="center">
  <img src="public/screenshots/Screenshot%20From%202026-10-17%2012-58-37.png" alt="Stage 2 - Welcome Hero & Typography" width="100%" />
</p>

---

### Stage 3: Interactive Dock & Terminal Emulator

> **Milestone:** Engineered the interactive macOS dock with GSAP magnification and bounce effects, and launched the first interactive desktop window: the Terminal emulator displaying developer tech stack details.

<p align="center">
  <img src="public/screenshots/Screenshot%20From%202026-10-17%2017-32-43.png" alt="Stage 3 - Interactive Dock & Terminal Emulator" width="100%" />
</p>

---

### Stage 4: Multi-Window System & Core Apps

> **Milestone:** Implemented the `WindowWrapper` higher-order component for z-index focus and traffic light controls, alongside the Finder file manager, Safari developer blogs reader, and embedded PDF resume viewer.

<p align="center">
  <img src="public/screenshots/Screenshot%20From%202026-10-18%2001-17-19.png" alt="Stage 4 - Multi-Window System & Core Apps" width="100%" />
</p>

---

### Stage 5: Draggable Desktop Project Folders

> **Milestone:** Integrated GSAP `Draggable` on desktop folders (Nike Ecommerce, AI Resume Analyzer, Food Delivery App), allowing visitors to freely reposition project folders on the desktop canvas.

<p align="center">
  <img src="public/screenshots/Screenshot%20From%202026-10-18%2002-37-37.png" alt="Stage 5 - Draggable Desktop Project Folders" width="100%" />
</p>

---

### Stage 6: Photos Gallery, Case Study Reader & Image Preview

> **Milestone:** Completed the interactive portfolio with the categorized Photos app, dedicated Text Reader for project deep dives, full-resolution Image Preview modal, and nested Finder directory exploration.

<p align="center">
  <img src="public/screenshots/Screenshot%20From%202026-10-18%2003-06-52.png" alt="Stage 6 - Photos Gallery, Case Study Reader & Image Preview" width="100%" />
</p>

---

## ✨ Features

### 🖥️ Desktop & Interface

- **Top Menu Bar**: Dynamic live clock powered by Day.js, system status icons, and quick links that toggle portfolio apps.
- **Interactive Dock**: Authentic macOS dock magnification and bounce animations powered by GSAP, complete with tooltips and active application indicators.
- **Draggable Desktop Folders**: Project folders placed directly on the desktop wallpaper that can be freely dragged around using GSAP `Draggable`.

### 📱 Built-in macOS Applications

| App                  | Description                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| **Finder**           | Two-column file explorer with Favorites and Work folders. Supports directory navigation, back/forward history, and launching files. |
| **Safari**           | Simulated Safari browser featuring an address bar, developer articles, thumbnail previews, and external article links. |
| **Resume**           | Embedded PDF resume reader using `react-pdf` with zoom/download buttons and robust fallback error handling. |
| **Photos & Preview** | Photo gallery with a categorized sidebar. Clicking any photo opens the dedicated **Image Preview** window. |
| **Text Reader**      | Dedicated viewer for project deep dives, case studies, and notes with hero images and multi-paragraph formatting. |
| **Terminal**         | Authentic macOS terminal emulator window with custom controls and terminal styling.                  |
| **Contact**          | Clean contact card displaying developer bio, email, and social profile badges (GitHub, LinkedIn, Twitter/X). |

### 🪟 Window Management

- **`WindowWrapper` HOC**: Standardized window chrome with macOS traffic light buttons (Close, Minimize, Maximize) and z-index focus management.
- **State Management**: Centralized state powered by **Zustand** (`window` store for open/active windows and `location` store for directory navigation).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations & Draggables**: [GSAP](https://gsap.com/) & [@gsap/react](https://gsap.com/resources/react/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) with [Immer](https://immerjs.github.io/immer/)
- **PDF Viewer**: [react-pdf](https://github.com/wojtekmaj/react-pdf)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Date/Time**: [Day.js](https://day.js.org/)

---

## 📁 Project Structure

```text
macos_portfolio/
├── public/                 # Static assets (icons, wallpapers, PDFs, images)
│   └── screenshots/        # Development progress & milestone screenshots
├── src/
│   ├── assets/             # Component assets and stylesheets
│   ├── components/         # Desktop shell components (Navbar, Dock, Home, Welcome)
│   ├── constants/          # Portfolio data (projects, blogs, photos, socials)
│   ├── hoc/                # Higher-Order Components (WindowWrapper)
│   ├── store/              # Zustand stores (window state, location state)
│   ├── windows/            # Desktop app windows (Finder, Safari, Resume, Photos, etc.)
│   ├── App.jsx             # Main application orchestrator
│   └── main.jsx            # Entry point
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v18 or higher) and **npm** installed.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/pari0192/macfolio.git
   cd macos_portfolio
   ```
1. **Install dependencies**:

   ```bash
   npm install
   ```
1. **Start the local development server**:

   ```bash
   npm run dev
   ```
1. **Build for production**:

   ```bash
   npm run build
   ```

---

## ⚙️ Customization

All personal details, projects, blogs, and images are defined cleanly in one place:

- **Portfolio Data**: Update `src/constants/index.js` to customize:
    - `projects` & directory tree under `locations`
    - Blog articles for the Safari app (`blogs`)
    - Gallery photos (`gallery`)
    - Social media handles and contact email (`socials`)
- **Resume File**: Place your resume PDF into `public/resume.pdf` or update the path in `src/windows/Resume.jsx`.
- **Wallpaper & Icons**: Replace desktop backgrounds and app icons in the `public/` directory.

---