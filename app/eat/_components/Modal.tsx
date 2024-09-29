"use client";

import useModalStore from "@/app/store/useModalStore";
import ProductDetails from "./ProductDetails";

export default function Modal() {
  const { isOpen, closeModal, modalContentType } = useModalStore();

  if (isOpen) {
    return (
      <div
        onClick={() => {
          closeModal();
        }}
        className="fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950/20 w-full h-full grid place-content-center"
      >
        <div onClick={(e) => e.stopPropagation()}>
          {modalContentType === "product_details" ? (
            <ProductDetails className="max-w-[52rem]" />
          ) : null}

          {modalContentType === "address_search" ? (
            <div>Look up google address</div>
          ) : null}
        </div>
      </div>
    );
  }
}
