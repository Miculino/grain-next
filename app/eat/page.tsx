"use client";

import { useState } from "react";
import { menuCategories } from "../lib/menu-categories";
import Banner from "./_components/Banner";
import Container from "./_components/Container";
import MenuCategory from "./_components/MenuCategory";
import Sidebar from "./_components/Sidebar";
import Modal from "./_components/Modal";

export default function MealsOnDemand() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <>
      <Container>
        <Sidebar activeCategory={activeCategory} />
        <div className="flex-1 overflow-y-auto">
          <Banner />
          <div className="mt-20 flex flex-col gap-20">
            {menuCategories.map(
              ({ category, description, dishes, bundles, sliceIndex }) => (
                <MenuCategory
                  setActiveCategory={setActiveCategory}
                  key={category}
                  dishes={dishes}
                  description={description}
                  category={category}
                  bundles={bundles}
                  sliceIndex={sliceIndex}
                />
              )
            )}
          </div>
        </div>
      </Container>
      <Modal />
    </>
  );
}
