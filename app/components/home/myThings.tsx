
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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const MyThingsSec: React.FunctionComponent = () => {
  return (
    <section
      id="work"
      className="relative w-full overflow-x-clip py-10 md:py-26"
    >
      {/* Responsive Container - unchanged */}
      <div className="mx-auto w-[90%] md:w-[78.20%] 2xl:w-[79.50%]">
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

          <p className="md:text-3xl leading-normal md:mt-5 text-black">
            Just me thinking, designing, and winging it
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-12 2xl:gap-x-20 gap-y-0 md:gap-y-12 md:mt-12">
          {things.map((thing, index) => (
            <motion.div
              key={thing.title}
              className="w-full min-w-0"
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
                className="group block w-full cursor-pointer"
              >
                {/* Image */}
                <div className="w-full overflow-hidden mt-4 md:mt-0">
                  <Image
                    src={thing.image}
                    alt={thing.title}
                    width={460}
                    height={460}
                    sizes="(max-width: 639px) 78.2vw, (min-width: 1536px) 38vw, 39.1vw"
                    className="
                      block
                      w-full
                      h-auto
                      object-contain
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
                    text-2xl
                    md:text-3xl
                    font-semibold
                    text-black
                    mt-3
                    md:mt-5
                    transition-colors
                    duration-300
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
                    mt-1
                    md:mt-2
                    leading-relaxed
                    transition-colors
                    duration-300
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

