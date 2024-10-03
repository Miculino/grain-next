// Class Variance Authority
import { cva, type VariantProps } from "class-variance-authority";
// CLSX
import clsx from "clsx";

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
        "gap-2",
        "border",
        "border-primary",
      ],
      link: ["underline", "hover:text-light-gray"],
      disabled: "bg-gray text-white font-bold",
      outline: [
        "hover:bg-[#e3b517]",
        "hover:font-bold",
        "hover:text-black",
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
        "transition-alll transition-100 flex items-center justify-center rounded-sm",
        className
      )}
    >
      {children}
    </button>
  );
}
