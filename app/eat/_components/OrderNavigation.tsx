// Core React
import { forwardRef } from "react";

// CLSX
import clsx from "clsx";

// Icons
import Chevron from "../icons/Chevron";

// Types
import { OrderNavigationProps } from "@/app/types/components";

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
      <p className={clsx("truncate", !small && "border-b-2 border-b-black")}>
        {text}
      </p>
      <Chevron
        className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
      />
    </div>
  );
}

export default forwardRef(OrderNavigation);
