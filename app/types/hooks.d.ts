import { SetStateAction } from "react";

interface HandleClickOutsideHookProps {
  dropdownTriggerRef: React.RefObject<HTMLDivElement>;
  dropdownRef: React.RefObject<HTMLDivElement>;
  setIsDropdownOpen: React.Dispatch<SetStateAction<boolean>>;
}
