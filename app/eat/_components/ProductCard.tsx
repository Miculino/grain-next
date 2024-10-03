// Components
import Tag from "./Tag";

// Next
import Image from "next/image";

// Zustand Stores
import useModalStore from "@/app/store/useModalStore";
import useShoppingCart from "@/app/store/useShoppingCart";

// CLSX
import clsx from "clsx";

// Types
import { Bundle, Dish } from "@/app/types/api";
import ProductPriceAndQuantity from "./ProductPriceAndQuantity";
import Button from "./Button";
import useBundleStore from "@/app/store/useBundleStore";

export default function ProductCard({
  product,
  className,
  type,
}: {
  product: Dish | Bundle;
  className?: string;
  type: "dish" | "bundle";
}) {
  const { openModal, setModalContentType } = useModalStore();
  const { shoppingCart } = useShoppingCart();
  const { selectBundle, selectedBundle } = useBundleStore();

  const currentProduct = shoppingCart.find(
    (shoppingCartProduct) => shoppingCartProduct.name === product.name
  );

  const handleBuildBundleModal = () => {
    selectBundle(product as Bundle);
    setModalContentType("bundle");
    openModal();
  };

  console.log(selectedBundle);

  return (
    <div
      onClick={() => {
        if (type === "dish") {
          setModalContentType("product_details");
          openModal();
        }
      }}
      className={clsx(
        "border-[1px] border-[#dadada] cursor-pointer flex rounded-sm",
        className
      )}
    >
      <div className="flex-1 relative">
        {currentProduct && Boolean(currentProduct.quantity) && (
          <ItemAddedOverlay quantity={currentProduct.quantity} />
        )}
        <Image
          className="w-full"
          src={
            (product.thumbnail &&
              product.thumbnail.asset &&
              product.thumbnail.asset.url) ??
            "loading"
          }
          alt={product.name ? product.name : ""}
          width={500}
          height={500}
        />
      </div>
      <div className="bg-white p-4 flex flex-1 flex-col h-full">
        {type === "dish" && "served" in product ? (
          <Tag>{product.served}</Tag>
        ) : null}

        <h3 className="mt-2 font-bold">{product?.name?.toLocaleUpperCase()}</h3>
        <p className="mt-1 text-xs">{product.overview}</p>

        <div className="text-xs text-[#999] mt-3 h-[60px]">
          {type === "dish" && "tags" in product
            ? product.tags &&
              product.tags.map((tag) => tag.toLowerCase().trim()).join(", ")
            : null}
        </div>

        {type === "dish" ? (
          <ProductPriceAndQuantity
            targetProductName={product.name ?? "Missing name"}
            targetProductPrice={product.price ?? 0}
          />
        ) : (
          <div className="flex items-center justify-between mt-auto">
            <span>${product.price}</span>
            <Button onClick={handleBuildBundleModal} className="py-1 px-6">
              Build bundle
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function ItemAddedOverlay({ quantity }: { quantity: number }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[#fecc07b3] grid place-content-center font-bold">
      <p>
        {quantity} item{quantity > 1 ? "s" : ""} added to cart
      </p>
    </div>
  );
}
