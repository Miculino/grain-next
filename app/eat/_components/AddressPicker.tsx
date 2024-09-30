import React, { useRef, useState } from "react";
import LocationPinpoint from "../icons/LocationPinpoint";
import { MultiDivider } from "./Divider";
import AddressPickerOption from "./AddressPickerOption";
import useAddressStore from "@/app/store/useAddressStore";
import OrderNavigation from "./OrderNavigation";
import useHandleClickOutside from "@/app/hooks/useHandleClickOutside";
import DropdownContainer from "./DropdownContainer";

export default function AddressPicker() {
  const { selectedAddressType, deliveryAddress, pickUpAddress } =
    useAddressStore();

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const dropdownTriggerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const address =
    selectedAddressType === "delivery" ? deliveryAddress : pickUpAddress;

  // Hooks
  useHandleClickOutside({ dropdownTriggerRef, dropdownRef, setIsDropdownOpen });

  return (
    <div className="relative w-[400px]">
      <OrderNavigation
        ref={dropdownTriggerRef}
        onClick={handleClick}
        icon={LocationPinpoint}
        text={address}
        isDropdownOpen={isDropdownOpen}
      />
      {isDropdownOpen && (
        <DropdownContainer className="-bottom-6">
          <AddressPickerOption
            setIsDropdownOpen={setIsDropdownOpen}
            type={"delivery"}
            title="Delivery address"
          />
          <MultiDivider />
          <AddressPickerOption
            type={"pick_up"}
            title="Pick up for free from a Food point"
          />
        </DropdownContainer>
      )}
    </div>
  );
}
