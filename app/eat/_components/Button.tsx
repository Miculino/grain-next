import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-primary hover:bg-[#e3b517] rounded-sm font-bold py-2 px-6 gap-2 transition-all transition-100 flex items-center">
      {children}
    </button>
  );
}
