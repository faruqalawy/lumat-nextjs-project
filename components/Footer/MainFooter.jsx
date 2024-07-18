"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import Logo from "@/public/icons/logo-lumat.svg";
import Instagram from "@/public/icons/ic_instagram.svg";
import Tiktok from "@/public/icons/ic_tiktok.svg";
import Shopee from "@/public/icons/ic_shopee.svg";
import Tokopedia from "@/public/icons/ic_tokopedia.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function MainFooter() {
  const [year, setYear] = useState(0);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // this function is used to get dynamic year for the footer
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  useEffect(() => {
    setYear(getCurrentYear());
  }, []);

  return (
    <div className="bg-grey w-full font-nunito text-white">
      <button
        className="flex flex-col items-center pt-4 w-fit mx-auto cursor-pointer"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faChevronUp} style={{ width: '30px', height: '30px' }}/>
        <p>Back to Top</p>
      </button>

      <div className=" grid grid-rows-6 grid-cols-6 gap-1 md:gap-2 lg:gap-3 py-5 text-base custom-display">
        <div className="col-span-6 row-span-2 md:row-span-3 lg:row-span-6 lg:col-span-2 mx-auto md:mb-8">
          <Image src={Logo} alt="brand-logo" className="md:w-[350px]" />
          <h1 className="mt-1 text-base md:text-[26px]">
            Lumbung Makanan Nikmat
          </h1>
        </div>

        <div className="col-span-6 row-span-2 md:col-span-3 md:row-span-3 lg:row-span-6 lg:col-span-2">
          <h1 className="text-orange border-b pb-1 font-bold text-xl">
            HUBUNGI KAMI
          </h1>
          <div className="pt-2 flex flex-col gap-2">
            <p>
              <span className="font-bold">Alamat:</span> Lumat
            </p>
            <p>
              Jl. Guntur Sari No. 15, Haurpanggung, Kecamatan Garut Kota,
              Kabupaten Garut
            </p>
            <p>
              <a
                href="https://wa.me/6282115459797"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-bold">No WA:</span> 0821-1545-9797
              </a>
            </p>
            <p>
              <span className="font-bold">Email:</span>
              <a
                href="mailto:lumatpublicrelations@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                lumatpublicrelations@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="col-span-6 row-span-2 md:col-span-3 md:row-span-3 lg:row-span-6 lg:col-span-2 grid grid-rows-2 mt-2 sm:mt-0">
          <div>
            <h1 className="text-orange border-b pb-1 font-bold text-xl">
              MEDIA SOSIAL
            </h1>
            <div className="flex gap-2 pt-2">
              <a
                href="https://www.instagram.com/lumatofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Instagram} alt="instagram" />
              </a>
              <a
                href="https://www.tiktok.com/@lumatofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Tiktok} alt="tiktok" />
              </a>
            </div>
          </div>
          <div className="mt-2.5">
            <h1 className="text-orange border-b pb-1 font-bold text-xl">
              ONLINE SHOP
            </h1>
            <div className="flex gap-3 pt-2">
              <a
                href="http://shopee.co.id/lumatofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Shopee} alt="shopee" />
              </a>
              <a
                href="https://tokopedia.link/lumatofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Tokopedia} alt="tokopedia" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center font-barlow text-sm md:text-base py-8 border-t">
        <h1>Copyright © Lumat. {year}. All rights reserved.</h1>
      </div>
    </div>
  );
}
