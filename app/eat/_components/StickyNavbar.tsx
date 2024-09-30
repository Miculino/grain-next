import Container from "./Container";
import Button from "./Button";
import ShoppingCart from "../icons/ShoppingCart";
import AddressPicker from "./AddressPicker";
import DatePicker from "./DatePicker";
import useModalStore from "@/app/store/useModalStore";

export default function StickyNavbar() {
  const { openModal, setModalContentType } = useModalStore();

  return (
    <div className="sticky top-0 bg-white py-4 z-10">
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
          <span>$0.00</span>
        </Button>
      </Container>
    </div>
  );
}
