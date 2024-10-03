import { Dish } from "@/app/types/components";
import React, { memo } from "react";

// Next
import Image from "next/image";
import useBundleStore from "@/app/store/useBundleStore";
import { BundleCategory } from "@/app/types/common";

interface BundleProductProps {
  product: Dish;
  bundleCategory: BundleCategory;
  bundleLimitReached: boolean;
}

function BundleProduct({
  product,
  bundleCategory,
  bundleLimitReached,
}: BundleProductProps) {
  const { setBundleCategoryLimits } = useBundleStore();

  // Handle cases where the product might not have a thumbnail
  const thumbnailUrl =
    product.thumbnail?.asset?.url || "/path/to/default/image.jpg";

  const handleAddBundleProduct = () => {
    if (bundleLimitReached) return;

    console.log("still being clicked");

    const newBundleProduct = {
      name: product.name,
      price: product.price,
      bundle_surchage: product?.bundle_price ?? 0,
      bundle_price: 10,
      quantity: 1,
      category: bundleCategory.type,
    };

    setBundleCategoryLimits(newBundleProduct);
  };

  return (
    <div
      onClick={handleAddBundleProduct}
      className="shadow-md flex border border-light-gray rounded-sm"
    >
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

export default memo(BundleProduct);
