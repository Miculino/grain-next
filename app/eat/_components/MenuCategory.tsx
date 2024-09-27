import { useInView } from "react-intersection-observer";
import DishCard from "./DishCard";
import { SetStateAction, useEffect } from "react";

export default function MenuCategory({
  dishes,
  category,
  description,
  setActiveCategory,
}: {
  category: string;
  description: string;
  dishes: Dish[];
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
        {dishes.map((dish) => (
          <DishCard dish={dish} />
        ))}
      </div>
    </div>
  );
}
