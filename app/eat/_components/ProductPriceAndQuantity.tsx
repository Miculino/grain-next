// Components
import Button from "./Button";

// Zustand Stores
import useShoppingCart from "@/app/store/useShoppingCart";

export default function ProductPriceAndQuantity({
  targetProductName,
  targetProductPrice,
}: {
  targetProductName: string;
  targetProductPrice: number;
}) {
  const { addProduct, updateProductQuantity, shoppingCart } = useShoppingCart();

  const currentProduct = shoppingCart.find(
    (shoppingCartProduct) => shoppingCartProduct.name === targetProductName
  );

  const handleAddItemToShoppingCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addProduct({
      name: targetProductName as string,
      price: targetProductPrice as number,
      quantity: 1,
      total_price: targetProductPrice as number,
    });
  };

  const handleIncreaseProductQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateProductQuantity(targetProductName as string, 1);
  };

  const handleDecreaseProductQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateProductQuantity(targetProductName as string, -1);
  };

  return (
    <div className="justify-between flex items-center mt-auto w-full">
      <b>${targetProductPrice.toFixed(2)}</b>
      {currentProduct?.quantity >= 1 ? (
        <QuantityControl
          handleIncreaseProductQuantity={handleIncreaseProductQuantity}
          handleDecreaseProductQuantity={handleDecreaseProductQuantity}
          quantity={currentProduct.quantity}
        />
      ) : (
        <Button onClick={handleAddItemToShoppingCart} className="px-6 py-2">
          Add
        </Button>
      )}
    </div>
  );
}

function QuantityControl({
  quantity,
  handleIncreaseProductQuantity,
  handleDecreaseProductQuantity,
}: {
  quantity: number;
  handleIncreaseProductQuantity: (event: React.MouseEvent) => void;
  handleDecreaseProductQuantity: (event: React.MouseEvent) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={handleDecreaseProductQuantity}
        intent={"outline"}
        className="py-2 px-4"
      >
        -
      </Button>
      <span className="w-8 text-center">{quantity}</span>
      <Button onClick={handleIncreaseProductQuantity} className="py-2 px-4">
        +
      </Button>
    </div>
  );
}
