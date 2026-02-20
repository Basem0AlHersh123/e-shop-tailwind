# 🛒 E-Shop – Modern E-Commerce Website

> **A sleek, responsive online store built with React, Tailwind CSS, and DaisyUI — no Bootstrap, just pure performance and style.**

[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-4.0+-5A67D8?logo=daisyui&logoColor=white)](https://daisyui.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.30+-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)

---

## 📖 Introduction

Welcome to **E-Shop**, a modern, lightweight e-commerce platform designed for seamless browsing, shopping, and user experience. Built from the ground up with **React + Vite**, and styled with **Tailwind CSS + DaisyUI**, this project replaces Bootstrap with a faster, more customizable, and theme-aware design system.

Perfect for developers who want a clean, maintainable, and visually stunning storefront — with full **light/dark mode support**.

---

## 🎥 Demo & Navigation


### Screenshots

| **Homepage** | **Product Listing** |
|:---:|:---:|
| ![Homepage](https://placehold.co/600x400/1e293b/ffffff?text=Homepage) | ![Products](https://placehold.co/600x400/1e293b/ffffff?text=Product+Grid) |

| **Product Detail** | **Dark Mode Footer** |
|:---:|:---:|
| ![Detail](https://placehold.co/600x400/1e293b/ffffff?text=Product+Details) | ![Footer](https://placehold.co/600x400/0f172a/ffffff?text=Dark+Mode+Footer) |

---

## 🚀 Key Features

- **🛍️ Product Showcase**: Browse featured items with responsive card layout.
- **🔍 Smart Search**: Instantly filter products by name.
- **🌙 Light/Dark Mode**: Toggle between themes with persistent preference (saved in `localStorage`).
- **📱 Fully Responsive**: Works flawlessly on mobile, tablet, and desktop.
- **🧩 Component-Based Architecture**: Clean, reusable components (`ProductCard`, `Navbar`, `Footer`, etc.).
- **⚡ Optimized Performance**: No Bootstrap bloat — only the CSS you use.

---

## 🛠️ Tech Stack

- **Frontend**: React 18+, JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + DaisyUI (with custom theme support)
- **Routing**: React Router DOM v6
- **State Management**: React Context API (`ThemeContext`)
- **Data**: Local JSON (`products.json`, `testimonials.json`) — easily swappable with APIs

---

## 📦 Installation

Set up the project locally in minutes:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Basem0AlHersh123/e-shop-tailwind](https://github.com/Basem0AlHersh123/e-shop-tailwind.git
   cd e-shop-tailwind
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in your browser**  
   Visit `http://localhost:5173` (or the port shown in terminal).

---

## 🏃 Usage

- Toggle **dark/light mode** using the theme switcher in the navbar.
- Use the **search bar** to filter products instantly.
- Click any product to view its **details page**.
- Navigate via the **responsive navbar** or **footer links**.
- All UI components adapt automatically to your selected theme.

---

## 🎨 Custom Theming (DaisyUI)

Your `tailwind.config.js` includes a custom dark theme with:
- Background: `#121212` (charcoal)
- Primary accent: `#4A8FE7` (muted blue)
- Text: soft white (`#F0F0F0`)

To modify colors or add new themes, edit the `daisyui.themes` section in `tailwind.config.js`.

---

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

> ✨ **Built with ❤️ by Basem Al-Hersh**  

*Deployed with Vite • Styled with Tailwind + DaisyUI • Designed for everyone.*
