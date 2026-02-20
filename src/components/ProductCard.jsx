import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block  group">
      <div className="flex flex-col h-full  rounded-box bg-base-100 shadow p-4 text-center hover:shadow-lg transition-shadow">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain mx-auto"
        />
        <p className="mt-2 font-bold text-base-content line-clamp-2">
          {product.title}
        </p>
        <p className="text-primary">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
