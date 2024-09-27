import clsx from "clsx";

export default function Chevron({ className }: { className?: string }) {
  return (
    <span className={clsx("-rotate-90 transition-all duration-100", className)}>
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ stroke: "rgb(0, 0, 0)", width: "10px", height: "10px" }}
      >
        <path
          d="M1 1L4.81156 4.91964C4.86151 4.97109 4.9293 5 5 5C5.0707 5 5.13849 4.97109 5.18844 4.91964L9 1"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </span>
  );
}
