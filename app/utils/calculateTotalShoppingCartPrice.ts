// Types
import { ShoppingCartProductProps } from "../types/components";

export default function calculateTotalShoppingCartPrice(
  shoppingCart: ShoppingCartProductProps[]
) {
  return shoppingCart.length > 0
    ? shoppingCart
        .map((product) => product.price * product.quantity)
        .reduce(
          (prevProductTotalPrice, currProductTotalPrice) =>
            prevProductTotalPrice + currProductTotalPrice
        )
    : 0;
}
