export default function calculateBundleProductLimit(
  bundleCategory,
  selectedBundle
) {
  if (bundleCategory.type === "Mains") {
    return selectedBundle.mains_limit.required
      ? `${selectedBundle.mains_limit.limit} items`
      : `up to ${selectedBundle.mains_limit.limit} items (OPTIONAL)`;
  }
  if (bundleCategory.type === "Sides/Desserts") {
    return selectedBundle.sides_desserts_limit.required
      ? `${selectedBundle.sides_desserts_limit.limit} items`
      : `up to ${selectedBundle.sides_desserts_limit.limit} items (OPTIONAL)`;
  }
  if (bundleCategory.type === "Drinks") {
    return selectedBundle.drinks_limit.required
      ? `${selectedBundle.drinks_limit.limit} items`
      : `up to ${selectedBundle.drinks_limit.limit} items (OPTIONAL)`;
  }
}
