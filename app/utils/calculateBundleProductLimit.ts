import { BundleCategory } from "../types/common";
import { Bundle } from "../types/components";

export default function calculateBundleProductLimit(
  bundleCategory: BundleCategory,
  selectedBundle: Bundle
) {
  return selectedBundle[bundleCategory.type].required
    ? `${selectedBundle[bundleCategory.type].limit} items`
    : `up to ${selectedBundle[bundleCategory.type].limit} items (OPTIONAL)`;
}
