// Components
import BundleProduct from "./BundleProduct";

// Types
import { CATEGORIES_QUERYResult } from "@/app/types/sanity";
import useBundleStore from "@/app/store/useBundleStore";
import { useEffect } from "react";
import calculateBundleProductLimit from "@/app/utils/calculateBundleProductLimit";

export default function BundleBuilder({
  menuCategories,
}: {
  menuCategories: CATEGORIES_QUERYResult;
}) {
  const { bundleCategories, setBundleCategories, selectedBundle } =
    useBundleStore();

  useEffect(() => {
    setBundleCategories(menuCategories);
  }, [menuCategories, setBundleCategories]);

  return (
    <div className="rounded-sm overflow-hidden w-[600px]">
      <div className="bg-black p-4 text-white">
        <p className="font-bold text-lg uppercase">{selectedBundle.name}</p>
        <p className="text-sm">{selectedBundle.overview}</p>
      </div>
      <div className="bg-white max-h-[700px] overflow-y-scroll">
        {bundleCategories.length > 0 &&
          bundleCategories.map((bundleCategory) => (
            <div key={bundleCategory.type} className="p-4 text-center">
              <div className="flex flex-col items-center gap-4">
                <span className="text-dark-gray text-xs font-bold uppercase">
                  {bundleCategory.type}
                </span>
                <span>
                  Choose{" "}
                  {calculateBundleProductLimit(bundleCategory, selectedBundle)}
                </span>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                {bundleCategory.products.map((product) => (
                  <BundleProduct key={product.name} product={product} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
