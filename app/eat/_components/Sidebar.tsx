"use client";

import React, { useState } from "react";
import SidebarSection from "./SidebarSection";
import {
  SIDEBAR_SECTION_EMBER_SMOKERY_ITEMS,
  SIDEBAR_SECTION_GRAIN_ITEMS,
} from "@/app/lib/constants";
import Divider from "./Divider";

export default function Sidebar() {
  const [activeSidebarSection, setActiveSidebarSection] = useState<
    "grain" | "ember_smokery"
  >("grain");

  return (
    <div className="sticky top-0 h-screen w-[160px] px-6">
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
