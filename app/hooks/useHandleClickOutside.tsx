// Core React
import { useEffect } from "react";

// Types
import { HandleClickOutsideHookProps } from "../types/hooks";

export default function useHandleClickOutside({
  dropdownTriggerRef,
  dropdownRef,
  setIsDropdownOpen,
}: HandleClickOutsideHookProps) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownTriggerRef.current &&
        !dropdownTriggerRef.current.contains(event.target as Node) &&
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
}
