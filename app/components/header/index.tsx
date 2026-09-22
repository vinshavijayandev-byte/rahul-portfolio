"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import MainHeader from "./mainHeader";
import MobHeader from "./mobHeader";
import useWindowSize from "@/utils/hooks/useWindowSize";

const Header: React.FC = () => {
  const { isMobile } = useWindowSize();
  const pathname = usePathname();

  const currentMenu = pathname === "/" ? "/home" : pathname;

  const [showHeader, setShowHeader] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollY.current;

      // Always show when we're at the very top
      if (currentScrollY <= 50) {
        setShowHeader(true);
      }
      // Scrolling DOWN
      else if (currentScrollY > previousScrollY) {
        setShowHeader(false);
      }
      // Scrolling UP
      else if (currentScrollY < previousScrollY) {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: showHeader ? "0px" : "-150px",
        left: 0,
        width: "100%",
        zIndex: 999999,

        transition: "top 0.4s cubic-bezier(0.22, 1, 0.36, 1)",

        pointerEvents: showHeader ? "auto" : "none",
      }}
    >
      {isMobile ? (
        <MobHeader currentMenu={currentMenu} />
      ) : (
        <MainHeader currentMenu={currentMenu} />
      )}
    </div>
  );
};

export default Header;