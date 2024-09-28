interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

interface CategoryState {
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}
