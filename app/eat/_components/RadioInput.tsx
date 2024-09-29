import clsx from "clsx";
import { useState } from "react";

export default function RadioInput({ text }: { text: string }) {
  const [isInputChecked, setIsInputChecked] = useState<boolean>(false);

  return (
    <label className="flex items-center gap-2 cursor-pointer max-w-fit">
      <input
        onInput={() => setIsInputChecked((prev) => !prev)}
        className="hidden"
        type="radio"
        name="delivery_address"
        value={""}
      />
      <div
        className={clsx(
          "w-4 h-4 border-2 border-black rounded-full",
          isInputChecked && "bg-black"
        )}
      ></div>
      <span className="text-[#4D4D4D] text-sm">{text}</span>
    </label>
  );
}
