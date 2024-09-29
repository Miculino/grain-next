import { create } from "zustand";
import { AddressState } from "../types/store";

const useAddressStore = create<AddressState>((set) => ({
  address: {
    type: "delivery",
    location: "Select a delivery address or a Food Point",
  },
  setAddress: (address) => set({ address }),
}));

export default useAddressStore;
