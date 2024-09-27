import React from "react";

export default function SidebarItem({ item }: { item: string }) {
  return (
    <li className="text-xs border-l-4 border-l-transparent hover:border-l-primary hover:font-bold px-1 ml-2">
      {item}
    </li>
  );
}
