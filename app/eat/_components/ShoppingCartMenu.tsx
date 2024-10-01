import React from "react";
import Cross from "../icons/Cross";
import Button from "./Button";
import useModalStore from "@/app/store/useModalStore";
import ProductCarousel from "./ProductCarousel";
import { STATIC_RECOMMENDATIONS } from "@/app/lib/constants";
import OrderFulfillmentOptions from "./OrderFulfillmentOptions";
import useShoppingCart from "@/app/store/useShoppingCart.store";
import Image from "next/image";

export default function ShoppingCartMenu() {
  const { closeModal } = useModalStore();
  const { shoppingCart } = useShoppingCart();

  return (
    <div className="h-screen bg-white flex flex-col max-w-[370px]">
      <div className="px-4 py-2 border-b border-b-light-gray flex items-center justify-between">
        <p className="font-bold text-base">Your cart</p>
        <Cross onClick={() => closeModal()} className="cursor-pointer" />
      </div>
      <div className="h-full">
        {shoppingCart.length > 0 ? (
          <div>
            <p>Products</p>
          </div>
        ) : (
          <EmptyShoppingCart />
        )}
      </div>
      {shoppingCart.length > 0 ? (
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
      ) : null}
      {shoppingCart.length === 0 ? (
        <div className="p-4">
          <Button className="py-2" size={"full"}>
            Go to checkout - $0.00
          </Button>
        </div>
      ) : null}
    </div>
  );
}

function EmptyShoppingCart() {
  return (
    <div className="grid place-content-center gap-2 h-full justify-items-center text-center">
      <Image
        src={
          "https://res.cloudinary.com/dqmcvtuhi/image/upload/v1727789140/Grain_logo_rrpful.png"
        }
        width={50}
        height={50}
        alt=""
      />
      <div className="text-dark-gray">
        <p>Hmm... your cart is empty.</p>
        <p>How about adding some meals before checking out?</p>
      </div>
    </div>
  );
}
