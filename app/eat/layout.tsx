"use client";

import { useEffect } from "react";
import useModalStore from "../store/useModalStore";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { closeModal } = useModalStore();

  useEffect(() => {
    const handleCloseModalOnEscape = () => {
      closeModal();
    };

    window.addEventListener("keydown", handleCloseModalOnEscape);

    return () => {
      window.removeEventListener("keydown", handleCloseModalOnEscape);
    };
  }, []);

  return <div>{children}</div>;
}
