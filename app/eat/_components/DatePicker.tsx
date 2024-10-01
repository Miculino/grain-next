import { useEffect, useRef, useState } from "react";
import Clock from "../icons/Clock";
import DropdownContainer from "./DropdownContainer";
import OrderNavigation from "./OrderNavigation";
import useHandleClickOutside from "@/app/hooks/useHandleClickOutside";
import { AVAILABLE_TIMES } from "@/app/lib/constants";
import Button from "./Button";
import getCurrentWeekDays from "@/app/utils/getCurrentWeekDays";
import formatDate from "@/app/utils/formatDate";
import clsx from "clsx";
import useDateStore from "@/app/store/useDateStore";

export default function DatePicker() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [orderDate, setOrderDate] = useState<string>("");
  const [orderTime, setOrderTime] = useState<string>("");

  const dropdownTriggerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverLineRef = useRef<HTMLDivElement>(null);

  const { setDate, date } = useDateStore();

  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelectOrderDate = (date: string) => {
    setOrderDate(date);
  };

  const handleSelectOrderTime = (time: string) => {
    setOrderTime(time);
  };

  const handleMouseEnter = (elementIndex: number) => {
    if (hoverLineRef.current) {
      hoverLineRef.current.style.opacity = "100%";
      hoverLineRef.current.style.top = `${62.28 * elementIndex}px`;
    }
  };

  const handlemouseLeave = (elementIndex: number) => {
    if (hoverLineRef.current) {
      hoverLineRef.current.style.top = `${62.28 * elementIndex}px`;
      hoverLineRef.current.style.opacity = "0%";
    }
  };

  useHandleClickOutside({ dropdownTriggerRef, dropdownRef, setIsDropdownOpen });

  const currentWeekDays = getCurrentWeekDays();

  useEffect(() => {
    if (orderTime && orderDate) {
      setDate(`${orderDate} at ${orderTime}`);
    }
  }, [orderTime, orderDate]);

  return (
    <div>
      <OrderNavigation
        ref={dropdownTriggerRef}
        onClick={handleClick}
        icon={Clock}
        text={date ?? "Oct 1, Tue at 12:30PM-1:30PM"}
        isDropdownOpen={isDropdownOpen}
      />
      {isDropdownOpen && (
        <DropdownContainer ref={dropdownRef} className="bottom-0">
          <div className="font-bold border-b border-b-gray p-4">
            <p className="text-base text-center">Select date and time slot</p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col min-w-24 border-r border-r-gray justify-between relative">
              <div
                ref={hoverLineRef}
                className="bg-primary h-[62px] w-1 absolute left-0 top-0 transition-all duration-300 ease-in-out"
              ></div>
              {currentWeekDays.map((weekDay, index) => (
                <div
                  key={weekDay.getTime()}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handlemouseLeave(index)}
                  onClick={() => handleSelectOrderDate(formatDate(weekDay))}
                  className={clsx(
                    "flex flex-col h-full justify-center items-center border-b border-b-gray hover:border-l-primary cursor-pointer",
                    orderDate === formatDate(weekDay)
                      ? "border-l-primary border-l-4"
                      : ""
                  )}
                >
                  {formatDate(weekDay)
                    .split(",")
                    .map((day, index) => (
                      <span key={day} className={index === 0 ? "text-xs" : ""}>
                        {day}
                      </span>
                    ))}
                </div>
              ))}
            </div>
            <div className="p-8  w-full">
              <p className="text-center text-sm mb-6">
                Order 15 minutes before any time slot
              </p>
              <div className="flex flex-col gap-8">
                {AVAILABLE_TIMES.map(({ time_of_day, intervals }) => (
                  <div>
                    <span className="inline-block mx-auto font-bold text-sm text-center mb-2 w-full">
                      {time_of_day}
                    </span>
                    <div className="flex flex-col gap-2">
                      {intervals.map((interval) => (
                        <Button
                          className="px-6 py-2"
                          onClick={() => handleSelectOrderTime(interval)}
                          key={interval}
                          size={"full"}
                          intent={
                            orderTime === interval ? "primary" : "outline"
                          }
                        >
                          {interval}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DropdownContainer>
      )}
    </div>
  );
}
