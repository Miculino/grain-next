import { useRef, useState } from "react";
import Clock from "../icons/Clock";
import DropdownContainer from "./DropdownContainer";
import OrderNavigation from "./OrderNavigation";
import useHandleClickOutside from "@/app/hooks/useHandleClickOutside";

export default function DatePicker() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const dropdownTriggerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useHandleClickOutside({ dropdownTriggerRef, dropdownRef, setIsDropdownOpen });

  return (
    <div>
      <OrderNavigation
        ref={dropdownTriggerRef}
        onClick={handleClick}
        icon={Clock}
        text={"Oct 1, Tue at 12:30PM-1:30PM"}
        isDropdownOpen={isDropdownOpen}
      />
      {isDropdownOpen && (
        <DropdownContainer ref={dropdownRef} className="bottom-0">
          <div className="font-bold border-b border-b-gray p-4">
            <p className="text-base text-center">Select date and time slot</p>
          </div>
        </DropdownContainer>
      )}
    </div>
  );
}
