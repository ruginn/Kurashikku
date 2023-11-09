"use client";

import { useEffect, useState } from "react";
import ReservationModal from "../modal/ReservationModal";


export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <>
        <ReservationModal />
    </>
  );
};