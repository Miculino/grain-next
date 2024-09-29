import clsx from "clsx";

export default function Cross({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { className?: string }) {
  return (
    <div className={clsx(className)} {...props}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "18px", height: "18px" }}
      >
        <path
          d="M3 15L15 3"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 15L3 3"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
