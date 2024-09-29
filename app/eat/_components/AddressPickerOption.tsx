import RadioInput from "./RadioInput";
import Divider from "./Divider";
import Button from "./Button";
import { AddressPickerOptionProps } from "@/app/types/components";
import useModalStore from "@/app/store/useModalStore";
import useAddressStore from "@/app/store/useAddressStore";
import { DEFAULT_FOOD_PICK_UP_ADDRESS } from "@/app/lib/constants";

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

    type === "delivery" && setIsDropdownOpen && setIsDropdownOpen(false);
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
