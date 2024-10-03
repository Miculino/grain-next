// Components
import Button from "./Button";
import ProgressBar from "./ProgressBar";

// Types
import { IBundleProduct } from "@/app/types/common";
import { BundleCategoriesLimits } from "@/app/types/store";
import { Bundle } from "@/app/types/components";

function isBundleCategory(
  value: any
): value is { required: boolean; limit: number } {
  return (
    value &&
    typeof value === "object" &&
    "required" in value &&
    "limit" in value
  );
}

type BundleCategoryKey = "mains" | "drinks" | "sides_desserts";

export default function BundleCreationProgress({
  price,
  bundleCategoriesLimits,
  selectedBundle,
}: {
  price: number;
  bundleCategoriesLimits: BundleCategoriesLimits;
  selectedBundle: Bundle;
}) {
  const totalRequiredLimit = Object.entries(selectedBundle).reduce(
    (acc, [key, category]) => {
      if (
        (key === "mains" || key === "drinks" || key === "sides_desserts") &&
        isBundleCategory(category) &&
        category.required
      ) {
        return acc + (category.limit ?? 0);
      }
      return acc;
    },
    0
  );

  const totalQuantitySelected = Object.entries(bundleCategoriesLimits).reduce(
    (categoryAcc, [categoryKey, categoryProducts]) => {
      const category = selectedBundle[categoryKey as BundleCategoryKey];

      if (!isBundleCategory(category) || !category.required) {
        return categoryAcc;
      }

      const categoryTotal = categoryProducts.reduce(
        (productAcc: number, product: IBundleProduct) => {
          return productAcc + (product.quantity ?? 0);
        },
        0
      );
      return categoryAcc + categoryTotal;
    },
    0
  );

  const remainingItems = totalRequiredLimit - totalQuantitySelected;

  return (
    <div className="absolute bottom-0 w-full p-4 bg-white drop-shadow-md border-t border-t-light-gray flex flex-col gap-2">
      <p className="text-sm">
        {remainingItems > 0
          ? `Add ${remainingItems} more items to complete your bundle`
          : "Bundle is complete!"}
      </p>
      <ProgressBar
        progress={(totalQuantitySelected / totalRequiredLimit) * 100}
      />
      <div className="flex justify-between items-center">
        <span className="font-bold">${price.toFixed(2)}</span>
        <Button
          className="py-1 px-10"
          disabled={remainingItems > 0}
          intent={remainingItems > 0 ? "disabled" : "primary"}
        >
          Add
        </Button>
      </div>
    </div>
  );
}
