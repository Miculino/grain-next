import useAddressStore from "@/app/store/useAddressStore";
import clsx from "clsx";
import { useState } from "react";

export default function RadioInput({
  text,
  name,
}: {
  text: string;
  name: "delivery" | "pick_up";
}) {
  const {
    address: { type },
    setAddress,
  } = useAddressStore();

  const isAddressSelected = type === name;

  return (
    <label className="flex items-center gap-2 cursor-pointer max-w-fit">
      <input
        onChange={() => setAddress({ location: text, type: name })}
        className="hidden"
        type="radio"
        name={name}
        id={type}
        checked={isAddressSelected}
      />
      <div
        className={clsx(
          "w-4 h-4 border-2 border-black rounded-full",
          isAddressSelected && "bg-slate-900/80"
        )}
      ></div>
      <span className="text-[#4D4D4D] text-sm">{text}</span>
    </label>
  );
}
