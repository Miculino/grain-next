"use client";

// Components
import ProductDetails from "./ProductDetails";
import AddressSearch from "./AddressSearch";
import ShoppingCartMenu from "./ShoppingCartMenu";
import BundleBuilder from "./BundleBuilder";

// Zustand Stores
import useModalStore from "@/app/store/useModalStore";

// CLSX
import clsx from "clsx";
import { CATEGORIES_QUERYResult } from "@/app/types/sanity";
import { useEffect } from "react";

export default function Modal({
  menuCategories,
}: {
  menuCategories: CATEGORIES_QUERYResult;
}) {
  const { isOpen, closeModal, modalContentType } = useModalStore();

  const handleCloseModal = () => {
    closeModal();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (isOpen) {
    return (
      <div
        onClick={handleCloseModal}
        className="fixed z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950/20 grid items-center w-full h-full"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={clsx(
            "max-w-fit",
            modalContentType !== "shopping_cart" ? "mx-auto" : "ml-auto"
          )}
        >
          {modalContentType === "product_details" ? (
            <ProductDetails className="max-w-[52rem]" />
          ) : null}

          {modalContentType === "address_search" ? <AddressSearch /> : null}

          {modalContentType === "shopping_cart" ? <ShoppingCartMenu /> : null}

          {modalContentType === "bundle" ? (
            <BundleBuilder menuCategories={menuCategories} />
          ) : null}
        </div>
      </div>
    );
  }
}
