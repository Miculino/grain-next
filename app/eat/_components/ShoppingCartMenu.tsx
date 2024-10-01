import React from "react";
import Cross from "../icons/Cross";
import Button from "./Button";
import useModalStore from "@/app/store/useModalStore";
import ProductCarousel from "./ProductCarousel";
import { STATIC_RECOMMENDATIONS } from "@/app/lib/constants";
import OrderFulfillmentOptions from "./OrderFulfillmentOptions";

export default function ShoppingCartMenu() {
  const { closeModal } = useModalStore();

  return (
    <div className="h-screen bg-white flex flex-col max-w-[370px]">
      <div className="px-4 py-2 border-b border-b-light-gray flex items-center justify-between">
        <p className="font-bold text-base">Your cart</p>
        <Cross onClick={() => closeModal()} className="cursor-pointer" />
      </div>
      <div className="h-full flex flex-col justify-end">
        <div className="bg-[#ececec]">
          <ProductCarousel products={STATIC_RECOMMENDATIONS} />
          <OrderFulfillmentOptions />
        </div>
        <div className="p-4">
          <Button disabled intent={"disabled"} size={"full"}>
            Go to checkout - $58.50
          </Button>
        </div>
      </div>
    </div>
  );
}
