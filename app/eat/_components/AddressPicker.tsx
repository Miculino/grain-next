import React, { useEffect, useRef, useState } from "react";
import LocationPinpoint from "../icons/LocationPinpoint";
import Chevron from "../icons/Chevron";
import { MultiDivider } from "./Divider";
import AddressPickerOption from "./AddressPickerOption";
import useAddressStore from "@/app/store/useAddressStore";

export default function AddressPicker() {
  const {
    address: { location },
  } = useAddressStore();

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const buttonRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

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
    <div className="relative min-w-[400px]">
      <div
        ref={buttonRef}
        onClick={handleClick}
        className="flex items-center gap-1 font-bold cursor-pointer"
      >
        <LocationPinpoint />
        <p className="border-b-2 border-black truncate">{location}</p>
        <Chevron
          className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="bg-white p-5 shadow-md absolute -bottom-6 min-w-lg translate-y-full border-[1px]"
        >
          <AddressPickerOption type={"delivery"} title="Delivery address" />
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
