import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-primary",
        "hover:bg-[#e3b517]",
        "font-bold",
        "py-2",
        "px-6",
        "gap-2",
        "flex",
        "items-center",
      ],
      link: ["underline", "hover:text-light-gray"],
      disabled: "bg-gray py-2 px-6 text-white",
    },
  },
});

export default function Button({
  children,
  intent = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        button({ intent }),
        "max-w-fit transition-alll transition-100",
        className
      )}
    >
      {children}
    </button>
  );
}
