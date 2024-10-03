// CLSX
import clsx from "clsx";

// Types
import { CheckmarkProps } from "@/app/types/components";

export default function Checkmark({ className, ...props }: CheckmarkProps) {
  return (
    <div className={clsx(className)} {...props}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="#02A34C"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7" cy="7" r="7" />
        <path
          d="M3.5 7.607L5.655 10L10 5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
