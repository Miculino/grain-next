import React from "react";

export default function Clock() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ stroke: "rgb(254, 204, 7)", width: "18px", height: "18px" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16Z"
        fill="#FECC07"
        stroke="#FECC07"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0938 9.00003H9V5.90619"
        fill="#FECC07"
      />
      <path
        d="M12.0938 9.00003H9V5.90619"
        stroke="yellow"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
