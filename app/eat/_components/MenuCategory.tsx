import DishCard from "./DishCard";

export default function MenuCategory() {
  return (
    <div>
      <h2>Higlights</h2>
      <p>Weekly rotating dishes inspired by flavours from around the world.</p>

      <div>
        <DishCard />
        <DishCard />
      </div>
    </div>
  );
}
