// Core React
import React, { useRef, useState } from "react";

// Components
import { MultiDivider } from "./Divider";
import AddressPickerOption from "./AddressPickerOption";
import OrderNavigation from "./OrderNavigation";
import DropdownContainer from "./DropdownContainer";

// Hooks
import useHandleClickOutside from "@/app/hooks/useHandleClickOutside";

// Zustand Stores
import useAddressStore from "@/app/store/useAddressStore";

// Icons
import LocationPinpoint from "../icons/LocationPinpoint";

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
        text={!address ? "Select an adress first" : address}
        isDropdownOpen={isDropdownOpen}
      />
      {isDropdownOpen && (
        <DropdownContainer ref={dropdownRef} className="-bottom-6  p-5">
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
