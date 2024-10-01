import Image from "next/image";
import React, { SetStateAction, useState } from "react";
import Tag from "./Tag";
import Button from "./Button";
import clsx from "clsx";
import useModalStore from "@/app/store/useModalStore";
import { Bundle, Dish } from "@/app/types/api";
import useShoppingCart from "@/app/store/useShoppingCart.store";

export default function ProductCard({
  product,
  className,
  type,
}: {
  product: Dish | Bundle;
  className?: string;
  type: "dish" | "bundle";
}) {
  const { openModal, setModalContent, setModalContentType } = useModalStore();
  const { addProduct, updateProductQuantity, shoppingCart } = useShoppingCart();

  const currentProduct = shoppingCart.find(
    (shoppingCartProduct) => shoppingCartProduct.name === product.name
  );

  const handleAddItemToShoppingCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addProduct({
      name: product.name as string,
      price: product.price as number,
      quantity: 1,
      total_price: product.price as number,
    });
  };

  const handleIncreaseProductQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateProductQuantity(product.name as string, 1);
  };

  const handleDecreaseProductQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateProductQuantity(product.name as string, -1);
  };

  return (
    <div
      onClick={() => {
        if (type === "dish") {
          setModalContentType("product_details");
          setModalContent(product as Dish);
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

        <div className="justify-between flex items-center mt-auto">
          <b>${product.price && product.price.toFixed(2)}</b>
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
      </div>
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

function ItemAddedOverlay({ quantity }: { quantity: number }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[#fecc07b3] grid place-content-center font-bold">
      <p>
        {quantity} item{quantity > 1 ? "s" : ""} added to cart
      </p>
    </div>
  );
}
