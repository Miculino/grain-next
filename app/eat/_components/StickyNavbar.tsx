import Container from "./Container";
import Button from "./Button";
import ShoppingCart from "../icons/ShoppingCart";
import AddressPicker from "./AddressPicker";
import DatePicker from "./DatePicker";
import useModalStore from "@/app/store/useModalStore";
import useShoppingCart from "@/app/store/useShoppingCart";
import calculateTotalShoppingCartPrice from "@/app/utils/calculateTotalShoppingCartPrice";

export default function StickyNavbar() {
  const { openModal, setModalContentType } = useModalStore();
  const { shoppingCart } = useShoppingCart();

  const totalShoppingCartPrice = calculateTotalShoppingCartPrice(shoppingCart);

  return (
    <div className="sticky top-0 bg-white py-4 z-10 shadow-sm">
      <Container className="justify-between items-center">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <AddressPicker />
          <DatePicker />
        </div>

        <Button
          onClick={() => {
            openModal();
            setModalContentType("shopping_cart");
          }}
          className="px-6 py-2"
        >
          <ShoppingCart />
          <span>${totalShoppingCartPrice.toFixed(2)}</span>
        </Button>
      </Container>
    </div>
  );
}
