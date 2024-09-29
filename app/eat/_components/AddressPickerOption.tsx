import RadioInput from "./RadioInput";
import Divider from "./Divider";

export default function AddressPickerOption({
  type,
  title,
}: AddressPickerOptionProps) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <p className="font-bold text-2xl">{title}</p>
        <RadioInput text="Street number 245" />
      </div>
    </>
  );
}
