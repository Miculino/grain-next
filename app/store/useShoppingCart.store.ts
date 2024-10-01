import { create } from "zustand";
import { ShoppingCartState } from "../types/store";

const useShoppingCart = create<ShoppingCartState>((set) => ({
  shoppingCart: [],
  addProduct: (product) =>
    set((state) => ({ shoppingCart: [...state.shoppingCart, product] })),
}));

export default useShoppingCart;
