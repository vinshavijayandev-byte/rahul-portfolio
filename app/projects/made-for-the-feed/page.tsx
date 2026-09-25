"use client";
import Image from "next/image";
import * as React from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

const galleryImages = [
  {
    src: "/assets/Madeforthefeed/Burger-King-01.webp",
    title: "Location-Based Experience",
  },
  {
    src: "/assets/Madeforthefeed/Burger-King-02.webp",
    title: "Audio AR Interface",
  },
  {
   src: "/assets/Madeforthefeed/Burger-King-03.webp",
    title: "Cultural Discovery",
  },
  {
    src: "/assets/Madeforthefeed/Burger-King-04.webp",
    title: "Interactive Map",
  },
  {
     src: "/assets/Madeforthefeed/Burger-King-05.webp",
    title: "Heritage Stories",
  },
  {
   src: "/assets/Madeforthefeed/Burger-King-06.webp",
    title: "Immersive Audio",
  },
  {
    src: "/assets/Madeforthefeed/Oreo-03.webp",
    title: "Exploration Flow",
  },
  {
   src: "/assets/Madeforthefeed/Oreo-02.webp",
    title: "Place & Memory",
  },
  {
   src: "/assets/Madeforthefeed/Oreo-01.webp",
    title: "User Journey",
  },
  {
  src: "/assets/Madeforthefeed/Whiskey-01.webp",
    title: "Final Experience",
  },
  {
  src: "/assets/Madeforthefeed/Nescafe-02.webp",
    title: "Final Experience",
  },
  {
  src: "/assets/Madeforthefeed/Nescafe-01.webp",
    title: "Final Experience",
  },
   {
  src: "/assets/Madeforthefeed/Mirinda-01.webp",
    title: "Final Experience",
  },
     {
  src: "/assets/Madeforthefeed/Mirinda-03.webp",
    title: "Final Experience",
  },
     {
  src: "/assets/Madeforthefeed/Mirinda-02.webp",
    title: "Final Experience",
  },
   {
  src: "/assets/Madeforthefeed/Kitkat.webp",
    title: "Final Experience",
  },
     {
  src: "/assets/Madeforthefeed/Adidas01.webp",
    title: "Final Experience",
  },
     {
  src: "/assets/Madeforthefeed/Adidas02.webp",
    title: "Final Experience",
  },
       {
  src: "/assets/Madeforthefeed/CAR-01.webp",
    title: "Final Experience",
  },
       {
  src: "/assets/Madeforthefeed/CAR-02.webp",
    title: "Final Experience",
  },
       {
  src: "/assets/Madeforthefeed/CAR-03.webp",
    title: "Final Experience",
  },
       {
  src: "/assets/Madeforthefeed/CAR-04.webp",
    title: "Final Experience",
  },
    {
  src: "/assets/Madeforthefeed/Bike-01.webp",
    title: "Final Experience",
  },
    {
  src: "/assets/Madeforthefeed/Bike-02.webp",
    title: "Final Experience",
  },
    {
  src: "/assets/Madeforthefeed/Bike-03.webp",
    title: "Final Experience",
  },
    {
  src: "/assets/Madeforthefeed/f1.webp",
    title: "Final Experience",
  },
];

export default function MadeForTheFeedPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-screen-xl xl:mx-auto mx-5">

        <section className="w-full max-w-[1290px] mx-auto">

          {/* Intro */}
          <div className="w-full pt-32 pb-10 md:pt-56 md:pb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.4,
              }}
            >

              {/* Heading */}
              <motion.h1
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 60,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.9,
                      ease,
                    },
                  },
                }}
                className="
                  text-5xl
                  md:text-8xl
                  font-extrabold
                  leading-[0.9]
                  tracking-tight
                  font-display-custom
                "
              >
                MADE FOR THE FEED
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: 0.25,
                      ease,
                    },
                  },
                }}
                className="
                  mt-6
                  md:mt-8
                  text-xl
                  md:text-3xl
                  leading-[1.15]
                  max-w-full
                "
              >
                I create scroll-stopping social media content that blends bold visual design, AI-generated imagery, and creative storytelling. Each concept is crafted to capture attention, communicate ideas clearly, and bring brands to life through engaging visuals. From campaign creatives to promotional content, I combine design, creativity, and technology to create work that stands out in the feed.
              </motion.p>

            </motion.div>
          </div>


