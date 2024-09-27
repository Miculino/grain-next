import { menuCategories } from "../lib/menu-categories";
import Banner from "./_components/Banner";
import Container from "./_components/Container";
import MenuCategory from "./_components/MenuCategory";
import Sidebar from "./_components/Sidebar";

export default async function MealsOnDemand() {
  return (
    <Container>
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Banner />
        <div className="mt-20 flex flex-col gap-20">
          {menuCategories.map(({ category, description, dishes }) => (
            <MenuCategory
              key={category}
              dishes={dishes}
              description={description}
              category={category}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
