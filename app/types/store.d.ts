import { Bundle, Dish } from "./api";

interface AddressOptions {
  type: "delivery" | "pick_up";
  location: string;
}

interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalContent: Dish | null;
  setModalContent: (content: Dish) => void;
}

interface CategoryState {
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

interface AddressState {
  address: AddressOptions;
  setAddress: (address: AddressOptions) => void;
}
