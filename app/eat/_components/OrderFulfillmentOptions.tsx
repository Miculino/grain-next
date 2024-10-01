import { useState } from "react";
import OrderNavigation from "./OrderNavigation";
import useAddressStore from "@/app/store/useAddressStore";
import useModalStore from "@/app/store/useModalStore";

export default function OrderFulfillmentOptions() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const { deliveryAddress, selectedAddressType, setSelectedAddressType } =
    useAddressStore();
  const { setModalContentType, openModal } = useModalStore();

  const handleDropdownToggle = () => {
    setSelectedAddressType("delivery");
    setIsDropdownOpen((prev) => !prev);
  };

  const handleModalOpen = () => {
    setModalContentType("address_search");
    // openModal();
  };

  return (
    <div className="bg-[#EAE6E1] px-4 py-4">
      <div className="flex gap-1 flex-col">
        <p className="mb-1 text-sm">Ready to rock and roll!</p>
        <div className="w-full h-1 rounded-md bg-green-600"></div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm">Pick up from Food Point</p>
          <span className="text-sm">FREE</span>
        </div>
        <OrderNavigation
          onClick={handleDropdownToggle}
          text="Or get door-to-door delivery"
          small
          isDropdownOpen={isDropdownOpen}
        />
        {isDropdownOpen &&
          (selectedAddressType === "delivery" ? (
            <div className="shadow-sm">
              <div className="bg-white border-b border-b-gray p-2 cursor-pointer hover:font-bold hover:bg-[#f7f7f7]">
                <p className="text-xs">{deliveryAddress}</p>
              </div>
              <div
                onClick={handleModalOpen}
                className="bg-white p-2 cursor-pointer"
              >
                <p className="text-xs underline">Add new address</p>
              </div>
            </div>
          ) : (
            <div>
              <p>pick up point</p>
            </div>
          ))}
      </div>
    </div>
  );
}
