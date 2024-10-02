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
    <div className="rounded-sm overflow-hidden w-[600px]">
      <div className="bg-black p-4 text-white">
        <p className="font-bold text-lg">THREESOME</p>
        <p className="text-sm">
          choice of three mains and an option of drinks, desserts and sides
        </p>
      </div>
      <div className="bg-white max-h-[700px] overflow-y-scroll">
        <div className="p-4 text-center">
          <span className="text-dark-gray text-xs font-bold">MAINS</span>
          <div className="flex flex-col gap-4 mt-4">
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
        <div className="p-4 text-center">
          <span className="text-dark-gray text-xs font-bold">
            SIDES/DESSERTS
          </span>
          <div className="flex flex-col gap-4 mt-4">
            {menuCategories
              .filter(
                (category) =>
                  category.name === "Sides" || category.name === "Desserts"
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
        <div className="p-4 text-center">
          <span className="text-dark-gray text-xs font-bold">DRINKS</span>
          <div className="flex flex-col gap-4 mt-4">
            {menuCategories
              .filter((category) => category.name === "Drinks")
              .map(
                (category, key) =>
                  category.items &&
                  category.items.map((product) => (
                    <BundleProduct
                      key={key}
                      product={product as unknown as Dish}
                    />
                  ))
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
