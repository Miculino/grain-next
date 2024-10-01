// Components
import Button from "./Button";
import ProductInfo from "./ProductInfo";
import Tag from "./Tag";

// Zustand Stores
import useModalStore from "@/app/store/useModalStore";

// CLSX
import clsx from "clsx";

// Types
import { Dish } from "@/app/types/components";
import useShoppingCart from "@/app/store/useShoppingCart";
import ProductPriceAndQuantity from "./ProductPriceAndQuantity";

export default function ProductDetails({ className }: { className?: string }) {
  const { modalContent } = useModalStore();
  const { addProduct } = useShoppingCart();

  if (modalContent) {
    const {
      served,
      name,
      overview,
      tags,
      price,
      details: { story, all_ingredients, nutritional_info, full_thumbnail },
    } = modalContent as unknown as Dish;

    return (
      <div className={clsx("flex bg-white", className)}>
        <div
          className={`bg-cover flex-1 flex bg-top`}
          style={{ backgroundImage: `url(${full_thumbnail.asset.url})` }}
        >
          <div className="bg-gradient-overlay flex items-end w-full h-full text-white">
            <div className="flex flex-col gap-2  p-4 ">
              <Tag color="white">{served}</Tag>
              <h3 className="font-bold">{name}</h3>
              <p>{overview}</p>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 relative">
          <div className="h-[750px] overflow-y-scroll">
            {/* STORY */}
            <ProductInfo title="STORY">
              <p>{story}</p>
            </ProductInfo>
            {/* INGREDIENTS */}
            <ProductInfo title="INGREDIENTS">
              <p>{all_ingredients}</p>
            </ProductInfo>
            {/* TAGS */}
            {tags && (
              <ProductInfo title="TAGS">
                <div className="flex flex-wrap gap-2">
                  {tags.map((label: string) => (
                    <Tag key={label}>{label}</Tag>
                  ))}
                </div>
              </ProductInfo>
            )}

            {/* NUTRITIONAL INFO */}
            <ProductInfo title="NUTRITIONAL INFO" border="border-b-0">
              {nutritional_info ? (
                <ul>
                  <li>Calories: {nutritional_info.calories}</li>
                  <li>Fat: {nutritional_info.fat}g</li>
                  <li>Carb: {nutritional_info.carb}g</li>
                  <li>Protein: {nutritional_info.protein}g</li>
                </ul>
              ) : (
                <p>COMING SOON</p>
              )}
            </ProductInfo>
          </div>
          <div className="w-full absolute bottom-0 left-0 p-4 border-t-[1px] border-t-light-gray bg-white justify-between flex items-center">
            <ProductPriceAndQuantity
              targetProductName={name}
              targetProductPrice={price}
            />
          </div>
        </div>
      </div>
    );
  }
}
