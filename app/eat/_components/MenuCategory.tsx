import DishCard from "./DishCard";

interface Dishes {
  name: string;
  served: string;
  main_ingredients: string;
  tags: string[];
  thumbnail: string;
  price: string;
  details: {
    story: string;
    all_ingredients: string;
    nutritional_info: {
      calories: number;
      fat: number;
      carb: number;
      protein: number;
    };
    full_thumbnail: string;
  };
}

export default function MenuCategory({
  dishes,
  category,
  description,
}: {
  category: string;
  description: string;
  dishes: Dishes[];
}) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-1">{category}</h2>
      <p>{description}</p>

      <div className="flex gap-4 mt-4">
        {dishes.map((dish) => (
          <DishCard />
        ))}
      </div>
    </div>
  );
}
