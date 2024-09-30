import { useState } from "react";
import Chevron from "../icons/Chevron";
import Clock from "../icons/Clock";

export default function DatePicker() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="flex gap-1 items-center font-bold cursor-pointer"
      >
        <Clock />
        <p className="border-b-2 border-black truncate ">
          Oct 1, Tue at 12:30PM-1:30PM
        </p>
        <Chevron
          className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isDropdownOpen && (
        <div className="bg-white p-5 shadow-md absolute -bottom-0 w-[460px] translate-y-full border-[1px]">
          Dropdown
        </div>
      )}
    </div>
  );
}
