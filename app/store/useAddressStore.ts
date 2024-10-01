// Zustand
import { create } from "zustand";

// Constants
import { DEFAULT_FOOD_PICK_UP_ADDRESS } from "../lib/constants";

// Types
import { AddressState } from "../types/store";

const useAddressStore = create<AddressState>((set) => ({
  deliveryAddress: "",
  pickUpAddress: DEFAULT_FOOD_PICK_UP_ADDRESS,
  selectedAddressType: "delivery",
  setSelectedAddressType: (selectedAddressType) => set({ selectedAddressType }),
  setDeliveryAddress: (deliveryAddress) => set({ deliveryAddress }),
  setPickUpAddress: (pickUpAddress) => set({ pickUpAddress }),
}));

export default useAddressStore;
