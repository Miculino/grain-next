// Core React
import { useState } from "react";

// Components
import Button from "./Button";

// Zustand Stores
import useModalStore from "@/app/store/useModalStore";
import useAddressStore from "@/app/store/useAddressStore";

// React Google Autocomplete
import Autocomplete from "react-google-autocomplete";

// Icons
import Cross from "../icons/Cross";

export default function AddressSearch() {
  const [selectedPlace, setSelectedPlace] = useState<string>("");

  const { closeModal } = useModalStore();
  const { setDeliveryAddress, setSelectedAddressType } = useAddressStore();

  const handlePlaceSelected = (place: { formatted_address: string }) => {
    console.log(place);
    if (place) {
      setSelectedPlace(place.formatted_address);
    }
  };

  const handleAddAddress = () => {
    if (selectedPlace) {
      setDeliveryAddress(selectedPlace);
      setSelectedAddressType("delivery");
      closeModal();
    }
  };

  const handleClick = () => {
    closeModal();
  };

  return (
    <div className="bg-white w-[500px] mx-auto p-6 flex flex-col">
      <Cross className="self-end cursor-pointer" onClick={handleClick} />
      <span className="font-bold text-lg inline-block mb-2">
        Add a new address
      </span>
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
        onClick={handleAddAddress}
        disabled={!Boolean(selectedPlace)}
        intent={selectedPlace ? "primary" : "disabled"}
        className="mt-6 self-end px-6 py-2"
      >
        Add address
      </Button>
    </div>
  );
}
