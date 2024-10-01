import React from "react";
import Cross from "../icons/Cross";
import Button from "./Button";
import useModalStore from "@/app/store/useModalStore";
import ProductCarousel from "./ProductCarousel";
import { STATIC_RECOMMENDATIONS } from "@/app/lib/constants";

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
          <div className="bg-[#EAE6E1] px-4 py-4">
            <div>
              <p className="mb-1 text-sm">Ready to rock and roll!</p>
              <div className="w-full h-1 rounded-md bg-green-600"></div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm">Pick up from Food Point</p>
                <span className="text-sm">FREE</span>
              </div>
              <p>Or get door-to-door delivery</p>
            </div>
          </div>
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
