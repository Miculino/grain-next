import Image from "next/image";
import Chevron from "./Chevron";
import SidebarItem from "./SidebarItem";
import { SetStateAction } from "react";
import Link from "next/link";

export default function SidebarSection({
  sidebarItems,
  logo,
  type,
  setActiveSidebarSection,
  activeSidebarSection,
  activeCategory,
}: {
  sidebarItems: string[];
  logo: string;
  type: "grain" | "ember_smokery";
  setActiveSidebarSection: React.Dispatch<
    SetStateAction<"grain" | "ember_smokery">
  >;
  activeSidebarSection: "grain" | "ember_smokery";
  activeCategory: string | null;
}) {
  const isSidebarSectionSelected = activeSidebarSection === type;

  const handleSidebarSectionSelection = () => {
    setActiveSidebarSection(type);
  };

  return (
    <div className="cursor-pointer">
      <div
        onClick={handleSidebarSectionSelection}
        className="p-1 flex items-center border-l-4 border-transparent hover:border-l-primary"
      >
        <Image src={logo} width={92} height={36} alt={`${type} logo`} />
        <Chevron className={`${isSidebarSectionSelected ? "rotate-0" : ""}`} />
      </div>

      {isSidebarSectionSelected ? (
        <ul className="flex flex-col gap-2">
          {sidebarItems.map((sidebarItem) => (
            <Link
              href={`#${sidebarItem.toLocaleLowerCase()}`}
              key={sidebarItem}
            >
              <SidebarItem activeCategory={activeCategory} item={sidebarItem} />
            </Link>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
