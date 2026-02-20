import React from "react";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      variant="outline-secondary"
      onClick={toggleTheme}
      className="theme-toggle-btn d-flex align-items-center"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <>
          <i className="bi bi-sun-fill me-1"></i>
          <span className="d-none d-md-inline">☀️</span>
        </>
      ) : (
        <>
          <i className="bi bi-moon-stars-fill me-1"></i>
          <span className="d-none d-md-inline">🌒</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
