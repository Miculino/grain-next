import { useInView } from "react-intersection-observer";
import DishCard from "./ProductCard";
import { SetStateAction, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function MenuCategory({
  dishes,
  bundles,
  category,
  description,
  setActiveCategory,
}: {
  category: string;
  description: string;
  dishes: Dish[] | undefined;
  bundles: Bundle[] | undefined;
  setActiveCategory: React.Dispatch<SetStateAction<string | null>>;
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

      <div
        className={`grid grid-cols-1 ${
          category === "Highlights" ? "md:grid-cols-2" : "md:grid-cols-3"
        } gap-4 mt-4`}
      >
        {dishes &&
          dishes.map((dish, index) => (
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
        {bundles &&
          bundles.map((bundle) => (
            <ProductCard className="flex-col" type="bundle" product={bundle} />
          ))}
      </div>
    </div>
  );
}
