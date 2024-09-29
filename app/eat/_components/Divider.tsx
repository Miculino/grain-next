import React from "react";

export default function Divider() {
  return <hr className="h-[1px] my-2 w-full bg-dark-gray"></hr>;
}

export const MultiDivider = () => {
  return (
    <div className="flex items-center gap-3 py-4 relative justify-center">
      <Divider />
      <span className="text-xs text-dark-gray absolute bg-white p-2 top-2">
        or
      </span>
    </div>
  );
};
