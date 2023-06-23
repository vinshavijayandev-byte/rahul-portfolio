"use cllient";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Icon from "@/app/components/common/iconfy";
import { useAnimate, stagger, motion } from "framer-motion";
import { useState, useEffect } from "react";
import MenuItems from "./menuItems";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".menu-list",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
        zIndex: isOpen ? 999999 : -1,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      ".menu-item",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

interface IMobHeaderProps {
  currentMenu: string;
}

const MobHeader: React.FunctionComponent<IMobHeaderProps> = (props) => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const scope = useMenuAnimation(isMenuOpen);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  const currentPage: string = props.currentMenu;

  const Menu = () => {
    return (
      <div
        className="bg-white py-5 px-8 rounded-[12px] shadow-xl w-[80vw] mt-3  "
        style={{
          zIndex: "999999 !important",
        }}
      >
        <div className="flex flex-col gap-5  font-semibold ">
          {MenuItems.map((item, key) => (
            <div key={key} className="w-full">
              <Link
                href={item.link}
                className=" border-b menu-item flex justify-between items-center p-2 w-full"
              >
                <div className="">{item.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="max-w-screen-xl  xl:mx-auto mx-5 relative" ref={scope}>
      <div className=" absolute top-5 left-0 flex justify-between w-full ">
        <Link href="/">
          <div className="relative  text-3xl ">
            <h2 className="  leading-tight text-main-grd z-10 font-extrabold">
              yzk/.
            </h2>
            <h2 className=" leading-tight text-main-grd absolute top-0 text-bg-blur font-extrabold ">
              yzk/.
            </h2>
          </div>
        </Link>
        <div className="relative">
          <button
            className="bg-slate-800 p-2 rounded-full"
            onClick={handleMenuOpen}
          >
            {isMenuOpen ? (
              <Icon
                icon="ri-close-line"
                className="text-[#32fcd5] text-3xl text-main-grd"
              />
            ) : (
              <Icon
                icon="eva:menu-2-fill"
                className="text-[#32fcd5] text-3xl text-main-grd"
              />
            )}
          </button>
        </div>
        <div
          className="menu-list  absolute top-10 left-4 "
          style={{
            pointerEvents: isMenuOpen ? "auto" : "none",
            clipPath: "inset(10% 50% 90% 50% round 10px)",
          }}
        >
          {" "}
          <Menu />
        </div>
      </div>
    </section>
  );
};

export default MobHeader;
