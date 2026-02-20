// src/components/TestimonialCard.jsx
import React from "react";
import { Star } from "lucide-react";

const TestimonialCard = ({ testimony }) => {
  return (
    <div className="flex flex-col h-full p-6 rounded-box bg-base-100 shadow-sm border border-base-300 w-full max-w-md mx-auto">
      {/* Author Info */}
      <div className="flex items-center mb-4">
        <img
          src={testimony.avatarUrl}
          alt={testimony.name}
          className="rounded-full w-15 h-15 object-cover mr-4"
        />
        <div>
          <h6 className="text-sm font-semibold">{testimony.name}</h6>
          <p className="text-xs opacity-70">{testimony.location}</p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="mb-4 flex">
        {Array.from({ length: testimony.rating }, (_, index) => (
          <Star
            key={index}
            size={18}
            fill="#fbbf24" // Tailwind amber-400
            className="text-amber-400"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="italic text-base-content opacity-90 mt-2">
        “{testimony.quote}”
      </p>
    </div>
  );
};

export default TestimonialCard;
