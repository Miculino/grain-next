"use client";

// Core React
import { useEffect, useState } from "react";

// Components
import SidebarSection from "./SidebarSection";
import Divider from "./Divider";

// CLSX
import clsx from "clsx";

// Constants
import {
  SCROLL_THRESHOLD,
  SIDEBAR_SECTION_EMBER_SMOKERY_ITEMS,
  SIDEBAR_SECTION_GRAIN_ITEMS,
} from "@/app/lib/constants";

export default function Sidebar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const [activeSidebarSection, setActiveSidebarSection] = useState<
    "grain" | "ember_smokery"
  >("grain");

  const handleScroll = () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx("h-screen w-[160px] px-6 top-24", isScrolled && "fixed")}
    >
      <SidebarSection
        activeSidebarSection={activeSidebarSection}
        setActiveSidebarSection={setActiveSidebarSection}
        type="grain"
        logo="https://storage.googleapis.com/spineproduction/uploads/menu_section/menu_nav/91/2.png"
        sidebarItems={SIDEBAR_SECTION_GRAIN_ITEMS}
      />
      <Divider />
      <SidebarSection
        activeSidebarSection={activeSidebarSection}
        setActiveSidebarSection={setActiveSidebarSection}
        type="ember_smokery"
        logo="https://storage.googleapis.com/spineproduction/uploads/menu_section/menu_nav/67/ember_web.svg"
        sidebarItems={SIDEBAR_SECTION_EMBER_SMOKERY_ITEMS}
      />
    </div>
  );
}
