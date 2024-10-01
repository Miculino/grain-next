import { OrderNavigationProps } from "@/app/types/components";
import React, { forwardRef } from "react";
import Chevron from "../icons/Chevron";
import clsx from "clsx";

function OrderNavigation(
  {
    icon: Icon,
    text,
    onClick,
    isDropdownOpen,
    small,
    ...props
  }: OrderNavigationProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div
      {...props}
      ref={ref}
      onClick={onClick}
      className={clsx(
        "flex items-center gap-1 cursor-pointer max-w-fit",
        small ? "text-xs text-[#4d4d4d]" : "font-bold"
      )}
    >
      {Icon && <Icon />}
      <p className={clsx("border-b-2 truncate", small && "border-black")}>
        {text}
      </p>
      <Chevron
        className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
      />
    </div>
  );
}

export default forwardRef(OrderNavigation);
