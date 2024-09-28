import Banner from "./_components/Banner";
import Container from "./_components/Container";
import MenuCategory from "./_components/MenuCategory";
import Sidebar from "./_components/Sidebar";
import Modal from "./_components/Modal";
import { client } from "../lib/sanity/client";
import { CATEGORIES_QUERY } from "../lib/sanity/queries";

export default async function MealsOnDemand() {
  const menuCategories = await client.fetch(CATEGORIES_QUERY);

  return (
    <>
      <Container>
        <Sidebar activeCategory={"test"} />
        <div className="flex-1 overflow-y-auto">
          <Banner />
          <div className="mt-20 flex flex-col gap-20">
            {menuCategories &&
              menuCategories.length > 0 &&
              menuCategories
                .filter((menu) => Object.keys(menu).length > 0)
                .map(({ name, description, items = [], slice_index }) => (
                  <MenuCategory
                    key={name}
                    items={items}
                    description={description}
                    categoryName={name}
                    sliceIndex={slice_index}
                  />
                ))}
          </div>
        </div>
      </Container>
      <Modal />
    </>
  );
}
