import { create } from "zustand";

const useCategoryStore = create<CategoryState>((set) => ({
  activeCategory: "",
  setActiveCategory: (category) => set({ activeCategory: category }),
}));

export default useCategoryStore;
