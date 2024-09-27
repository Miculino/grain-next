import React from "react";

export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-[1px] border-[#999] rounded-sm w-fit p-1 text-xs text-[#999]">
      {children}
    </div>
  );
}
