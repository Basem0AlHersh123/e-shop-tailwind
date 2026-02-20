// src/components/Footer.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`py-12 px-4 transition-all duration-500 ${
        isDarkMode
          ? "bg-slate-950 text-slate-300"
          : "bg-slate-100 text-slate-800"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand & About */}
          <div>
            <h5 className="uppercase font-bold text-amber-500 text-lg mb-4">
              E-Shop 🛒
            </h5>
            <p className="text-sm leading-relaxed opacity-80">
              Your premier destination for high-quality goods delivered
              globally. We prioritize excellent service and customer
              satisfaction above all else.
            </p>
          </div>

          {/* Column 2: Products */}
          <div>
            <h5 className="uppercase font-bold text-amber-500 text-lg mb-4">
              Products
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/category/electronics"
                  className="hover:text-amber-500 transition"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="/category/clothing"
                  className="hover:text-amber-500 transition"
                >
                  Clothing & Apparel
                </Link>
              </li>
              <li>
                <Link
                  to="/category/home-goods"
                  className="hover:text-amber-500 transition"
                >
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-amber-500 transition"
                >
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h5 className="uppercase font-bold text-amber-500 text-lg mb-4">
              Useful Links
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-amber-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-500 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/order-status"
                  className="hover:text-amber-500 transition"
                >
                  Order Status
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-amber-500 transition">
                  Help / FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h5 className="uppercase font-bold text-amber-500 text-lg mb-4">
              Contact
            </h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-amber-500" />
                <span>123 E-Shop St, Commerce City</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500" />
                <span>info@eshop.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500" />
                <span>+01 234 567 89</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Dynamic Divider */}
        <div
          className={`border-t my-8 ${isDarkMode ? "border-slate-800" : "border-slate-300"}`}
        ></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm opacity-70">
            Copyright © 2026 All rights reserved by:{" "}
            <Link to="/" className="text-amber-500 font-bold hover:underline">
              E-Shop
            </Link>
          </p>

          {/* Social Icons with Mode-Specific Hover Colors */}
          <div className="flex space-x-6">
            {[
              {
                Icon: FaFacebook,
                link: "https://facebook.com",
                color: "hover:text-blue-500",
              },
              {
                Icon: FaXTwitter,
                link: "https://twitter.com",
                color: "hover:text-white",
              },
              {
                Icon: FaInstagram,
                link: "https://instagram.com",
                color: "hover:text-pink-500",
              },
              {
                Icon: FaLinkedin,
                link: "https://linkedin.com",
                color: "hover:text-blue-400",
              },
            ].map(({ Icon, link, color }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 hover:-translate-y-1 ${
                  isDarkMode ? "text-slate-500" : "text-slate-400"
                } ${color}`}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
