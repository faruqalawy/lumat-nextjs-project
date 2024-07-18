'use client';

// This header component is used in all pages but the home page
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Image from "next/image";
import NavBar from "./NavBar";
import backgroundImage from "@/public/images/header-background.webp";

export default function DefaultHeader() {
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState(convertPathToTitle(pathname))

  useEffect(() => {
    setPageTitle(convertPathToTitle(pathname))
  },[pathname])

  function convertPathToTitle(path) {
    // Remove leading slash and split path into segments
    const segments = path.replace(/^\//, '').split('/');
    // Capitalize first letter of each segment and join them with spaces
    const title = segments.map(segment => segment.charAt(0).toUpperCase() + segment.slice(1)).join(' ');
    return title;
  }

  return (
    <div className="relative max-w-full">
      <Image
        src={backgroundImage}
        alt="Background"
        priority
        fill
        style={{ objectFit: "cover", objectPosition: "center", zIndex: -1 }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
          zIndex: -1,
        }}
      />
      <div className="custom-display pb-9 md:pb-20 lg:pb-28">
        <NavBar />
        <h1 className="text-center text-white font-extrabold text-3xl sm:text-5xl md:text-6xl xl:text-7xl">
          {pageTitle}
        </h1>
      </div>
    </div>
  );
}
