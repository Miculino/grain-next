import Container from "./Container";
import Button from "./Button";
import ShoppingCart from "../icons/ShoppingCart";
import AddressPicker from "./AddressPicker";

export default function StickyNavbar() {
  return (
    <div className="sticky top-0 bg-white py-4 z-10">
      <Container className="justify-between items-center">
        <AddressPicker />
        <div>Select date and time slot</div>

        <Button>
          <ShoppingCart />
          <span>$0.00</span>
        </Button>
        <div className="bg-white shadow-sm absolute bottom-0 translate-y-full">
          pdsadsa
        </div>
      </Container>
    </div>
  );
}
