import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./Navbar/ThemeToggle";

const MainNavbar = () => {
  const { isDarkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Add real search logic later
  };

  // Close mobile menu when clicking a link
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 ${
        isDarkMode ? "bg-base-900" : "bg-base-100"
      } shadow-md`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 link link-hover">
          <span className="text-2xl">🛍️</span>
          <span>
            <span className="font-bold text-lg">Style</span>
            <span className="text-sm opacity-75">Shop</span>
          </span>
        </Link>

        {/* Desktop Navigation & Actions */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search Bar (Desktop) */}
          {/* <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-bordered input-sm w-40 mr-2"
            />
            <button type="submit" className="btn btn-sm btn-outline">
              🔍
            </button>
          </form> */}

          {/* Nav Links */}
          <div className="flex space-x-3">
            <Link to="/" className="link link-hover" onClick={closeMenu}>
              🏠 Home
            </Link>
            <Link
              to="/products"
              className="link link-hover"
              onClick={closeMenu}
            >
              📦 Products
            </Link>
            <Link to="/about" className="link link-hover" onClick={closeMenu}>
              ℹ️ About
            </Link>
            <Link to="/contact" className="link link-hover" onClick={closeMenu}>
              📞 Contact
            </Link>
          </div>

          {/* Right-side Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Notifications */}
            <Link to="/notifications" className="relative">
              🔔
              {/* <span className="badge badge-sm badge-error absolute -top-2 -right-2">3</span> */}
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative">
              ❤️
              <span className="badge badge-sm badge-info absolute -top-2 -right-2">
                2
              </span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative flex items-center">
              🛒
              {/* <span className="badge badge-sm badge-primary absolute -top-2 -right-2">5</span> */}
              <span className="hidden lg:inline ml-1">Cart</span>
            </Link>

            {/* User Dropdown (DaisyUI) */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="cursor-pointer">
                👤
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                <li>
                  <Link to="/profile" onClick={closeMenu}>
                    <span>👤 Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to="/orders" onClick={closeMenu}>
                    <span>📦 Orders</span>
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" onClick={closeMenu}>
                    <span>❤️ Wishlist</span>
                  </Link>
                </li>
                <li>
                  <hr className="my-1" />
                </li>
                <li>
                  <Link to="/login" onClick={closeMenu}>
                    <span>🚪 Login</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden btn btn-ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-base-200 pb-4 px-4">
          <form onSubmit={handleSearch} className="mb-4">
            <div className="flex">
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input input-bordered input-sm flex-grow mr-2"
              />
              <button type="submit" className="btn btn-sm btn-outline">
                🔍
              </button>
            </div>
          </form>

          <div className="flex flex-col space-y-3">
            <Link to="/" className="link" onClick={closeMenu}>
              🏠 Home
            </Link>
            <Link to="/products" className="link" onClick={closeMenu}>
              📦 Products
            </Link>
            <Link to="/about" className="link" onClick={closeMenu}>
              ℹ️ About
            </Link>
            <Link to="/contact" className="link" onClick={closeMenu}>
              📞 Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
