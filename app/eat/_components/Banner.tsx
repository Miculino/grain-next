import { BANNER_URL } from "@/app/lib/constants";
import React from "react";

export default function Banner() {
  return (
    <div
      className={`w-full bg-cover text-white`}
      style={{ backgroundImage: `url(${BANNER_URL})` }}
    >
      <div className="p-6 min-h-[420px] flex justify-center gap-2 flex-col">
        <p className="text-[40px] font-bold w-1/2">Can you keep a secret?</p>
        <p className="text-lg w-1/2">
          Word around the kitchen is a Michelin-starred pastry chef made this
          just for us. Can’t reveal her name, but we can tell you that our
          newest dessert is almost too good to share. Almost.
        </p>
      </div>
    </div>
  );
}
