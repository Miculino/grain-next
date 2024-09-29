import { create } from "zustand";
import { ModalState } from "../types/store";

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  modalContent: null,
  modalContentType: null,
  setModalContent: (product) => set({ modalContent: product }),
  setModalContentType: (type) => set({ modalContentType: type }),
}));

export default useModalStore;
