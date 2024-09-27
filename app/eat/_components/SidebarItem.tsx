import React from "react";

export default function SidebarItem({
  item,
  activeCategory,
}: {
  item: string;
  activeCategory: string | null;
}) {
  const isSidebarItemActive = activeCategory === item;

  return (
    <li
      className={`${
        isSidebarItemActive ? "border-l-primary" : ""
      } text-xs border-l-4 border-l-transparent hover:border-l-primary hover:font-bold px-1 ml-2`}
    >
      {item}
    </li>
  );
}
