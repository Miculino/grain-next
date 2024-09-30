import { DropdownContainerProps } from "@/app/types/components";
import clsx from "clsx";
import { forwardRef } from "react";

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
