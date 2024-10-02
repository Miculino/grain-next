// Types
import { CATEGORIES_QUERYResult } from "../types/sanity";

export default function generateBundleCategories(
  categories: CATEGORIES_QUERYResult
) {
  return [
    {
      type: "Mains",
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
      type: "Sides/Desserts",
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
      type: "Drinks",
      products: [
        ...categories
          .filter((category) => category.name === "Drinks")
          .flatMap((category) => category.items),
      ],
    },
  ];
}
