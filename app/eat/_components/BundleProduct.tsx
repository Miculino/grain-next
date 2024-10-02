import { Dish } from "@/app/types/components";
import React from "react";

// Next
import Image from "next/image";

interface BundleProductProps {
  product: Dish;
}

export default function BundleProduct({ product }: BundleProductProps) {
  // Handle cases where the product might not have a thumbnail
  const thumbnailUrl =
    product.thumbnail?.asset?.url || "/path/to/default/image.jpg";

  return (
    <div className="shadow-md flex border border-light-gray rounded-sm">
      <Image
        src={thumbnailUrl}
        alt={product.name || "Product Image"}
        className="object-cover"
        width={100}
        height={100}
        priority // Loads the image with priority for better performance
      />
      <div className="p-4">
        <div className="flex flex-col items-start text-left">
          <span className="font-bold text-sm">{product.name}</span>
          {/* Optional: Add a check for tags to avoid errors */}
          {product.tags && product.tags.length > 0 ? (
            <p className="text-xs text-dark-gray">
              {product.tags.join(", ").toLowerCase()}
            </p>
          ) : (
            <p className="text-xs text-dark-gray">No tags available</p>
          )}
        </div>
      </div>
    </div>
  );
}
