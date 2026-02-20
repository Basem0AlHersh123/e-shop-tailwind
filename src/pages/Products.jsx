// src/pages/Products.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import allProducts from "../data/products.json";
import ProductCard from "../components/ProductCard";
import { useTheme } from "../context/ThemeContext";

const Products = () => {
  const { isDarkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setProducts(filtered);
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is live; this just prevents page reload
  };

  return (
    <section className="py-8 px-4">
      {/* Desktop Search (visible on large screens) */}
      <form
        onSubmit={handleSearch}
        className="hidden lg:flex justify-center mb-8 max-w-lg mx-auto"
      >
        <div className="join w-full">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered join-item w-full"
          />
          <button
            type="submit"
            className={`btn join-item ${
              isDarkMode ? "btn-outline" : "btn-primary"
            }`}
          >
            🔍
          </button>
        </div>
      </form>

      {/* Mobile Search (visible on small screens) */}
      <form onSubmit={handleSearch} className="lg:hidden mb-6 max-w-md mx-auto">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered join-item w-full"
          />
          <button type="submit" className="btn btn-primary join-item">
            🔍
          </button>
        </div>
      </form>

      {/* Products Grid or Empty State */}
      {products.length > 0 ? (
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Featured Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="alert alert-error max-w-md mx-auto">
            <span>No products found.</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
