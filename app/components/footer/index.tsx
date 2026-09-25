
"use client";

import React from "react";
import { motion } from "framer-motion";
import Iconify from "@/app/components/common/iconfy";

const reveal = {
  hidden: {
    opacity: 0,
    y: 45,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Contact() {
  return (
    <section className="relative w-full py-6 sm:py-8 bg-[#fc310c] text-white">
      <div
        className="
          max-w-screen-xl
          xl:mx-auto
          mx-5
          min-h-[55vh]
          md:min-h-[80vh]
          flex
          flex-col
          justify-between
        "
      >
        {/* Main Content */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center text-center">

            {/* Heading */}
            <motion.h2
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.4,
              }}
              className="
                w-full
                mx-auto
                text-center
                font-extrabold
                text-[2.4rem]
                leading-[0.95]
                tracking-tight
                sm:text-5xl
                md:text-8xl
                text-white
                break-words
                font-display-custom
              "
            >
              SIP. SKETCH. SCALE
            </motion.h2>

            {/* Let's Brew Button */}
            <motion.a
              href="https://wa.me/+971526702059"
              target="_blank"
              rel="noopener noreferrer"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                delay: 0.12,
              }}
              whileHover={{
                scale: 1.06,
                y: -4,
              }}
              whileTap={{
                scale: 0.96,
              }}
             className="
  mx-auto
  group
  inline-flex
  items-center
  justify-center
  mt-7
  sm:mt-8
  px-6
  sm:px-8
  py-3
  sm:py-3.5
  rounded-full
  bg-white
  text-black
  font-semibold
  text-lg
  md:text-2xl
  sm:text-xl
  transition-colors
  duration-300
  hover:bg-white
  hover:text-[#fc310c]
"
            >
              Let's Brew
            </motion.a>

          </div>
        </div>

        {/* Bottom Area */}
        <motion.div
          className="
            w-full
            flex
            flex-col
            md:flex-row
            items-center
            md:items-end
            justify-between
            gap-2
            md:gap-6
            pt-4
            md:pt-10
            pb-3
          "
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {/* Rights Reserved */}
          <p
            className="
              order-2
              md:order-1
              text-xs
              sm:text-sm
              md:text-base
              text-white/80
              text-center
              md:text-left
            "
          >
            © {new Date().getFullYear()} Rahul Krishnan. All rights reserved.
          </p>

          {/* Social Links */}
          <div
            className="
              order-1
              md:order-2
              flex
              items-center
              gap-5
            "
          >
            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/rahul5krishnan/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -6,
                scale: 1.12,
              }}
              whileTap={{
                scale: 0.92,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                text-white
                flex
                items-center
                justify-center
                hover:text-black
                transition-colors
                duration-300
              "
              aria-label="Instagram"
            >
              <Iconify
                icon="mdi:instagram"
                className="w-7 h-7 md:w-9 md:h-9"
              />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/rahul-krishnan-844283184/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -6,
                scale: 1.12,
              }}
              whileTap={{
                scale: 0.92,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                text-white
                flex
                items-center
                justify-center
                hover:text-black
                transition-colors
                duration-300
              "
              aria-label="LinkedIn"
            >
              <Iconify
                icon="mdi:linkedin"
                className="w-7 h-7 md:w-9 md:h-9"
              />
            </motion.a>

            {/* Email / @ */}
            <motion.a
              href="mailto:rahulmdr54@gmail.com"
              whileHover={{
                y: -6,
                scale: 1.12,
              }}
              whileTap={{
                scale: 0.92,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                text-white
                flex
                items-center
                justify-center
                hover:text-black
                transition-colors
                duration-300
              "
              aria-label="Email"
            >
              <span className="text-2xl md:text-3xl font-semibold">@</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
