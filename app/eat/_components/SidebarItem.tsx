import clsx from "clsx";

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
