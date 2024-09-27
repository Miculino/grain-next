import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-primary hover:bg-[#e3b517] rounded-sm font-bold py-1 px-6 transition-all transition-100">
      {children}
    </button>
  );
}
