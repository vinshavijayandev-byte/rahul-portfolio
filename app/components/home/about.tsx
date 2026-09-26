"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const imgRow2Arr = [
  {
    id: 1,
    src: "/assets/Homepage/apps/Figma.png",
    title: "",
  },
  {
    id: 2,
   src: "/assets/Homepage/apps/AfterEffects.png",
    title: "",
  },
  {
    id: 3,
   src: "/assets/Homepage/apps/Chatgpt.png",
    title: "",
  },
  {
    id: 4,
   src: "/assets/Homepage/apps/Claude.png",
    title: "",
  },
  {
    id: 5,
   src: "/assets/Homepage/apps/Firefly.png",
    title: "",
  },
  {
    id: 6,
   src: "/assets/Homepage/apps/Framer.png",
    title: "",
  },
  {
    id: 7,
   src: "/assets/Homepage/apps/Gemini.png",
    title: "",
  },

  {
    id: 8,
   src: "/assets/Homepage/apps/Illustrator.png",
    title: "",
  },
  {
    id: 9,
   src: "/assets/Homepage/apps/Notion.png",
    title: "",
  },
  {
    id: 10,
   src: "/assets/Homepage/apps/Photoshop.png",
    title: "",
  },
  {
    id: 11,
   src: "/assets/Homepage/apps/Premiere.png",
    title: "",
  },

];

const experiences = [
  {
    company: "Senior UI & Graphic Designer at Rookie Ninja Distribution LLC",
    location: "Dubai,UAE",
    year: "2022 — 2026",
  },
  {
    company: "UI & Graphic Designer at ANN Travels & Media",
    location: "Dubai,UAE",
    year: "2022 — 2026",
  },
];

/* Common smooth reveal */
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

const AboutSec: React.FunctionComponent = () => {
  return (
    <section className="relative overflow-x-clip" id="about">
      {/* Main Content Container */}
      <div className="max-w-[1150px] xl:mx-auto mx-5">
        {/* Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.4,
          }}
        >
          <h2 className="font-extrabold md:mt-8 text-4xl md:text-8xl leading-tight text-black font-display-custom">
            ABOUT ME
          </h2>
        </motion.div>


{/* Small Image + Text */}
<motion.div
  className="flex items-center gap-2 md:mt-10 mt-4"
  variants={reveal}
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.3,
  }}
  transition={{
    delay: 0.1,
  }}
>
  {/* Profile Image */}
  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0">
    <img
      src="/assets/Homepage/RahulDP.png"
      alt="About Rahul"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Name */}
  <div>
    <p className="text-lg md:text-2xl leading-relaxed text-black">
      Rahul
    </p>
  </div>
</motion.div>



        {/* Paragraph */}
        <motion.div
          className="w-full md:mt-12 mt-4"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            delay: 0.15,
          }}
        >
          <p className="w-full md:text-2xl text-lg leading-relaxed text-black">
            Dubai-based UI/UX and Graphic Designer with 5+ years of experience
            in end-to-end UI/UX design, graphic design, and digital product
            design. Skilled in user research, wireframing, prototyping,
            usability testing, visual design, and design systems. Experienced in
            delivering scalable, user-centric solutions that improve usability,
            engagement, and business performance while maintaining strong brand
            consistency.
          </p>
        </motion.div>

       {/* Experience */}
<div className="w-full mt-2 md:mt-8">
  {experiences.map((experience, index) => (
    <motion.div
      key={index}
      className="
        w-full
        flex flex-col
        md:flex-row
        md:items-center
        md:justify-between
        gap-2
        md:gap-6
        py-5
        md:py-6
      "
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        delay: index * 0.15,
      }}
    >
      {/* Company + Location */}
      <div className="w-full md:flex-1 min-w-0">
        <h4 className="text-lg md:text-2xl font-semibold text-black leading-snug">
          {experience.company}
        </h4>

        <p className="text-base md:text-lg font-normal text-gray-400 mt-1">
          {experience.location}
        </p>
      </div>

      {/* Year */}
      <p
        className="
          text-base
          md:text-2xl
          text-black
          font-normal
          w-full
          md:w-auto
          md:shrink-0
        "
      >
        {experience.year}
      </p>
    </motion.div>
  ))}
</div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-black/20"
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          style={{
            transformOrigin: "left",
          }}
        />

        {/* My Daily Drivers */}
        <motion.div
          className="mt-6 mb-6"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <p className="text-2xl md:text-3xl font-semibold text-black">
            My daily drivers
          </p>
        </motion.div>

        {/* Daily Drivers Images */}
        <motion.div
          className="relative w-full overflow-hidden"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {/* Left blur */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-28 z-20 bg-gradient-to-r from-white via-white/70 to-transparent" />

          {/* Right blur */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-28 z-20 bg-gradient-to-l from-white via-white/70 to-transparent" />

          <Marquee
            speed={50}
            direction="left"
            gradient={false}
            pauseOnHover={false}
            autoFill={true}
          >
            {imgRow2Arr.map((item) => (
              <motion.div
                key={item.id}
                className="mx-2 md:mx-3 shrink-0 md:px-5 md:py-3"
                whileHover={{
                  scale: 1.12,
                  zIndex: 30,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src={item.src}
                  alt={item.title || "Daily driver"}
                  className="h-8 w-8 md:h-20 md:w-20 object-cover shadow-md transition-shadow duration-300 hover:shadow-xl hover:scale-110"
                />
              </motion.div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSec;
