import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import MainNavbar from "./components/MainNavbar.jsx"; // Import from the folder
import Home from "./pages/Home";
import Products from "./pages/Products";
import "./app.css";
import Footer from "./components/Footer.jsx";
import Go_Up_Button from "./components/Go_Up_Button.jsx";

// import Categories from "./pages/Categories.jsx";
import ShowProductDetails from "./pages/ShowProductDetails.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* Everything inside here can now use useLanguage and useTheme */}
        <MainNavbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="/categories" element={<Categories />} /> */}
            <Route path="/product/:id" element={<ShowProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Go_Up_Button />
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
// you stopped right here where you were searching about ai api and their images icons etc. you are planning to build a website for ai models according to categories. check that out right here"https://gemini.google.com/u/1/app/5edc303567ffe329?pageId=none"

// -=============================================================
// at the moment you gotta complete with claude "c c d d b c d b c b c".
// -=============================================================
