import { create } from "zustand";
import { ShoppingCartState } from "../types/store";

const useShoppingCart = create<ShoppingCartState>((set) => ({
  shoppingCart: [],
}));

export default useShoppingCart;
