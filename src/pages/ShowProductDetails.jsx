// src/pages/ShowProductDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Products from "../data/products.json";
import { useTheme } from "../context/ThemeContext";

const ShowProductDetails = () => {
  const { id } = useParams();
  const { isDarkMode } = useTheme();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = () => {
      try {
        setLoading(true);
        const productId = parseInt(id, 10);
        if (isNaN(productId)) {
          throw new Error("Invalid product ID");
        }

        const foundProduct = Products.find((prod) => prod.id === productId);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Optional: Later, replace the above with live API:
  /*
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);
  */

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-md mx-auto py-12 text-center">
        <div className="alert alert-error mb-6">
          <span>{error || "Product not found"}</span>
        </div>
        <Link to="/products" className="btn btn-primary">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Product Details</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-md object-contain rounded-box"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-sm opacity-70 uppercase tracking-wider">
            Category: {product.category}
          </p>
          <h3 className="text-3xl font-bold text-primary">${product.price}</h3>
          <p className="opacity-90">{product.description}</p>
          <div className="flex items-center gap-2">
            <span>⭐ {product.rating.rate}</span>
            <span>({product.rating.count} reviews)</span>
          </div>

          {/* Add to Cart Button */}
          <button
            className={`btn btn-lg mt-4 ${
              isDarkMode ? "btn-outline btn-warning" : "btn-success"
            }`}
          >
            Add to Cart
          </button>

          {/* Back to Products */}
          <Link to="/products" className="btn btn-ghost">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowProductDetails;
