import { Dish } from "./api";
import { BundleCategory, ShoppingCartProduct } from "./components";
import { CATEGORIES_QUERYResult } from "./sanity";

interface AddressOptions {
  type: "delivery" | "pick_up";
  location: string;
}

type ContentType =
  | "product_details"
  | "bundle"
  | "address_search"
  | "shopping_cart"
  | null;

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
  deliveryAddress: string;
  pickUpAddress: string;
  selectedAddressType: "delivery" | "pick_up";
  setSelectedAddressType: (selectedAddressType: "delivery" | "pick_up") => void;
  setDeliveryAddress: (deliveryAddress: string) => void;
  setPickUpAddress: (pickUpAddress: string) => void;
}

interface DateState {
  setDate: (date: string) => void;
  date: string;
}

interface ShoppingCartState {
  shoppingCart: ShoppingCartProduct[];
  addProduct: (product: ShoppingCartProduct) => void;
  removeProduct: (product_name: string) => void;
  updateProductQuantity: (product_name: string, quantity: number) => void;
}

interface BundleState {
  bundleCategories: BundleCategory[];
  setBundleCategories: (categories: CATEGORIES_QUERYResult) => void;
}
