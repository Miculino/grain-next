import RadioInput from "./RadioInput";
import Button from "./Button";
import { AddressPickerOptionProps } from "@/app/types/components";
import useModalStore from "@/app/store/useModalStore";
import useAddressStore from "@/app/store/useAddressStore";

export default function AddressPickerOption({
  type,
  title,
  setIsDropdownOpen,
}: AddressPickerOptionProps) {
  const { setModalContentType, openModal } = useModalStore();
  const { deliveryAddress, pickUpAddress } = useAddressStore();

  const handleClick = () => {
    openModal();
    setModalContentType("address_search");

    if (type === "delivery" && setIsDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <p className="font-bold text-2xl">{title}</p>
        <RadioInput
          name={type}
          text={type === "delivery" ? deliveryAddress : pickUpAddress}
        />
        {type === "delivery" && (
          <Button onClick={handleClick} intent={"link"}>
            Add new address
          </Button>
        )}
      </div>
    </>
  );
}
