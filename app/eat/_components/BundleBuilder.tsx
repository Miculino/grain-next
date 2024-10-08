// Core React
import { useEffect } from "react";

// Components
import BundleProduct from "./BundleProduct";

// Zustand Stores
import useBundleStore from "@/app/store/useBundleStore";
import useModalStore from "@/app/store/useModalStore";

// Utils
import calculateBundleProductLimit from "@/app/utils/calculateBundleProductLimit";

// Icons
import Cross from "../icons/Cross";
import Checkmark from "../icons/Checkmark";
import BundleCreationProgress from "./BundleCreationProgress";

// Types
import { CATEGORIES_QUERYResult } from "@/app/types/sanity";
import { BundleCategory, IBundleProduct } from "@/app/types/common";
import { Bundle } from "@/app/types/components";
import { BundleCategoriesLimits } from "@/app/types/store";

export default function BundleBuilder({
  menuCategories,
}: {
  menuCategories: CATEGORIES_QUERYResult;
}) {
  const { closeModal } = useModalStore();
  const {
    bundleCategories,
    setBundleCategories,
    selectedBundle,
    bundleCategoriesLimits,
  } = useBundleStore();

  const handleCloseModal = () => {
    closeModal();
  };

  useEffect(() => {
    setBundleCategories(menuCategories);
  }, [menuCategories, setBundleCategories]);

  return (
    <div className="rounded-sm overflow-hidden w-[600px] relative">
      <div className="bg-black p-4 text-white flex justify-between items-start">
        <div>
          <p className="font-bold text-lg uppercase">{selectedBundle.name}</p>
          <p className="text-sm">{selectedBundle.overview}</p>
        </div>
        <Cross
          onClick={handleCloseModal}
          className="rounded-full bg-dark-gray opacity-65 max-w-fit p-2 cursor-pointer"
        />
      </div>
      <div className="bg-white max-h-[700px] overflow-y-scroll">
        {bundleCategories.length > 0 &&
          bundleCategories.map((bundleCategory) => (
            <BundleCategorySection
              key={bundleCategory.type}
              bundleCategory={bundleCategory as BundleCategory}
              selectedBundle={selectedBundle as Bundle}
              bundleCategoriesLimits={bundleCategoriesLimits}
            />
          ))}
      </div>
      <BundleCreationProgress
        selectedBundle={selectedBundle as Bundle}
        price={selectedBundle.price ?? 0}
        bundleCategoriesLimits={bundleCategoriesLimits}
      />
    </div>
  );
}

function BundleCategorySection({
  bundleCategory,
  selectedBundle,
  bundleCategoriesLimits,
}: {
  bundleCategory: BundleCategory;
  selectedBundle: Bundle;
  bundleCategoriesLimits: BundleCategoriesLimits;
}) {
  const bundleProductLimit = calculateBundleProductLimit(
    bundleCategory,
    selectedBundle
  );

  const currentBundleCategoryLimits: IBundleProduct[] =
    bundleCategoriesLimits[
      bundleCategory.type as keyof BundleCategoriesLimits
    ] || [];

  const bundleCategoryLimit = selectedBundle[bundleCategory.type].limit;

  const totalQuantity = currentBundleCategoryLimits.reduce(
    (acc: number, curr: IBundleProduct) => {
      return acc + (curr.quantity ?? 0);
    },
    0
  );

  const bundleCategoryLimitReached = totalQuantity === bundleCategoryLimit;

  return (
    <div key={bundleCategory.type} className="p-4 text-center">
      <div className="flex flex-col items-center gap-4">
        <span className="text-dark-gray text-xs font-bold uppercase">
          {bundleCategory.title}
        </span>
        <div className="flex items-center gap-1">
          <span>{bundleProductLimit}</span>
          {selectedBundle.mains.required && (
            <div className="flex items-center gap-1">
              <span>
                ({totalQuantity} / {bundleCategoryLimit})
              </span>
              {bundleCategoryLimitReached && <Checkmark />}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {bundleCategory.products.map((product) => (
          <BundleProduct
            key={product.name}
            product={product}
            bundleCategory={bundleCategory}
            bundleLimitReached={bundleCategoryLimitReached}
          />
        ))}
      </div>
    </div>
  );
}
