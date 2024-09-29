import { Bundle, Dish } from "./api";

interface AddressOptions {
  type: "delivery" | "pick_up";
  location: string;
}

type ContentType = "product_details" | "bundle" | "address_search" | null;

interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalContent: Dish | null;
  modalContentType: ContentType;
  setModalContent: (content: Dish) => void;
  setModalContentType: (type: ContentType) => void;
}

interface CategoryState {
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

interface AddressState {
  address: AddressOptions;
  setAddress: (address: AddressOptions) => void;
}
