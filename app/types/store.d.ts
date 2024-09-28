import { Bundle, Dish } from "./api";

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
