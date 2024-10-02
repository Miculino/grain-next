// Components
import BundleProduct from "./BundleProduct";

// Types
import { CATEGORIES_QUERYResult } from "@/app/types/sanity";
import useBundleStore from "@/app/store/useBundleStore";
import { useEffect } from "react";

export default function BundleBuilder({
  menuCategories,
}: {
  menuCategories: CATEGORIES_QUERYResult;
}) {
  const { bundleCategories, setBundleCategories } = useBundleStore();

  useEffect(() => {
    setBundleCategories(menuCategories);
  }, [menuCategories, setBundleCategories]);

  console.log(bundleCategories);

  return (
    <div className="rounded-sm overflow-hidden w-[600px]">
      <div className="bg-black p-4 text-white">
        <p className="font-bold text-lg">THREESOME</p>
        <p className="text-sm">
          choice of three mains and an option of drinks, desserts and sides
        </p>
      </div>
      <div className="bg-white max-h-[700px] overflow-y-scroll">
        {bundleCategories.length > 0 &&
          bundleCategories.map((bundleCategory) => (
            <div key={bundleCategory.type} className="p-4 text-center">
              <span className="text-dark-gray text-xs font-bold">
                {bundleCategory.type}
              </span>
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
