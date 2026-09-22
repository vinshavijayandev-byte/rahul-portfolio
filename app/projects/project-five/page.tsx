"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Bookmark,
  MoreHorizontal,
  Send 
} from "lucide-react";

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

export default function ProjectFivePage() {
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
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }}
  className="
    text-6xl
    md:text-8xl
    font-extrabold
    leading-[0.9]
    tracking-tight
    whitespace-nowrap
  "
>
GIFT STAQ
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
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="
          mt-6
          md:mt-8
          text-2xl
          md:text-3xl
          leading-[1.15]
          max-w-[1100px]
        "
      >
        Enhancing Cultural Heritage with Location-Based Audio AR
      </motion.p>

    </motion.div>
  </div>


  {/* Project Information */}
  <div className="w-full pb-10">

    <div className="
      grid
      grid-cols-1
      md:grid-cols-[1fr_2fr_1fr]
      gap-y-10
      md:gap-x-12
    ">

      {/* Role */}
      <motion.div
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
        <p className="
          text-xl
          md:text-2xl
          uppercase
          tracking-wider
          text-black
          mb-2
        ">
          Role :
        </p>

        <p className="text-xl md:text-2xl">
          UI/UX Designer
        </p>
      </motion.div>


      {/* Tools */}
      <motion.div
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
        <p className="
          text-xl
          md:text-2xl
          uppercase
          tracking-wider
          text-gray-400
          mb-2
        ">
          Tools :
        </p>

        <p className="text-xl md:text-2xl">
          Figma, Illustrator
        </p>
      </motion.div>


      {/* Duration */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
      >
        <p className="
          text-xl
          md:text-2xl
          uppercase
          tracking-wider
          text-gray-400
          mb-2
        ">
          Duration :
        </p>

        <p className="text-xl md:text-2xl">
          3 Months
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

   {/* Project Content */}
<section className="w-full py-10">

  {/* First Image */}
  <motion.div
    className="w-full overflow-hidden bg-gray-100"
    variants={reveal}
    initial="hidden"
    whileInView="visible"
    transition={{
      duration: 0.9,
      ease,
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
  >
    <img
      src="/Frame 13.png"
      alt="Edumate project"
      className="w-full h-auto object-cover"
    />
  </motion.div>


  {/* First Text */}

<motion.div
  className="w-full mt-10"
  variants={reveal}
  initial="hidden"
  whileInView="visible"
  transition={{
    duration: 0.8,
    ease,
  }}
  viewport={{
    once: true,
    amount: 0.3,
  }}
>

  {/* Description */}
  <p className="w-full text-xl md:text-2xl leading-relaxed">
    The experience was designed around the idea of discovering
    stories through place. Instead of presenting information as a
    traditional collection of content, the interface allows users
    to explore their surroundings and discover relevant stories as
    they move through different locations.
  </p>
</motion.div>



{/* Image Showcase */}
<section className="w-full py-10">

  <div className="flex flex-col gap-6">

    {/* Row 1 */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >

      {/* Image 1 */}
      <motion.div
        className="group w-full overflow-hidden bg-gray-100 cursor-pointer"
        variants={reveal}
        transition={{
          duration: 0.9,
          ease,
        }}
        whileHover={{
          y: -10,
          scale: 1.015,
        }}
      >
        <motion.img
          src="/Frame 13.png"
          alt="Gift Staq showcase"
          className="w-full h-auto object-cover"
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.div>


      {/* Image 2 */}
      <motion.div
        className="group w-full overflow-hidden bg-gray-100 cursor-pointer"
        variants={reveal}
        transition={{
          duration: 0.9,
          ease,
        }}
        whileHover={{
          y: -10,
          scale: 1.015,
        }}
      >
        <motion.img
          src="/Frame 13.png"
          alt="Gift Staq showcase"
          className="w-full h-auto object-cover"
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.div>

    </motion.div>


    {/* Row 2 */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >

      {/* Image 3 */}
      <motion.div
        className="group w-full overflow-hidden bg-gray-100 cursor-pointer"
        variants={reveal}
        transition={{
          duration: 0.9,
          ease,
        }}
        whileHover={{
          y: -10,
          scale: 1.015,
        }}
      >
        <motion.img
          src="/Frame 13.png"
          alt="Gift Staq showcase"
          className="w-full h-auto object-cover"
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.div>


      {/* Image 4 */}
      <motion.div
        className="group w-full overflow-hidden bg-gray-100 cursor-pointer"
        variants={reveal}
        transition={{
          duration: 0.9,
          ease,
        }}
        whileHover={{
          y: -10,
          scale: 1.015,
        }}
      >
        <motion.img
          src="/Frame 13.png"
          alt="Gift Staq showcase"
          className="w-full h-auto object-cover"
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.div>

    </motion.div>


    {/* Row 3 — Single Image */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >

      {/* Image 5 */}
      <motion.div
        className="group w-full overflow-hidden bg-gray-100 cursor-pointer"
        variants={reveal}
        transition={{
          duration: 0.9,
          ease,
        }}
        whileHover={{
          y: -10,
          scale: 1.015,
        }}
      >
        <motion.img
          src="/Frame 13.png"
          alt="Gift Staq showcase"
          className="w-full h-auto object-cover"
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.div>

    </motion.div>

  </div>

</section>

 {/* third Image */}
  <motion.div
    className="w-full overflow-hidden bg-gray-100"
    variants={reveal}
    initial="hidden"
    whileInView="visible"
    transition={{
      duration: 0.9,
      ease,
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
  >
    <img
      src="/Frame 13.png"
      alt="Edumate project"
      className="w-full h-auto object-cover"
    />
  </motion.div>


{/* Cards Section */}
<section className="w-full py-16">

  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 gap-6"
    initial="hidden"
    whileInView="visible"
    viewport={{
      once: true,
      amount: 0.2,
    }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    }}
  >

    {/* Card 1 */}
    <motion.div
      variants={reveal}
      transition={{
        duration: 0.8,
        ease,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        rounded-[2.5rem]
  border
  border-black/50
        overflow-hidden
        bg-white
        transition-shadow
        duration-500
        hover:shadow-xl
      "
    >

      {/* Main Image */}
      <div className="w-full overflow-hidden">
        <motion.img
          src="/Frame 13.png"
          alt="Gift Staq card"
          className="
            w-full
            h-auto
            object-cover
            rounded-t-3xl
          "
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.6,
            ease,
          }}
        />
      </div>


      {/* Content Area */}
      <div className="relative px-5 md:px-6 pb-16 pt-10">

        {/* Small Round Image */}
        <motion.img
          src="/Frame 13.png"
          alt="Gift Staq detail"
          className="
            absolute
            left-5
            md:left-12
            -top-16
            w-36
            h-36
            rounded-full
            object-cover
            border-8
            border-white
            shadow-md
          "
          whileHover={{
            scale: 1.12,
            rotate: 5,
          }}
          transition={{
            duration: 0.4,
            ease,
          }}
        />


        {/* Text + Button */}
        <div className="flex items-center justify-between gap-6 mt-14">

          <div className="max-w-[75%]">
            <h3 className="text-xl md:text-4xl font-normal">
             Giftstaq
            </h3>

            <p className="mt-2 text-base md:text-lg text-gray-400 leading-relaxed">
             @giftstaq.com
            </p>
          </div>


          {/* Blue Button */}
<motion.button
  className="
    shrink-0
    px-5
    md:px-12
    h-11
    md:h-14
    rounded-3xl
    bg-blue-500
    text-white
    flex
    items-center
    justify-center
    text-base
    md:text-xl
    font-medium
    shadow-sm
    transition-colors
  "
  whileHover={{
    backgroundColor: "#ffffff",
    color: "#3b82f6",
    scale: 1.06,
    y: -3,
    boxShadow: "0 10px 25px rgba(37, 99, 235, 0.25)",
  }}
  whileTap={{
    scale: 0.96,
    y: 0,
  }}
  transition={{
    duration: 0.35,
    ease,
  }}
>
  Follow
</motion.button>

        </div>

      </div>

    </motion.div>


    {/* Card 2 */}
    <motion.div
      variants={reveal}
      transition={{
        duration: 0.8,
        ease,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
          rounded-[2.5rem]
  border
  border-black/50
        overflow-hidden
        bg-white
        transition-shadow
        duration-500
        hover:shadow-xl
      "
    >

      {/* Main Image */}
      <div className="w-full overflow-hidden">
        <motion.img
          src="/Frame 13.png"
          alt="Gift Staq card"
          className="
            w-full
            h-auto
            object-cover
            rounded-t-3xl
          "
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.6,
            ease,
          }}
        />
      </div>


      {/* Content Area */}
      <div className="relative px-5 md:px-6 pb-16 pt-10">

        {/* Small Round Image */}
        <motion.img
          src="/Frame 13.png"
          alt="Gift Staq detail"
          className="
            absolute
            left-5
            md:left-12
            -top-16
            w-36
            h-36
            rounded-full
            object-cover
            border-8
            border-white
            shadow-md
          "
          whileHover={{
            scale: 1.12,
            rotate: 5,
          }}
          transition={{
            duration: 0.4,
            ease,
          }}
        />


        {/* Text + Button */}
        <div className="flex items-center justify-between gap-6 mt-14">

          <div className="max-w-[75%]">
            <h3 className="text-xl md:text-4xl font-normal">
             Giftstaq
            </h3>

            <p className="mt-2 text-base md:text-lg text-gray-400 leading-relaxed">
             @giftstaq.com
            </p>
          </div>


          {/* Blue Button */}
<motion.button
  className="
    shrink-0
    px-5
    md:px-12
    h-11
    md:h-14
    rounded-3xl
    bg-blue-500
    text-white
    flex
    items-center
    justify-center
    text-base
    md:text-xl
    font-medium
    shadow-sm
    transition-colors
  "
  whileHover={{
    backgroundColor: "#ffffff",
    color: "#3b82f6",
    scale: 1.06,
    y: -3,
    boxShadow: "0 10px 25px rgba(37, 99, 235, 0.25)",
  }}
  whileTap={{
    scale: 0.96,
    y: 0,
  }}
  transition={{
    duration: 0.35,
    ease,
  }}
>
  Follow
</motion.button>

        </div>

      </div>

    </motion.div>

  </motion.div>

</section>


{/* Social Cards Section */}
<section className="w-full ">

  <motion.div
    className="grid grid-cols-1 md:grid-cols-3 gap-6"
    initial="hidden"
    whileInView="visible"
    viewport={{
      once: true,
      amount: 0.15,
    }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    }}
  >

{/* Card 1 */}
<motion.div
  variants={reveal}
  transition={{
    duration: 0.8,
    ease,
  }}
  whileHover={{
    y: -8,
  }}
  className="
    group
    rounded-[2.5rem]
    border
    border-black/40
    overflow-hidden
    bg-white
    transition-shadow
    duration-500
    hover:shadow-xl
  "
>

  {/* Top Profile Section */}
  <div className="flex items-center justify-between px-5 md:px-6 pt-5">

    <div className="flex items-center gap-3">

      {/* Profile Image */}
      <motion.img
        src="/Frame 13.png"
        alt="Profile"
        className="
          w-10
          h-10
          rounded-full
          object-cover
        "
        whileHover={{
          scale: 1.1,
        }}
        transition={{
          duration: 0.3,
          ease,
        }}
      />

      {/* Title */}
      <h3 className="text-lg md:text-xl font-normal">
        Giftstaq
      </h3>

    </div>


    {/* Three Dots */}
    <motion.button
      className="
        w-10
        h-10
        flex
        items-center
        justify-center
        rounded-full
      "
      whileHover={{
        scale: 1.1,
        backgroundColor: "#f3f4f6",
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      <MoreHorizontal
        size={24}
        strokeWidth={1.8}
      />
    </motion.button>

  </div>


  {/* Main Image — FULL WIDTH + TALLER */}
  <div className="mt-5 w-full overflow-hidden">

    <motion.img
      src="/Frame 13.png"
      alt="Giftstaq post"
      className="
        w-full
        h-[220px]
        md:h-[220px]
        lg:h-[400px]
        object-cover
        block
      "
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        duration: 0.6,
        ease,
      }}
    />

  </div>


  {/* Action Icons */}
  <div className="flex items-center justify-between px-5 md:px-6 py-5">

    {/* Left Actions */}
    <div className="flex items-center gap-5">

      {/* Like */}
      <motion.button
        className="
          flex
          items-center
          justify-center
        "
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{
          scale: 0.85,
        }}
        transition={{
          duration: 0.25,
          ease,
        }}
      >
        <Heart
          size={25}
          strokeWidth={1.8}
        />
      </motion.button>


      {/* Message */}
      <motion.button
        className="
          flex
          items-center
          justify-center
        "
        whileHover={{
          scale: 1.2,
          y: -2,
        }}
        whileTap={{
          scale: 0.85,
        }}
        transition={{
          duration: 0.25,
          ease,
        }}
      >
        <MessageCircle
          size={25}
          strokeWidth={1.8}
        />
      </motion.button>


      {/* Share */}
      <motion.button
        className="
          flex
          items-center
          justify-center
        "
        whileHover={{
          scale: 1.2,
          rotate: -10,
          x: 2,
        }}
        whileTap={{
          scale: 0.85,
        }}
        transition={{
          duration: 0.3,
          ease,
        }}
      >
        <Send
          size={25}
          strokeWidth={1.8}
        />
      </motion.button>

    </div>


    {/* Save */}
    <motion.button
      className="
        flex
        items-center
        justify-center
      "
      whileHover={{
        scale: 1.2,
        y: -2,
      }}
      whileTap={{
        scale: 0.85,
      }}
      transition={{
        duration: 0.25,
        ease,
      }}
    >
      <Bookmark
        size={25}
        strokeWidth={1.8}
      />
    </motion.button>

  </div>

</motion.div>


    {/* Card 2 */}
   <motion.div
  variants={reveal}
  transition={{
    duration: 0.8,
    ease,
  }}
  whileHover={{
    y: -8,
  }}
  className="
    group
    rounded-[2.5rem]
    border
    border-black/40
    overflow-hidden
    bg-white
    transition-shadow
    duration-500
    hover:shadow-xl
  "
>

  {/* Top Profile Section */}
  <div className="flex items-center justify-between px-5 md:px-6 pt-5">

    <div className="flex items-center gap-3">

      {/* Profile Image */}
      <motion.img
        src="/Frame 13.png"
        alt="Profile"
        className="
          w-10
          h-10
          rounded-full
          object-cover
        "
        whileHover={{
          scale: 1.1,
        }}
        transition={{
          duration: 0.3,
          ease,
        }}
      />

      {/* Title */}
      <h3 className="text-lg md:text-xl font-normal">
        Giftstaq
      </h3>

    </div>


    {/* Three Dots */}
    <motion.button
      className="
        w-10
        h-10
        flex
        items-center
        justify-center
        rounded-full
      "
      whileHover={{
        scale: 1.1,
        backgroundColor: "#f3f4f6",
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      <MoreHorizontal
        size={24}
        strokeWidth={1.8}
      />
    </motion.button>

  </div>


  {/* Main Image — FULL WIDTH + TALLER */}
  <div className="mt-5 w-full overflow-hidden">

    <motion.img
      src="/Frame 13.png"
      alt="Giftstaq post"
      className="
        w-full
        h-[220px]
        md:h-[220px]
        lg:h-[400px]
        object-cover
        block
      "
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        duration: 0.6,
        ease,
      }}
    />

  </div>


  {/* Action Icons */}
  <div className="flex items-center justify-between px-5 md:px-6 py-5">

    {/* Left Actions */}
    <div className="flex items-center gap-5">

      {/* Like */}
      <motion.button
        className="
          flex
          items-center
          justify-center
        "
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{
          scale: 0.85,
        }}
        transition={{
          duration: 0.25,
          ease,
        }}
      >
        <Heart
          size={25}
          strokeWidth={1.8}
        />
      </motion.button>


      {/* Message */}
      <motion.button
        className="
          flex
          items-center
          justify-center
        "
        whileHover={{
          scale: 1.2,
          y: -2,
        }}
        whileTap={{
          scale: 0.85,
        }}
        transition={{
          duration: 0.25,
          ease,
        }}
      >
        <MessageCircle
          size={25}
          strokeWidth={1.8}
        />
      </motion.button>


      {/* Share */}
      <motion.button
        className="
          flex
          items-center
          justify-center
        "
        whileHover={{
          scale: 1.2,
          rotate: -10,
          x: 2,
        }}
        whileTap={{
          scale: 0.85,
        }}
        transition={{
          duration: 0.3,
          ease,
        }}
      >
        <Send
          size={25}
          strokeWidth={1.8}
        />
      </motion.button>

    </div>


    {/* Save */}
    <motion.button
      className="
        flex
        items-center
        justify-center
      "
      whileHover={{
        scale: 1.2,
        y: -2,
      }}
      whileTap={{
        scale: 0.85,
      }}
      transition={{
        duration: 0.25,
        ease,
      }}
    >
      <Bookmark
        size={25}
        strokeWidth={1.8}
      />
    </motion.button>

  </div>

</motion.div>


    {/* Card 3 */}
<motion.div
  variants={reveal}
  transition={{
    duration: 0.8,
    ease,
  }}
  whileHover={{
    y: -8,
  }}
  className="
    group
    rounded-[2.5rem]
    border
    border-black/40
    overflow-hidden
    bg-white
    transition-shadow
    duration-500
    hover:shadow-xl
  "
>

  {/* Top Profile Section */}
  <div className="flex items-center justify-between px-5 md:px-6 pt-5">

    <div className="flex items-center gap-3">

      {/* Profile Image */}
      <motion.img
        src="/Frame 13.png"
        alt="Profile"
        className="
          w-10
          h-10
          rounded-full
          object-cover
        "
        whileHover={{
          scale: 1.1,
        }}
        transition={{
          duration: 0.3,
          ease,
        }}
      />

      {/* Title */}
      <h3 className="text-lg md:text-xl font-normal">
        Giftstaq
      </h3>

    </div>


    {/* Three Dots */}
    <motion.button
      className="
        w-10
        h-10
        flex
        items-center
        justify-center
        rounded-full
      "
      whileHover={{
        scale: 1.1,
        backgroundColor: "#f3f4f6",
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      <MoreHorizontal
        size={24}
        strokeWidth={1.8}
      />
    </motion.button>

  </div>


  {/* Main Image — FULL WIDTH + TALLER */}
  <div className="mt-5 w-full overflow-hidden">

    <motion.img
      src="/Frame 13.png"
      alt="Giftstaq post"
      className="
        w-full
        h-[220px]
        md:h-[220px]
        lg:h-[400px]
        object-cover
        block
      "
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        duration: 0.6,
        ease,
      }}
    />

  </div>


  {/* Action Icons */}
  <div className="flex items-center justify-between px-5 md:px-6 py-5">

    {/* Left Actions */}
    <div className="flex items-center gap-5">

      {/* Like */}
      <motion.button
        className="
          flex
          items-center
          justify-center
        "
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{
          scale: 0.85,
        }}
        transition={{
          duration: 0.25,
          ease,
        }}
      >
        <Heart
          size={25}
          strokeWidth={1.8}
        />
      </motion.button>


      {/* Message */}
      <motion.button
        className="
          flex
          items-center
          justify-center
        "
        whileHover={{
          scale: 1.2,
          y: -2,
        }}
        whileTap={{
          scale: 0.85,
        }}
        transition={{
          duration: 0.25,
          ease,
        }}
      >
        <MessageCircle
          size={25}
          strokeWidth={1.8}
        />
      </motion.button>


      {/* Share */}
      <motion.button
        className="
          flex
          items-center
          justify-center
        "
        whileHover={{
          scale: 1.2,
          rotate: -10,
          x: 2,
        }}
        whileTap={{
          scale: 0.85,
        }}
        transition={{
          duration: 0.3,
          ease,
        }}
      >
        <Send
          size={25}
          strokeWidth={1.8}
        />
      </motion.button>

    </div>


    {/* Save */}
    <motion.button
      className="
        flex
        items-center
        justify-center
      "
      whileHover={{
        scale: 1.2,
        y: -2,
      }}
      whileTap={{
        scale: 0.85,
      }}
      transition={{
        duration: 0.25,
        ease,
      }}
    >
      <Bookmark
        size={25}
        strokeWidth={1.8}
      />
    </motion.button>

  </div>

</motion.div>

  </motion.div>

</section>


</section>

  </div>
</main>

  );
}
