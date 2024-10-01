import { ShoppingCartProductProps } from "@/app/types/components";
import React from "react";

export default function ShoppingCartProduct({
  name,
  total_price,
  quantity,
}: ShoppingCartProductProps) {
  return (
    <div className="flex items-start justify-between border-b border-b-light-gray p-4">
      <div className="flex items-start gap-1">
        <p className="text-sm font-bold ">
          {quantity} x ${name}
        </p>
      </div>
      <span>${total_price.toFixed(2)}</span>
    </div>
  );
}
