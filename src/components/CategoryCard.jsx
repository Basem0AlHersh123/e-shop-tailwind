// Simple, clean CategoryCard
import React from "react";
import { Link } from "react-router-dom";
const CategoryCard = ({ product }) => {
  return (
    <Link
      key={product.id}
      className="col-md-4 col-lg-3"
      to={`/product/${product.id}`}
    >
      <div className="category-product-card">
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>
        <div className="product-info">
          <h5 className="product-title">{product.title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <span className="price">${product.price}</span>
            <span className="rating">⭐ {product.rating.rate}</span>
          </div>
        </div>
      </div>
    </Link>
    // <div className="category-card-simple">
    //   <div className="category-image">
    //     <img src={image} alt={categoryName} />
    //     <div className="category-overlay">
    //       <h3>{categoryName}</h3>
    //       <p>{productCount} Products</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CategoryCard;
