// Zustand
import { create } from "zustand";

// Types
import { CategoryState } from "../types/store";

const useCategoryStore = create<CategoryState>((set) => ({
  activeCategory: "",
  setActiveCategory: (category) => set({ activeCategory: category }),
}));

export default useCategoryStore;
