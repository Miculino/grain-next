// Components
import Button from "./Button";
import ProductCarousel from "./ProductCarousel";
import OrderFulfillmentOptions from "./OrderFulfillmentOptions";
import ShoppingCartProduct from "./ShoppingCartProduct";

// Next
import Image from "next/image";

// Zustand
import useShoppingCart from "@/app/store/useShoppingCart";
import useModalStore from "@/app/store/useModalStore";

// Utils
import calculateTotalShoppingCartPrice from "@/app/utils/calculateTotalShoppingCartPrice";

// Constants
import { STATIC_RECOMMENDATIONS } from "@/app/lib/constants";

// Icons
import Cross from "../icons/Cross";

export default function ShoppingCartMenu() {
  const { closeModal } = useModalStore();
  const { shoppingCart } = useShoppingCart();

  const totalShoppingCartPrice = calculateTotalShoppingCartPrice(shoppingCart);

  return (
    <div className="h-screen bg-white flex flex-col max-w-[370px]">
      <div className="px-4 py-2 border-b border-b-light-gray flex items-center justify-between">
        <p className="font-bold text-base">Your cart</p>
        <Cross onClick={() => closeModal()} className="cursor-pointer" />
      </div>
      <div className="h-full">
        {shoppingCart.length > 0 ? (
          <>
            {shoppingCart.map((product) => (
              <ShoppingCartProduct
                key={product.name}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                total_price={product.total_price}
              />
            ))}
          </>
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
              Go to checkout - ${totalShoppingCartPrice.toFixed(2)}
            </Button>
          </div>
        </div>
      ) : null}
      {shoppingCart.length === 0 ? (
        <div className="p-4">
          <Button className="py-2" size={"full"}>
            Go to checkout - ${totalShoppingCartPrice.toFixed(2)}
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
