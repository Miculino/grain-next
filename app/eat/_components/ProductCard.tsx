import Image from "next/image";
import React from "react";
import Tag from "./Tag";
import Button from "./Button";
import clsx from "clsx";

export default function DishCard({
  product,
  className,
  type,
}: {
  product: Dish | Bundle;
  className?: string;
  type: "dish" | "bundle";
}) {
  const { thumbnail, overview, name, price } = product;

  return (
    <div className={clsx("border-[1px] border-[#dadada] flex", className)}>
      <div className="flex-1">
        <Image
          className="w-full"
          src={thumbnail}
          alt={name}
          width={500}
          height={500}
        />
      </div>
      <div className="bg-white p-4 flex flex-1 flex-col h-full">
        {type === "dish" && "served" in product ? (
          <Tag>{product.served}</Tag>
        ) : null}

        <h3 className="mt-2 font-bold">{name.toLocaleUpperCase()}</h3>
        <p className="mt-1 text-xs">{overview}</p>

        <div className="text-xs text-[#999] mt-3 h-[60px]">
          {type === "dish" && "tags" in product
            ? product.tags.map((tag) => tag.toLowerCase()).join(", ")
            : null}
        </div>

        <div className="justify-between flex items-center mt-auto">
          <b>{price}</b>
          <Button>Add</Button>
        </div>
      </div>
    </div>
  );
}
