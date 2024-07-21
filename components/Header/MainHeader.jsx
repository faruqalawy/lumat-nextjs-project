"use client";

// This component is used to display either HomeHeader or DefaultHeader
// depending on the route. It is used in all pages
import HomeHeader from "./HomeHeader";
import DefaultHeader from "./DefaultHeader";

import { usePathname } from "next/navigation";

export default function MainHeader() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <HomeHeader />;
  } else {
    return <DefaultHeader />;
  }
}
