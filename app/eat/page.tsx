import Banner from "./_components/Banner";
import Container from "./_components/Container";
import MenuCategory from "./_components/MenuCategory";
import Sidebar from "./_components/Sidebar";

export default async function MealsOnDemand() {
  return (
    <Container>
      <Sidebar />
      <div>
        <Banner />
        <MenuCategory />
      </div>
    </Container>
  );
}
