"use client";

import { CldImage } from "next-cloudinary";
import { useContext } from "react";

import { SmallNavContext } from "@/context/SmallNavContext";

export default function WhatsappButton() {
  const { isSmallNavOpen } = useContext(SmallNavContext);
  return (
    <a
      href="https://wa.me/6282115459797"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className={`flex items-center gap-2 rounded-full p-3 bg-green-whatsapp hover:bg-green-whatsapp-dark right-5 md:right-8 lg:right-10 bottom-5 md:bottom-6 lg:bottom-10  ${
          isSmallNavOpen ? "" : "fixed"
        }`}
      >
        {" "}
        {/* Apply conditional class based on isOpen */}
        <CldImage
          src="icons/ic_whatsapp"
          alt="WaIcon"
          className="w-5"
          width={20}
          height={21}
        />
        <h1 className="text-white">PESAN SEKARANG</h1>
      </button>
    </a>
  );
}
