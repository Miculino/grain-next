import { create } from "zustand";
import { DateState } from "../types/store";

const useDateStore = create<DateState>((set) => ({
  setDate: (date) => set({ date }),
  date: "Select an address first",
}));

export default useDateStore;
