import React, { useEffect, useRef, useState } from "react";
import LocationPinpoint from "../icons/LocationPinpoint";
import Chevron from "../icons/Chevron";
import { MultiDivider } from "./Divider";
import AddressPickerOption from "./AddressPickerOption";
import useAddressStore from "@/app/store/useAddressStore";
import OrderNavigation from "./OrderNavigation";

export default function AddressPicker() {
  const { selectedAddressType, deliveryAddress, pickUpAddress } =
    useAddressStore();

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const buttonRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const address =
    selectedAddressType === "delivery" ? deliveryAddress : pickUpAddress;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-[400px]">
      <OrderNavigation
        ref={buttonRef}
        onClick={handleClick}
        icon={LocationPinpoint}
        text={address}
        isDropdownOpen={isDropdownOpen}
      />
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="bg-white p-5 shadow-md absolute -bottom-6 w-[460px] translate-y-full border-[1px]"
        >
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
        </div>
      )}
    </div>
  );
}
