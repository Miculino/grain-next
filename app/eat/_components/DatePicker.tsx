import { useRef, useState } from "react";
import Clock from "../icons/Clock";
import DropdownContainer from "./DropdownContainer";
import OrderNavigation from "./OrderNavigation";
import useHandleClickOutside from "@/app/hooks/useHandleClickOutside";
import {
  AVAILABLE_DINNER_TIMES,
  AVAILABLE_LUNCH_TIMES,
} from "@/app/lib/constants";
import Button from "./Button";
import getCurrentWeekDays from "@/app/utils/getCurrentWeekDays";

export default function DatePicker() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const dropdownTriggerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useHandleClickOutside({ dropdownTriggerRef, dropdownRef, setIsDropdownOpen });

  const currentWeekDays = getCurrentWeekDays();

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
          <div className="flex justify-between">
            <div>
              <div className="flex flex-col p-2 min-w-20">
                <span>Mon</span>
                <span>Sep 30</span>
              </div>
            </div>
            <div className="p-8  w-full">
              <p className="text-center text-sm mb-6">
                Order 15 minutes before any time slot
              </p>
              <div className="flex flex-col gap-8">
                <div>
                  <span className="inline-block mx-auto font-bold text-sm text-center mb-2 w-full">
                    Lunch
                  </span>
                  <div className="flex flex-col gap-2">
                    {AVAILABLE_LUNCH_TIMES.map((time) => (
                      <Button size={"full"} intent={"outline"}>
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="inline-block mx-auto font-bold text-sm text-center mb-2 w-full">
                    Dinner
                  </span>
                  <div className="flex flex-col gap-2">
                    {AVAILABLE_DINNER_TIMES.map((time) => (
                      <Button size={"full"} intent={"outline"}>
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DropdownContainer>
      )}
    </div>
  );
}
