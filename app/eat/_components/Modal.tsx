"use client";

import useModalStore from "@/app/store/useModalStore";
import ProductDetails from "./ProductDetails";
import AddressSearch from "./AddressSearch";

export default function Modal() {
  const { isOpen, closeModal, modalContentType } = useModalStore();

  if (isOpen) {
    return (
      <div
        onClick={() => {
          closeModal();
        }}
        className="fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950/20 grid items-center w-full h-full"
      >
        <div onClick={(e) => e.stopPropagation()}>
          {modalContentType === "product_details" ? (
            <ProductDetails className="max-w-[52rem]" />
          ) : null}

          {modalContentType === "address_search" ? <AddressSearch /> : null}
        </div>
      </div>
    );
  }
}
