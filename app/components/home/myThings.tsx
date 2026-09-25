
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const things = [
  {
    image: "/assets/Homepage/Echopath.webp",
    title: "Echo Path",
    text: "UI/UX",
    link: "/projects/echo-path",
  },
  {
    image: "/assets/Homepage/PorterFlight.webp",
    title: "Porter Flight Status",
    text: "UI/UX",
    link: "/projects/porter-flight-status",
  },
  {
    image: "/assets/Homepage/Edumate.webp",
    title: "Edumate",
    text: "UI/UX, Dashboard Design",
    link: "/projects/edumate",
  },
  {
    image: "/assets/Homepage/Madeforthefeed.webp",
    title: "Made for the Feed",
    text: "Social Media, AI Visuals, Campaign Content",
    link: "/projects/made-for-the-feed",
  },
  {
    image: "/assets/Homepage/Theyyam.webp",
    title: "Theyyam The Flame Within",
    text: "Game Concept Design",
    link: "/projects/theyyam-the-flame-within",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.97,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const MyThingsSec: React.FunctionComponent = () => {
  return (
    <section
      id="work"
      className="relative overflow-x-clip py-10 md:py-26"
    >
      <div className="max-w-screen-xl xl:mx-auto mx-5">

        {/* Heading */}
        <motion.div
          className="w-full text-center"
          initial={{
            opacity: 0,
            y: 35,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
        >
          <h2 className="font-extrabold text-4xl md:mt-10 md:text-8xl leading-tight text-black font-display-custom">
            LOOK, I MADE THINGS
          </h2>

          <p className=" md:text-3xl leading-normal md:mt-5 text-black">
            Just me thinking, designing, and winging it
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-y-12 md:mt-12">
          {things.map((thing, index) => (
            <motion.div
              key={thing.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: Math.floor(index / 2) * 0.35,
              }}
            >
              <Link
                href={thing.link}
                className="group block cursor-pointer"
              >

                {/* Image */}
                <div className="w-full overflow-hidden -mt-4 md:mt-0">
                  <Image
                    src={thing.image}
                    alt={thing.title}
                    width={460}
                    height={460}
                    className="
                      md:w-full
                      md:h-auto
                      w-[460px]
                      h-[460px]
                      object-contain
                      block
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.02]
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    md:text-3xl
                    text-2xl
                    font-semibold
                    text-black
                    md:mt-5
                    
                    transition-colors
                    duration-300
                    group-hover:text-[#fc310c]
                  "
                >
                  {thing.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-base
                    md:text-2xl
                    text-gray-600
                    md:mt-2
                    leading-relaxed
                    transition-colors
                    duration-300
                    group-hover:text-[#fc310c]
                  "
                >
                  {thing.text}
                </p>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MyThingsSec;

