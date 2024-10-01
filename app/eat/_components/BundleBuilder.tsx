// Components
import { Dish } from "@/app/types/components";
import BundleProduct from "./BundleProduct";

// Types
import { CATEGORIES_QUERYResult } from "@/app/types/sanity";

export default function BundleBuilder({
  menuCategories,
}: {
  menuCategories: CATEGORIES_QUERYResult;
}) {
  return (
    <div className="rounded-sm overflow-hidden">
      <div className="bg-black p-4 text-white">
        <p className="font-bold text-lg">THREESOME</p>
        <p>choice of three mains and an option of drinks, desserts and sides</p>
      </div>
      <div className="bg-light-gray max-h-[700px] overflow-y-scroll text-center">
        <div className="p-4">
          <span className="text-dark-gray text-xs font-bold">MAINS</span>
          <div className="flex flex-col gap-4">
            {menuCategories
              .filter(
                (category) =>
                  category.name === "Highlights" || category.name === "Regulars"
              )
              .map(
                (category) =>
                  category.items &&
                  category.items.map((product) => (
                    <BundleProduct product={product as unknown as Dish} />
                  ))
              )}
          </div>
        </div>
        {/* {menuCategories
          .filter(
            (category) =>
              category.name !== "Merch" && category.name !== "Bundles"
          )
          .map((category) => (
            <p>{category.name}</p>
          ))} */}
      </div>
    </div>
  );
}
