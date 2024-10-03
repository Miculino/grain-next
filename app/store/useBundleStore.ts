// Zustand
import { create } from "zustand";

// Utils
import generateBundleCategories from "../utils/generateBundleCategories";

// Types
import { BundleState } from "../types/store";
import { BundleCategory } from "../types/common";
import { Bundle } from "../types/components";

const useBundleStore = create<BundleState>((set) => ({
  selectedBundle: null as unknown as Bundle,
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
