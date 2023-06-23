"use client";
import React from "react";
import { usePathname } from "next/navigation";
import MainHeader from "./mainHeader";
import MobHeader from "./mobHeader";
import useWindowSize from "@/utils/hooks/useWindowSize";

const Header: React.FC = () => {
  const { isMobile } = useWindowSize();
  const pathname = usePathname();
  const currentMenu = pathname === "/" ? "/home" : pathname;

  if (!isMobile) return <MainHeader currentMenu={currentMenu} />;

  return <MobHeader currentMenu={currentMenu} />;
};

export default Header;
