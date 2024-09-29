"use client";

import useModalStore from "@/app/store/useModalStore";
import ProductDetails from "./ProductDetails";

export default function Modal() {
  const { isOpen, closeModal } = useModalStore();

  if (isOpen) {
    return (
      <div
        onClick={() => {
          closeModal();
        }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950/20 w-full h-full grid place-content-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white max-w-[52rem]"
        >
          <ProductDetails />
        </div>
      </div>
    );
  }
}
