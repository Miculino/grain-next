import { create } from "zustand";
import { CategoryState } from "../types/store";

const useCategoryStore = create<CategoryState>((set) => ({
  activeCategory: "",
  setActiveCategory: (category) => set({ activeCategory: category }),
}));

export default useCategoryStore;
