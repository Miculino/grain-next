import { BundleCategory } from "../types/common";
import { Bundle } from "../types/components";

export default function calculateBundleProductLimit(
  bundleCategory: BundleCategory,
  selectedBundle: Bundle
) {
  const currentBundleCategory = selectedBundle[bundleCategory.type];

  return currentBundleCategory.required
    ? `Choose ${currentBundleCategory.limit} ${currentBundleCategory.limit > 1 ? "items" : "item"}`
    : `Choose up to ${currentBundleCategory.limit} items (OPTIONAL)`;
}
