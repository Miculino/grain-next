// Zustand Stores
import useAddressStore from "@/app/store/useAddressStore";

// CLSX
import clsx from "clsx";

export default function RadioInput({
  text,
  name,
}: {
  text: string;
  name: "delivery" | "pick_up";
}) {
  const { setSelectedAddressType, selectedAddressType } = useAddressStore();

  const isAddressSelected = name === selectedAddressType;

  return (
    <label className="flex items-center gap-2 cursor-pointer max-w-fit">
      <input
        onChange={() => setSelectedAddressType(name)}
        className="hidden"
        type="radio"
        name={name}
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
