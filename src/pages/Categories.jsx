import React from "react";
import Products from "../data/products.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
const Categories = () => {
  const categories = [...new Set(Products.map((product) => product.category))];
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    setAllProducts(Products);
  }, []);

  return (
    <section className="featured-categories py-5">
      <div className="container">
        <div className="section-header mb-5">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">Browse our curated collections</p>
        </div>

        <div className="categories-grid">
          {categories.map((categoryName) => {
            // Count products in this category
            const productCount = allProducts.filter(
              (product) => product.category === categoryName,
            ).length;

            // Get some sample products for preview
            const sampleProducts = allProducts
              .filter((product) => product.category === categoryName)
              .slice(0, 4);

            return (
              <div key={categoryName} className="category-section mb-5 ">
                <div className="category-header d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h3 className="category-title mb-1">
                      {categoryName.charAt(0).toUpperCase() +
                        categoryName.slice(1)}
                    </h3>
                    <p className="text-muted mb-0">{productCount} products</p>
                  </div>
                  <Link
                    to={`/category/${categoryName}`}
                    className="btn btn-outline-primary"
                  >
                    View All
                  </Link>
                </div>

                {/* Products preview for this category */}
                <div className="row g-4 ">
                  {sampleProducts.map((product) => (
                    <CategoryCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
