import Image from "next/image";
import React from "react";
import Tag from "./Tag";
import Button from "./Button";
import clsx from "clsx";
import useModalStore from "@/app/store/useModalStore";
import { Bundle, Dish } from "@/app/types/api";

export default function ProductCard({
  product,
  className,
  type,
}: {
  product: Dish | Bundle;
  className?: string;
  type: "dish" | "bundle";
}) {
  const { openModal } = useModalStore();

  // console.log(product);

  // const { thumbnail, overview, name, price } = product;

  return (
    <div
      onClick={() => openModal()}
      className={clsx("border-[1px] border-[#dadada] flex", className)}
    >
      <div className="flex-1">
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
              product.tags.map((tag) => tag.toLowerCase()).join(", ")
            : null}
        </div>

        <div className="justify-between flex items-center mt-auto">
          <b>{product.price && product.price.toFixed(2)}</b>
          <Button>Add</Button>
        </div>
      </div>
    </div>
  );
}
