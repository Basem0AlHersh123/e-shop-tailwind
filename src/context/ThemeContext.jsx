// // src/context/ThemeContext.jsx
// import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//     const [theme, setTheme] = useState(() => {
//         const savedTheme = localStorage.getItem('theme');
//         if (savedTheme) return savedTheme;

//         // Check system preference
//         const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//         return prefersDark ? 'dark' : 'light';
//     });

//     const toggleTheme = useCallback(() => {
//         setTheme(prev => {
//             const newTheme = prev === 'dark' ? 'light' : 'dark';
//             localStorage.setItem('theme', newTheme);
//             return newTheme;
//         });
//     }, []);

//     // Apply theme to document
//     useEffect(() => {
//         document.documentElement.setAttribute('data-theme', theme);
//         document.body.className = `theme-${theme}`;

//         // Update meta theme-color for mobile browsers
//         const metaThemeColor = document.querySelector('meta[name="theme-color"]');
//         if (metaThemeColor) {
//             metaThemeColor.setAttribute(
//                 'content',
//                 theme === 'dark' ? '#0f172a' : '#ffffff'
//             );
//         }
//     }, [theme]);

//     const value = {
//         theme,
//         isDarkMode: theme === 'dark',
//         toggleTheme,
//     };

//     return (
//         <ThemeContext.Provider value={value}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// export const useTheme = () => {
//     const context = useContext(ThemeContext);
//     if (!context) {
//         throw new Error('useTheme must be used within ThemeProvider');
//     }
//     return context;
// };

import React, { createContext, useContext, useState, useEffect } from "react";
const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(savedTheme);
  const isDark = theme === "dark";
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (isDark) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [theme, isDark]);
  const value = {
    theme,
    isDarkMode: theme === "dark",
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Custom Hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
