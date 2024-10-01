// Core React
import { forwardRef } from "react";

// CLSX
import clsx from "clsx";

// Types
import { DropdownContainerProps } from "@/app/types/components";

function DropdownContainer(
  { className, children, ...props }: DropdownContainerProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div
      {...props}
      ref={ref}
      className={clsx(
        "bg-white shadow-md absolute w-[460px] translate-y-full border border-gray",
        className
      )}
    >
      {children}
    </div>
  );
}

export default forwardRef(DropdownContainer);
