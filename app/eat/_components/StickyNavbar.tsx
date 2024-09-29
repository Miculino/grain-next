import Container from "./Container";
import Button from "./Button";
import ShoppingCart from "../icons/ShoppingCart";
import AddressPicker from "./AddressPicker";

export default function StickyNavbar() {
  return (
    <div className="sticky top-0 bg-white py-4 z-10">
      <Container className="justify-between items-center">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <AddressPicker />
          <div className="min-w-[50%]">Select date and time slot</div>
        </div>

        <Button>
          <ShoppingCart />
          <span>$0.00</span>
        </Button>
      </Container>
    </div>
  );
}
