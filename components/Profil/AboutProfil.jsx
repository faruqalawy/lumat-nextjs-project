'use client';

import { CldImage } from "next-cloudinary";

import Button from "../Other/Button";
import dataProfil from "@/data/profil.json";

export default function AboutProfil() {
  return (
    <div className="my-8 md:mt-12 lg:mt-16">
    <div className=" flex flex-col lg:grid lg:grid-cols-2 gap-6">
      <CldImage src="images/main-image-profil" alt="profil-main-image" priority width={950} height={750} />
      <div className="flex flex-col mt-1 md:mt-8 lg:mt-0">
        <h1 className=" md:mb-3 text-2xl md:text-4xl text-orange-light font-bold">
          TENTANG KAMI
        </h1>
        <p className=" md:text-xl font-openSans font-light">
          {dataProfil.description}
        </p>
        <Button
          isArrow
          text="LIHAT PRODUK KAMI"
          path="/product"
          className="mt-2.5 md:mt-5 py-5"
        />
      </div>
    </div>
  </div>
  );
}
