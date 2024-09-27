import Banner from "./_components/Banner";
import MenuCategory from "./_components/MenuCategory";
import Sidebar from "./_components/Sidebar";

export default async function MealsOnDemand() {
  return (
    <div>
      <Sidebar />
      <Banner />
      <MenuCategory />
    </div>
  );
}
