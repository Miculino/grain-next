// Types
import { CATEGORIES_QUERYResult } from "../types/sanity";

export default function generateBundleCategories(
  categories: CATEGORIES_QUERYResult
) {
  return [
    {
      title: "Mains",
      type: "mains",
      products: [
        ...categories
          .filter(
            (category) =>
              category.name === "Highlights" || category.name === "Regulars"
          )
          .flatMap((category) => category.items),
      ],
    },
    {
      title: "Sides/Desserts",
      type: "sides_desserts",
      products: [
        ...categories
          .filter(
            (category) =>
              category.name === "Sides" || category.name === "Desserts"
          )
          .flatMap((category) => category.items),
      ],
    },
    {
      title: "Drinks",
      type: "drinks",
      products: [
        ...categories
          .filter((category) => category.name === "Drinks")
          .flatMap((category) => category.items),
      ],
    },
  ];
}
