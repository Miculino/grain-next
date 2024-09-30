import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const button = cva("button", {
  variants: {
    intent: {
      primary: ["bg-primary", "hover:bg-[#e3b517]", "font-bold", "gap-2"],
      link: ["underline", "hover:text-light-gray"],
      disabled: "bg-gray py-2 px-6 text-white font-bold",
      outline: [
        "hover:bg-[#e3b517]",
        "hover:font-bold",
        "hover:text-black",
        "py-2",
        "px-6",
        "border",
        "border-gray",
        "text-[#777]",
      ],
    },
    size: {
      default: ["max-w-fit"],
      full: "w-full",
    },
  },
});

export default function Button({
  children,
  intent = "primary",
  size = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        button({ intent, size }),
        "transition-alll transition-100 flex items-center justify-center",
        className
      )}
    >
      {children}
    </button>
  );
}
