

"use client";

import { Star, ShoppingCart } from "lucide-react";

const confidenceStyles = {
  High: "bg-green-600",
  Medium: "bg-yellow-500",
  Low: "bg-gray-400",
};

export default function ProductCard({
  product,
  onViewClick,
  confidence,
  rank,
}) {
  return (
    <div className="relative bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-[480px] flex flex-col">
      {/* Rank Badge */}
      {rank && (
        <div className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full z-10">
          #{rank} Recommended
        </div>
      )}

      {/* Confidence Badge */}
      {confidence && (
        <div
          className={`absolute top-3 right-3 text-white text-xs px-3 py-1 rounded-full z-10 ${confidenceStyles[confidence]}`}
        >
          {confidence}
        </div>
      )}

      {/* Product Image */}
      <div className="relative h-56 bg-muted overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg text-foreground line-clamp-1 mb-1">
          {product.name}
        </h3>

        <p className="text-sm text-muted mb-2">{product.category}</p>

        <p className="text-sm text-muted mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4 mt-auto">
          <span className="text-xl font-bold text-primary">
            ${product.price}
          </span>

          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">
              {product.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <button
          onClick={onViewClick}
          className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 font-medium text-sm"
        >
          <ShoppingCart className="w-4 h-4" />
          View Product
        </button>
      </div>
    </div>
  );
}

