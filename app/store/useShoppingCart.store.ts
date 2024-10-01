import { create } from "zustand";
import { ShoppingCartState } from "../types/store";

const useShoppingCart = create<ShoppingCartState>((set) => ({
  shoppingCart: [],
  addProduct: (product) =>
    set((state) => ({ shoppingCart: [...state.shoppingCart, product] })),
  updateProductQuantity: (targetProductName, quantity) =>
    set((state) => ({
      shoppingCart: [
        ...state.shoppingCart.map((product) =>
          targetProductName === product.name
            ? {
                ...product,
                quantity,
                total_price: product.price * quantity,
              }
            : product
        ),
      ],
    })),
}));

export default useShoppingCart;
