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

// Types
import { CATEGORIES_QUERYResult } from "@/app/types/sanity";
import { BundleCategory } from "@/app/types/common";
import { Bundle } from "@/app/types/components";

export default function BundleBuilder({
  menuCategories,
}: {
  menuCategories: CATEGORIES_QUERYResult;
}) {
  const { closeModal } = useModalStore();
  const { bundleCategories, setBundleCategories, selectedBundle } =
    useBundleStore();

  const handleCloseModal = () => {
    closeModal();
  };

  useEffect(() => {
    setBundleCategories(menuCategories);
  }, [menuCategories, setBundleCategories]);

  return (
    <div className="rounded-sm overflow-hidden w-[600px]">
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
            <div key={bundleCategory.type} className="p-4 text-center">
              <div className="flex flex-col items-center gap-4">
                <span className="text-dark-gray text-xs font-bold uppercase">
                  {bundleCategory.title}
                </span>
                <span>
                  Choose{" "}
                  {calculateBundleProductLimit(
                    bundleCategory as BundleCategory,
                    selectedBundle as Bundle
                  )}
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
