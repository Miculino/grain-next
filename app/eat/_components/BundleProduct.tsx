import { SanityItems } from "@/app/types/api";
import { Dish } from "@/app/types/components";
import React from "react";

// Next
import Image from "next/image";

export default function BundleProduct({ product }: { product: Dish }) {
  return (
    <div className="shadow-md flex border border-light-gray rounded-sm">
      <Image
        src={product.thumbnail.asset.url}
        alt=""
        className="object-cover"
        width={100}
        height={100}
      />
      <div className="p-4">
        <div className="flex flex-col items-start text-left">
          <span className="font-bold text-sm">{product.name}</span>
          <p className="text-xs text-dark-gray">
            {product.tags.join(", ").toLowerCase()}
          </p>
        </div>
      </div>
    </div>
  );
}