{/* Project Information */}
<div className="w-full pb-4 md:pb-10">
  <div
    className="
      w-full
      max-w-[900px]
      grid
      grid-cols-[1fr_3fr]
      gap-x-4
      sm:gap-x-6
      md:gap-x-12
    "
  >

    {/* Role */}
    <motion.div
      className="min-w-0"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.7,
        delay: 0.1,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
      <p
        className="
          text-sm
          sm:text-base
          md:text-2xl
          uppercase
          tracking-wider
          text-gray-400
          mb-1
          md:mb-2
        "
      >
        Role :
      </p>

      <p className="text-sm sm:text-base md:text-2xl break-words">
        AI Visual Designer
      </p>
    </motion.div>


    {/* Tools */}
    <motion.div
      className="min-w-0"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.7,
        delay: 0.2,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
      <p
        className="
          text-sm
          sm:text-base
          md:text-2xl
          uppercase
          tracking-wider
          text-gray-400
          mb-1
          md:mb-2
        "
      >
        Tools :
      </p>

      <p className="text-sm sm:text-base md:text-2xl break-words">
        Adobe Illustrator, Adobe Photoshop, AI (Chat GPT, Adobe FireFly)
      </p>
    </motion.div>

  </div>
</div>

        </section>


        {/* Divider */}
        <motion.div
          className="w-full h-px bg-black/80 origin-left"
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
        />


    {/* =====================================================
    IMAGE GALLERY
====================================================== */}

<section className="w-full max-w-[1290px] mx-auto py-4 md:py-12 mb-8">

  {/* Gallery Rows */}
  <div className="flex flex-col gap-2 md:gap-10">

    {Array.from({
      length: Math.ceil(galleryImages.length / 2),
    }).map((_, rowIndex) => {

      const firstIndex = rowIndex * 2;
      const secondIndex = firstIndex + 1;

      const firstImage = galleryImages[firstIndex];
      const secondImage = galleryImages[secondIndex];

      return (
        <motion.div
          key={rowIndex}
          variants={{
            hidden: {
              opacity: 0,
              y: 70,
              filter: "blur(12px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.9,
                ease,
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            grid
            grid-cols-2
            md:grid-cols-2
            gap-2
            md:gap-8
          "
        >

          {/* Image 1 */}
          {firstImage && (
           <motion.div
  variants={{
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease,
      },
    },
  }}
  className="group"
>
  <motion.div
    whileHover={{
      y: -8,
      scale: 1.015,
    }}
    transition={{
      duration: 0.45,
      ease,
    }}
    className="
      relative
      overflow-hidden
      cursor-pointer
    "
  >
    <motion.div
      whileHover={{
        scale: 1.06,
      }}
      transition={{
        duration: 0.7,
        ease,
      }}
      className="relative w-full aspect-[4/5]"
    >
      <Image
        src={firstImage.src}
        alt={firstImage.title}
        fill
        sizes="(max-width: 768px) 50vw, 50vw"
        className="
          block
          object-cover
        "
      />
    </motion.div>
  </motion.div>
</motion.div>
          )}


          {/* Image 2 */}
          {secondImage && (
        <motion.div
  variants={{
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease,
      },
    },
  }}
  className="group"
>
  <motion.div
    whileHover={{
      y: -8,
      scale: 1.015,
    }}
    transition={{
      duration: 0.45,
      ease,
    }}
    className="
      relative
      overflow-hidden
      cursor-pointer
    "
  >
    <motion.div
      whileHover={{
        scale: 1.06,
      }}
      transition={{
        duration: 0.7,
        ease,
      }}
      className="relative w-full aspect-[4/5]"
    >
      <Image
        src={secondImage.src}
        alt={secondImage.title}
        fill
        sizes="(max-width: 768px) 50vw, 50vw"
        className="
          block
          object-cover
        "
      />
    </motion.div>
  </motion.div>
</motion.div>
          )}

        </motion.div>
      );
    })}

  </div>

</section>

      </div>
    </main>
  );
}