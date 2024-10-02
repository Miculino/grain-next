// Zustand
import { create } from "zustand";

// Utils
import generateBundleCategories from "../utils/generateBundleCategories";

// Types
import { BundleState } from "../types/store";
import { BundleCategory } from "../types/components";

const useBundleStore = create<BundleState>((set) => ({
  selectedBundle: "bundle",
  bundleCategories: [], // Initialize with an empty array or set a default
  setBundleCategories: (categories) => {
    set({
      bundleCategories: generateBundleCategories(
        categories
      ) as unknown as BundleCategory[],
    });
  },
  selectBundle: (selectedBundle) => set({ selectedBundle }),
}));

export default useBundleStore;
