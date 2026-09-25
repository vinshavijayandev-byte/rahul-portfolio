
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useAnimate, stagger } from "framer-motion";
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
        ? {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }
        : {
            opacity: 0,
            scale: 0.3,
            filter: "blur(20px)",
          },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen, animate]);

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
        className="
          bg-white
          py-5
          px-8
          rounded-[12px]
          shadow-xl
          w-[80vw]
          mt-3
        "
        style={{
          zIndex: "999999",
        }}
      >
        <div className="flex flex-col gap-3 font-semibold">
          {MenuItems.map((item, key) => (
            <div key={key} className="w-full">
              <Link
                href={item.link}
                className="
                  menu-item
                  flex
                  items-center
                  justify-start
                  text-left
                  font-extralight
                  p-3
                  w-full
                  rounded-[8px]
                  text-black
                  transition-colors
                  duration-200
                  hover:bg-[#fc310c]
                  hover:text-white
                  font-display-custom
                "
              >
                <div>{item.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      className="
        max-w-screen-xl
        xl:mx-auto
        mx-5
        relative
      "
      ref={scope}
    >
      <div
        className="
          absolute
          top-5
          left-0
          flex
          items-center
          justify-between
          w-full
        "
      >
        {/* LEFT SIDE - IMAGE + RAHUL */}
        <Link href="/">
          <div className="relative flex items-center gap-2">
            {/* Rahul Image */}
            <img
              src="/assets/Homepage/RahulDP.png"
              alt="Rahul"
              className="
                w-10
                h-10
                rounded-full
                object-cover
                shrink-0
              "
            />

            {/* Rahul Text */}
            <div className="relative text-xl">
              <h2 className="text-black z-10">
                Rahul
              </h2>

              <h2
                className="
                  text-black
                  absolute
                  top-0
                  left-0
                  text-bg-blur
                "
              >
                Rahul
              </h2>
            </div>
          </div>
        </Link>

        {/* MENU BUTTON */}
        <div className="relative">
          <button
            className="
              bg-transparent
              p-1
              flex
              items-center
              justify-center
            "
            onClick={handleMenuOpen}
            role="button"
            aria-label="menu"
          >
            {isMenuOpen ? (
              /* CLOSE ICON */
              <div className="relative h-7 w-7 flex items-center justify-center">
                <span
                  className="
                    absolute
                    h-[3px]
                    w-6
                    rotate-45
                    bg-black
                  "
                />

                <span
                  className="
                    absolute
                    h-[3px]
                    w-6
                    -rotate-45
                    bg-black
                  "
                />
              </div>
            ) : (
              /* 3 EQUAL HAMBURGER LINES */
              <div className="flex w-7 flex-col items-center gap-[5px]">
                <span className="block h-[3px] w-6 bg-black" />
                <span className="block h-[3px] w-6 bg-black" />
                <span className="block h-[3px] w-6 bg-black" />
              </div>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className="
            menu-list
            absolute
            top-10
            left-4
          "
          style={{
            pointerEvents: isMenuOpen ? "auto" : "none",
            clipPath: "inset(10% 50% 90% 50% round 10px)",
          }}
        >
          <Menu />
        </div>
      </div>
    </section>
  );
};

export default MobHeader;

