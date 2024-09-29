import { create } from "zustand";
import { AddressState } from "../types/store";
import { DEFAULT_FOOD_PICK_UP_ADDRESS } from "../lib/constants";

const useAddressStore = create<AddressState>((set) => ({
  deliveryAddress: "",
  pickUpAddress: DEFAULT_FOOD_PICK_UP_ADDRESS,
  selectedAddressType: "delivery",
  setSelectedAddressType: (selectedAddressType) => set({ selectedAddressType }),
  setDeliveryAddress: (deliveryAddress) => set({ deliveryAddress }),
  setPickUpAddress: (pickUpAddress) => set({ pickUpAddress }),
}));

export default useAddressStore;
