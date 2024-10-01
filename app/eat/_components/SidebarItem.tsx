// Zustand Stores
import useCategoryStore from "@/app/store/useCategoryStore";

// CLSX
import clsx from "clsx";

export default function SidebarItem({ item }: { item: string }) {
  const { activeCategory } = useCategoryStore();

  const isSidebarItemActive = activeCategory === item;

  return (
    <li
      className={clsx(
        "text-xs border-l-4  hover:border-l-primary hover:font-bold px-1 ml-2",
        {
          "border-l-primary font-bold": isSidebarItemActive,
          "border-l-transparent": !isSidebarItemActive,
        }
      )}
    >
      {item}
    </li>
  );
}
