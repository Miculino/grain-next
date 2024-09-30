import { OrderNavigationProps } from "@/app/types/components";
import React, { forwardRef } from "react";
import Chevron from "../icons/Chevron";

function OrderNavigation(
  { icon: Icon, text, onClick, isDropdownOpen, ...props }: OrderNavigationProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div
      {...props}
      ref={ref}
      onClick={onClick}
      className="flex items-center gap-1 font-bold cursor-pointer max-w-fit"
    >
      <Icon />
      <p className="border-b-2 border-black truncate ">{text}</p>
      <Chevron
        className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
      />
    </div>
  );
}

export default forwardRef(OrderNavigation);
