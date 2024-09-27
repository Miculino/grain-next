import DishCard from "./DishCard";

export default function MenuCategory({
  dishes,
  category,
  description,
}: {
  category: string;
  description: string;
  dishes: Dish[];
}) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-1">{category}</h2>
      <p>{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {dishes.map((dish) => (
          <DishCard dish={dish} />
        ))}
      </div>
    </div>
  );
}
