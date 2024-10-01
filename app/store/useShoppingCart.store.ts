import { create } from "zustand";
import { ShoppingCartState } from "../types/store";

const useShoppingCart = create<ShoppingCartState>((set) => ({
  shoppingCart: [],
  addProduct: (product) =>
    set((state) => ({ shoppingCart: [...state.shoppingCart, product] })),
  increaseProductQuantity: (targetProductName) =>
    set((state) => ({
      shoppingCart: [
        ...state.shoppingCart.map((product) =>
          targetProductName === product.name
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      ],
    })),
}));

export default useShoppingCart;
