import useShoppingCart from "@/app/store/useShoppingCart";
import { ShoppingCartProductProps } from "@/app/types/components";
import { Trash2 } from "lucide-react";

export default function ShoppingCartProduct({
  name,
  total_price,
  quantity,
}: ShoppingCartProductProps) {
  const { removeProduct } = useShoppingCart();

  const handleRemoveShoppingCartProduct = () => {
    removeProduct(name);
  };

  return (
    <div className="flex items-start justify-between border-b border-b-light-gray p-4">
      <div>
        <div className="flex items-start">
          <p className="text-sm font-bold">
            {quantity} x {name}
          </p>
        </div>
        <span className="text-sm">${total_price.toFixed(2)}</span>
      </div>
      <div>
        <Trash2
          onClick={handleRemoveShoppingCartProduct}
          className="cursor-pointer"
          size={14}
        />
      </div>
    </div>
  );
}
