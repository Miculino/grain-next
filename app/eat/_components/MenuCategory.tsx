import { useInView } from "react-intersection-observer";
import { SetStateAction, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function MenuCategory({
  dishes,
  bundles,
  category,
  description,
  setActiveCategory,
  sliceIndex,
}: {
  category: string;
  description: string;
  dishes: Dish[] | undefined;
  bundles: Bundle[] | undefined;
  setActiveCategory: React.Dispatch<SetStateAction<string | null>>;
  sliceIndex: number;
}) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActiveCategory(category);
    }
  }, [inView, category, setActiveCategory]);

  return (
    <div ref={ref} id={category.toLocaleLowerCase()}>
      <h2 className="text-3xl font-bold mb-1">{category}</h2>
      <p>{description}</p>

      <div className="mt-4 gap-4 flex flex-col">
        {dishes && (
          <>
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: `repeat(${
                  category === "Regulars" ? 1 : 2
                }, 1fr)`,
              }}
            >
              {dishes.slice(0, sliceIndex).map((dish, index) => (
                <ProductCard
                  className={
                    index === 0 && category === "Regulars"
                      ? "flex-row"
                      : "flex-col"
                  }
                  key={dish.name}
                  product={dish}
                  type="dish"
                />
              ))}
            </div>
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: `repeat(3, 1fr)` }}
            >
              {dishes.slice(sliceIndex).map((dish, index) => (
                <ProductCard
                  className={
                    index === 0 && category === "Regulars"
                      ? "col-span-3 flex-row"
                      : "flex-col"
                  }
                  key={dish.name}
                  product={dish}
                  type="dish"
                />
              ))}
            </div>
          </>
        )}

        {bundles && (
          <>
            <div
              className={`grid gap-4`}
              style={{ gridTemplateColumns: `repeat(2, 1fr)` }}
            >
              {bundles.slice(0, sliceIndex).map((bundle) => (
                <ProductCard
                  className="flex-col w-full"
                  key={bundle.name}
                  type="bundle"
                  product={bundle}
                />
              ))}
            </div>

            <div
              className={`grid  gap-4 mt-4`}
              style={{ gridTemplateColumns: `repeat(3, 1fr)` }}
            >
              {bundles.slice(sliceIndex).map((bundle) => (
                <ProductCard
                  className="flex-col w-full"
                  key={bundle.name}
                  type="bundle"
                  product={bundle}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
