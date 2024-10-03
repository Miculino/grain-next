export default function calculateBundleProductLimit(
  bundleCategory,
  selectedBundle
) {
  return selectedBundle[bundleCategory.type].required
    ? `${selectedBundle[bundleCategory.type].limit} items`
    : `up to ${selectedBundle[bundleCategory.type].limit} items (OPTIONAL)`;
}
