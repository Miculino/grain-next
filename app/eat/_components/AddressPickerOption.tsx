import RadioInput from "./RadioInput";
import Divider from "./Divider";
import Button from "./Button";
import { AddressPickerOptionProps } from "@/app/types/components";
import useModalStore from "@/app/store/useModalStore";

export default function AddressPickerOption({
  type,
  title,
}: AddressPickerOptionProps) {
  const { setModalContentType, openModal } = useModalStore();

  const handleClick = () => {
    openModal();
    setModalContentType("address_search");
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <p className="font-bold text-2xl">{title}</p>
        <RadioInput name={type} text="Street number 245" />
        {type === "delivery" && (
          <Button onClick={handleClick} intent={"link"}>
            Add new address
          </Button>
        )}
      </div>
    </>
  );
}
