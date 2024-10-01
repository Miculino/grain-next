import { useState } from "react";
import OrderNavigation from "./OrderNavigation";
import useAddressStore from "@/app/store/useAddressStore";
import Autocomplete from "react-google-autocomplete";
import Button from "./Button";

export default function OrderFulfillmentOptions() {
  const [dropdownState, setDropdownState] = useState({
    isOpen: false,
    isSearchEnabled: false,
  });
  const [selectedAddressType, setSelectedAddressType] = useState<string>("");
  const { deliveryAddress, setDeliveryAddress } = useAddressStore();

  const handleDropdownToggle = () => {
    setDropdownState((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
      isSearchEnabled: false,
    }));
  };

  const handleToggleSearch = (event: React.MouseEvent) => {
    event.stopPropagation();
    setDropdownState((prev) => ({
      ...prev,
      isSearchEnabled: !prev.isSearchEnabled,
    }));
  };

  const handlePlaceSelected = (place: { formatted_address: string }) => {
    if (place) {
      setDeliveryAddress(place.formatted_address);
    }
  };

  const handleAddDeliveryAddress = (event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedAddressType(
      selectedAddressType === "pick_up" ? "delivery" : "pick_up"
    );
    setDropdownState({
      ...dropdownState,
      isSearchEnabled: false,
      isOpen: false,
    });
  };

  return (
    <div className="bg-[#EAE6E1] px-4 py-4">
      <div className="flex gap-1 flex-col">
        <p className="mb-1 text-sm">Ready to rock and roll!</p>
        <div className="w-full h-1 rounded-md bg-green-600"></div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm">
            {selectedAddressType === "delivery"
              ? "Delivery fee"
              : "Pick up from Food Point"}
          </p>
          <span className="text-sm">FREE</span>
        </div>
        <OrderNavigation
          onClick={handleDropdownToggle}
          text={
            selectedAddressType === "pick_up"
              ? "Or get door-to-door delivery"
              : "Pick up for free at the nearest Food Point"
          }
          small
          isDropdownOpen={dropdownState.isOpen}
        />
        {dropdownState.isOpen && (
          <div className="shadow-sm">
            {selectedAddressType === "pick_up" && deliveryAddress && (
              <div className="bg-white border-b border-b-gray p-2 cursor-pointer hover:font-bold hover:bg-[#f7f7f7]">
                <p className="text-xs">{deliveryAddress}</p>
              </div>
            )}
            <div
              onClick={handleToggleSearch}
              className="bg-white p-2 cursor-pointer"
            >
              {!dropdownState.isSearchEnabled ? (
                <p className="text-xs underline">Add new address</p>
              ) : (
                <div onClick={(e) => e.stopPropagation()}>
                  <Autocomplete
                    apiKey="AIzaSyDz9wEqFecagZ1tGabdzQzLUEE7JHdbMSs"
                    options={{
                      componentRestrictions: { country: "SG" },
                      types: ["address"],
                    }}
                    placeholder="Please enter three or more characters"
                    onPlaceSelected={handlePlaceSelected}
                    style={{
                      width: "100%",
                      padding: "8px 8px",
                      border: "1px solid #bfbfbf",
                    }}
                  />
                  <Button
                    onClick={handleAddDeliveryAddress}
                    disabled={!deliveryAddress}
                    intent={deliveryAddress ? "primary" : "disabled"}
                    className="py-2"
                    size={"full"}
                  >
                    Add address
                  </Button>
                </div>
              )}
            </div>
            {selectedAddressType === "delivery" && (
              <div className="bg-white p-2">
                <p className="text-xs">Pick up point</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
