"use client";

// Core React
import { useEffect } from "react";

// Components
import StickyNavbar from "./_components/StickyNavbar";

// Zustand Stores
import useModalStore from "../store/useModalStore";

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
