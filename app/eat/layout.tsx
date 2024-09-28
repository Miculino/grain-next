"use client";

import { useEffect } from "react";
import useModalStore from "../store/useModalStore";
import StickyNavbar from "./_components/StickyNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { closeModal } = useModalStore();

  useEffect(() => {
    const handleCloseModalOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleCloseModalOnEscape);

    return () => {
      window.removeEventListener("keydown", handleCloseModalOnEscape);
    };
  }, []);

  return (
    <>
      <StickyNavbar />

      <main>{children}</main>
    </>
  );
}
