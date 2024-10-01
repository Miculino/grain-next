import { create } from "zustand";
import { DateState } from "../types/store";

const useDateStore = create<DateState>((set) => ({
  setDate: (date) => set({ date }),
  date: "Select a time and date first",
}));

export default useDateStore;
