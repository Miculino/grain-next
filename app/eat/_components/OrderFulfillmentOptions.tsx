import { useState } from "react";
import OrderNavigation from "./OrderNavigation";
import useAddressStore from "@/app/store/useAddressStore";
import Autocomplete from "react-google-autocomplete";
import Button from "./Button";

export default function OrderFulfillmentOptions() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isSearchEnabled, setIsSearchEnabled] = useState<boolean>(false);
  const [selectedPlace, setSelectedPlace] = useState<string>("");
  const [selectedAddressType, setSelectedAddressType] = useState<string>("");

  const { deliveryAddress, setDeliveryAddress } = useAddressStore();

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
    setIsSearchEnabled(false); // Reset search state when toggling the dropdown
  };

  const handleToggleSearch = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsSearchEnabled((prev) => !prev);
  };

  const handlePlaceSelected = (place: { formatted_address: string }) => {
    if (place) {
      setSelectedPlace(place.formatted_address);
    }
  };

  const handleAddDeliveryAddress = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (selectedPlace) {
      // Set the selected address type based on the dropdown state
      setDeliveryAddress(selectedPlace);
      setIsSearchEnabled(false);
      setIsDropdownOpen(false);
      // Toggle the address type based on previous selection
      setSelectedAddressType((prev) =>
        prev === "pick_up" ? "delivery" : "pick_up"
      );
    }
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
          isDropdownOpen={isDropdownOpen}
        />
        {isDropdownOpen && (
          <div className="shadow-sm">
            {/* Show Delivery Address when Pickup is selected */}
            {selectedAddressType === "pick_up" && deliveryAddress && (
              <div className="bg-white border-b border-b-gray p-2 cursor-pointer hover:font-bold hover:bg-[#f7f7f7]">
                <p className="text-xs">{deliveryAddress}</p>
              </div>
            )}

            {/* Search for new address */}
            <div
              onClick={handleToggleSearch}
              className="bg-white p-2 cursor-pointer"
            >
              {!isSearchEnabled ? (
                <p className="text-xs underline">Add new address</p>
              ) : (
                <div onClick={(e) => e.stopPropagation()}>
                  <Autocomplete
                    apiKey="AIzaSyDz9wEqFecagZ1tGabdzQzLUEE7JHdbMSs"
                    options={{
                      componentRestrictions: { country: "SG" }, // Restrict to Singapore
                      types: ["address"], // Specify types to get address locations
                    }}
                    placeholder="Please enter three or more characters"
                    onPlaceSelected={handlePlaceSelected}
                    style={{
                      width: "100%",
                      padding: "8px 8px",
                      border: "1px solid #bfbfbf",
                    }} // Optional: Style for better UX
                  />
                  <Button
                    onClick={handleAddDeliveryAddress}
                    disabled={!selectedPlace}
                    intent={selectedPlace ? "primary" : "disabled"}
                    className="py-2"
                    size={"full"}
                  >
                    Add address
                  </Button>
                </div>
              )}
            </div>

            {/* Show Pick Up Point when Delivery is selected */}
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
