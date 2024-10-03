// Zustand
import { create } from "zustand";

// Utils
import generateBundleCategories from "../utils/generateBundleCategories";

// Types
import { BundleCategoriesLimits, BundleState } from "../types/store";
import { BundleCategory, IBundleProduct } from "../types/common";
import { Bundle } from "../types/components";

const useBundleStore = create<BundleState>((set) => ({
  selectedBundle: null as unknown as Bundle,
  bundleCategoriesLimits: {
    mains: [],
    sides_desserts: [],
    drinks: [],
  },
  bundleCategories: [],
  setBundleCategories: (categories) => {
    set({
      bundleCategories: generateBundleCategories(
        categories
      ) as unknown as BundleCategory[],
    });
  },
  selectBundle: (selectedBundle) =>
    set({
      selectedBundle,
      bundleCategoriesLimits: { mains: [], sides_desserts: [], drinks: [] },
    }),
  setBundleCategoryLimits: (product: IBundleProduct) =>
    set((state) => {
      const categoryLimits: IBundleProduct[] =
        state.bundleCategoriesLimits[
          product.category as keyof BundleCategoriesLimits
        ];
      const existingProduct = categoryLimits.find(
        (item) => item.name === product.name
      );

      if (existingProduct) {
        return {
          bundleCategoriesLimits: {
            ...state.bundleCategoriesLimits,
            [product.category]: categoryLimits.map((item) =>
              item.name === product.name
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          },
        };
      }

      return {
        bundleCategoriesLimits: {
          ...state.bundleCategoriesLimits,
          [product.category]: [...categoryLimits, { ...product, quantity: 1 }],
        },
      };
    }),
}));

export default useBundleStore;
