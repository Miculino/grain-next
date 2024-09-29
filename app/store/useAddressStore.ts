import { create } from "zustand";
import { AddressState } from "../types/store";

const useAddressStore = create<AddressState>((set) => ({
  address: {
    type: "delivery",
    location:
      "Grain's kitchen at 5 Burn Road #05-01 (entrance along Harrison Road)",
  },
  setAddress: (address) => set({ address }),
}));

export default useAddressStore;
