"use client";

import { CldImage } from "next-cloudinary";

export default function ContactList() {
  return (
    <div className="flex flex-col items-center my-9">
      <h1 className=" text-center font-bold text-2xl md:text-3xl">
        Anda Juga Dapat Menghubungi Kami Melalui:
      </h1>

      <div className="flex flex-col gap-8 mt-6 lg:mt-10 md:flex-row md:gap-16 lg:gap-20">
        <div className="flex flex-col items-center">
          <a
            href="https://wa.me/6282115459797"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CldImage
              format="svg"
              src="icons/ic_phone"
              alt="phone icon"
              width={60}
              height={60}
              className="md:w-20 lg:w-24"
            />
          </a>
          <h1 className="lg:text-xl mt-2">HP/SMS/WA</h1>
          <p className="font-light font-openSans lg:text-xl">0821-1545-9797</p>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="mailto:lumatpublicrelations@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CldImage
              format="svg"
              src="icons/ic_mail"
              alt="email icon"
              width={60}
              height={60}
              className="md:w-20 lg:w-24"
            />
          </a>
          <h1 className="lg:text-xl mt-2">EMAIL</h1>
          <p className="font-light font-openSans lg:text-xl">
            lumatpublicrelations@gmail.com
          </p>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="https://www.instagram.com/lumatofficial/"
            className="hover:cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CldImage
              format="svg"
              src="icons/ic_instagram-2"
              alt="phone icon"
              width={60}
              height={60}
              className="md:w-20 lg:w-24"
            />
          </a>
          <h1 className="lg:text-xl mt-2">INSTAGRAM</h1>
          <p className="font-light font-openSans lg:text-xl">@lumatofficial</p>
        </div>
      </div>
    </div>
  );
}
