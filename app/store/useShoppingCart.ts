// Zustand
import { create } from "zustand";

// Types
import { ShoppingCartState } from "../types/store";

const useShoppingCart = create<ShoppingCartState>((set) => ({
  shoppingCart: [],
  addProduct: (product) =>
    set((state) => ({ shoppingCart: [...state.shoppingCart, product] })),
  removeProduct: (targetProductName) =>
    set((state) => ({
      shoppingCart: [
        ...state.shoppingCart.filter(
          (product) => product.name !== targetProductName
        ),
      ],
    })),
  updateProductQuantity: (targetProductName, updatedQuantity) =>
    set((state) => ({
      shoppingCart: [
        ...state.shoppingCart.map((product) =>
          targetProductName === product.name
            ? {
                ...product,
                quantity:
                  product.quantity !== 0
                    ? product.quantity + updatedQuantity
                    : 0,
              }
            : product
        ),
      ].filter((product) => product.quantity !== 0),
    })),
}));

export default useShoppingCart;
