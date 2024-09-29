import { create } from "zustand";
import { AddressState } from "../types/store";
import { DEFAULT_FOOD_PICK_UP_ADDRESS } from "../lib/constants";

const useAddressStore = create<AddressState>((set) => ({
  address: {
    type: "delivery",
    location: "Please add an address first.",
  },
  setAddress: (address) => set({ address }),
}));

export default useAddressStore;
