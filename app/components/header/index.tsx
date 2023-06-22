"use client";
import React from "react";
import MainHeader from "./mainHeader";
import MobHeader from "./mobHeader";
import useWindowSize from "@/utils/hooks/useWindowSize";

interface HeaderProps {
  currentMenu: string;
}

const Header: React.FC<HeaderProps> = ({ currentMenu }) => {
  const { isMobile } = useWindowSize();

  if (!isMobile) return <MainHeader currentMenu={currentMenu} />;

  return <MobHeader currentMenu={currentMenu} />;
};

export default Header;
