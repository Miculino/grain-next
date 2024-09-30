import { createStore } from "zustand";
import { DateState } from "../types/store";

const useDateStore = createStore<DateState>((set) => ({
  date: "",
}));

export default useDateStore;
