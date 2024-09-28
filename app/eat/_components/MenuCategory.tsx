"use client";

import { useInView } from "react-intersection-observer";
import ProductCard from "./ProductCard";
import { SanityItems } from "@/app/types/api";

import { useEffect } from "react";
import useCategoryStore from "@/app/store/useCategoryStore";

export default function MenuCategory({
  items,
  categoryName,
  description,
  sliceIndex,
}: {
  categoryName: string | null;
  description: string | null;
  items: SanityItems;
  sliceIndex: number | undefined;
}) {
  const { setActiveCategory } = useCategoryStore();

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActiveCategory(categoryName);
    }
  }, [inView, categoryName, setActiveCategory]);

  return (
    <div ref={ref} id={categoryName ? categoryName.toLocaleLowerCase() : ""}>
      <h2 className="text-3xl font-bold mb-1">{categoryName}</h2>
      <p>{description}</p>

      <div className="mt-4 gap-4 flex flex-col">
        {items && (
          <>
            <div
              className="grid gap-4 "
              style={{
                gridTemplateColumns: `repeat(${
                  categoryName === "Regulars" ? 1 : 2
                }, 1fr)`,
              }}
            >
              {items.slice(0, sliceIndex).map((product, index) => (
                <ProductCard
                  className={
                    index === 0 && categoryName === "Regulars"
                      ? "flex-row"
                      : "flex-col"
                  }
                  key={product.name}
                  product={product}
                  type={product._type}
                />
              ))}
            </div>
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: `repeat(3, 1fr)` }}
            >
              {items.slice(sliceIndex).map((product, index) => (
                <ProductCard
                  className={
                    index === 0 && categoryName === "Regulars"
                      ? "col-span-3 flex-row"
                      : "flex-col"
                  }
                  key={product.name}
                  product={product}
                  type={product._type}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
