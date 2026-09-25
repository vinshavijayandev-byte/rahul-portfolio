"use client";

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

export default function TheyyamPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-screen-xl xl:mx-auto mx-5">

<section className="w-full max-w-[1290px] mx-auto">

  {/* Intro */}
  <div className="w-full pt-32 pb-4 md:pt-56 md:pb-12">
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
 text-3xl
md:text-8xl
 
  font-extrabold
  leading-[0.9]
  tracking-tight
  whitespace-nowrap
  font-display-custom
"
>
  THEYYAM THE FLAME WITHIN
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
          text-xl
          md:text-3xl
          leading-[1.15]
          max-w-[1100px]
        "
      >
       Theyyam is an action-adventure game inspired by the ancient ritual art of Kerala, where you become a divine being fighting to restore balance between humans, nature, and ancestral spirits.
      </motion.p>

    </motion.div>
  </div>


{/* Project Information */}
<div className="w-full pb-4 md:pb-10">

  <div
    className="
      w-full
      max-w-[1100px]
      grid
      grid-cols-[1fr_2fr_1fr]
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
        Visual Designer
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
        Figma, Adobe Illustrator, AI (Figma Make)
      </p>
    </motion.div>


    {/* Duration */}
    <motion.div
      className="min-w-0"
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
        Duration:
      </p>

      <p className="text-sm sm:text-base md:text-2xl break-words">
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
<section className="w-full md:py-10 py-4">

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
      src="/assets/Theyyam/Theyyam01.webp"
      alt="Edumate project"
      className="w-full h-auto object-cover"
    />
  </motion.div>


  {/* First Text */}

<motion.div
  className="w-full md:mt-10 mt-6"
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
  {/* Title */}
  <p className="text-2xl md:text-3xl md:font-normal font-bold text-black md:mb-4 mb-2">
   Story Overview
  </p>

  {/* Description */}
  <p className="w-full text-xl md:text-2xl leading-relaxed">
   Ancient darkness threatens the harmony of Kerala's sacred lands. You play as a Theyyam, a divine spirit awakened by the call of the ancestors. Travel through forests, temples, and villages, perform rituals, unlock divine powers, and confront the forces that disturb the balance.
  </p>
</motion.div>

<motion.div
  className="w-full md:mt-20 mt-6"
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
  {/* Title */}
  <p className="text-2xl md:text-3xl  text-black md:mb-4 mb-2 md:font-normal font-bold">
   Theyyam Forms - Player Progression
  </p>

   <p className="text-xl md:text-3xl text-gray-400 md:mt-8 mt-4 ">
Kurathi - The Vengeful Mother  </p>
</motion.div>




  {/* Second Image */}
  <motion.div
    className="w-full overflow-hidden bg-gray-100 md:mt-6 mt-4"
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
      src="/assets/Theyyam/Kurathi.webp"
      alt="Edumate interface"
      className="w-full h-auto object-cover"
    />
  </motion.div>


<motion.div
  className="w-full md:mt-10 mt-4"
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
 

 <p className="text-xl md:text-3xl font-light text-gray-400 md:mt-10 mt-4">
Vishnumoorthy - The Preserver  </p>
</motion.div>



    {/* third Image */}
  <motion.div
    className="w-full overflow-hidden  md:mt-6 mt-4"
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
        src="/assets/Theyyam/Vishnumoorthy.webp"
      alt="Edumate interface"
      className="w-full h-auto object-cover"
    />
  </motion.div>

<motion.div
  className="w-full md:mt-10 mt-4"
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
 

 <p className="text-xl md:text-3xl font-light text-gray-400 md:mt-10 mt-4">
Gulikan - The Dark Predator  </p>
</motion.div>

     {/* fourth Image */}
  <motion.div
    className="w-full overflow-hidden md:mt-8 mt-4"
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
        src="/assets/Theyyam/Gulikan.webp"
      alt="Edumate interface"
      className="w-full h-auto object-cover"
    />
  </motion.div>


<motion.div
  className="w-full md:mt-10 mt-4"
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
 

 <p className="text-xl md:text-3xl font-light text-gray-400 md:mt-10 mt-4">
Rakthachamundi - The Blood Goddess  </p>
</motion.div>

       {/* fifth Image */}
  <motion.div
    className="w-full overflow-hidden md:mt-8 mt-4"
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
        src="/assets/Theyyam/Rakthachamundy.webp"
      alt="Edumate interface"
      className="w-full h-auto object-cover"
    />
  </motion.div>





{/* World and Environment */}
<section className="w-full md:mt-20 mt-6">

  {/* Section Title */}
  <motion.h3
    className="text-2xl md:text-3xl md:font-medium font-bold"
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
    World and Environment
  </motion.h3>


  {/* Two Column Content */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 md:mt-10 mt-2">

    {/* Column 1 */}
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="group"
    >

      {/* Title */}
      <h4 className="text-xl md:text-2xl text-gray-400 font-light md:mb-5 mb-2">
Kaavu      </h4>

      {/* Image */}
      <motion.div
        className="w-full overflow-hidden "
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        transition={{
          duration: 0.45,
          ease,
        }}
      >
        <motion.img
            src="/assets/Theyyam/Kaavu.webp"
          alt="Exploring through place"
          className="
            w-full
            aspect-[1/1]
            object-cover
            block
          "
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
        />
      </motion.div>

    </motion.div>


    {/* Column 2 */}
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.8,
        delay: 0.25,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="group"
    >

      {/* Title */}
      <h4 className="text-xl md:text-2xl text-gray-400 font-light md:mb-5 mb-2">
Village Paths      </h4>

      {/* Image */}
      <motion.div
        className="w-full overflow-hidden "
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        transition={{
          duration: 0.45,
          ease,
        }}
      >
        <motion.img
          src="/assets/Theyyam/Villagepaths.webp"
          alt="Stories in the environment"
          className="
            w-full
            aspect-[1/1]
            object-cover
            block
          "
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
        />
      </motion.div>

    </motion.div>

     {/* Column 3 */}
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="group"
    >

      {/* Title */}
      <h4 className="text-xl md:text-2xl text-gray-400 font-light md:mb-5 mb-2">
River Banks      </h4>

      {/* Image */}
      <motion.div
        className="w-full overflow-hidden "
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        transition={{
          duration: 0.45,
          ease,
        }}
      >
        <motion.img
         src="/assets/Theyyam/RiverBanks.webp"
          alt="Exploring through place"
          className="
            w-full
            aspect-[1/1]
            object-cover
            block
          "
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
        />
      </motion.div>

    </motion.div>


    {/* Column 4 */}
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.8,
        delay: 0.25,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="group"
    >

      {/* Title */}
      <h4 className="text-xl md:text-2xl text-gray-400 font-light md:mb-5 mb-2">
Temples      </h4>

      {/* Image */}
      <motion.div
        className="w-full overflow-hidden "
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        transition={{
          duration: 0.45,
          ease,
        }}
      >
        <motion.img
            src="/assets/Theyyam/Temples.webp"
          alt="Stories in the environment"
          className="
            w-full
            aspect-[1/1]
            object-cover
            block
          "
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
        />
      </motion.div>

    </motion.div>

  </div>


  
  {/* Full Width Image */}
  <motion.div
    className="w-full mt-6 md:mt-12 overflow-hidden "
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
    <motion.img
        src="/assets/Theyyam/Theyyam02.webp"
      alt="World and Environment"
      className="
        w-full
        aspect-[16/8]
        object-cover
        block
      "
      whileHover={{
        scale: 1.04,
      }}
      transition={{
        duration: 0.8,
        ease,
      }}
    />
  </motion.div>


  {/* Orange Information Layer */}
  <motion.div
    className="
      w-full
      bg-[#fc310c]
      text-white
      px-6
      py-6
      md:px-12
      md:py-10
    "
    variants={reveal}
    initial="hidden"
    whileInView="visible"
    transition={{
      duration: 0.8,
      delay: 0.1,
      ease,
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
  >

  {/* Text */}
<div className="max-w-full">

  {/* Title */}
  <motion.h4
    className="
      text-2xl
      md:text-3xl
      md:font-medium
      font-bold
      tracking-tight
    "
    initial={{
      opacity: 0,
      y: 25,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 0.7,
      ease,
    }}
    viewport={{
      once: true,
      amount: 0.3,
    }}
  >
    Concept Overview
  </motion.h4>

  {/* Text + Arrows */}
  <motion.div
    className="
      md:mt-8
      mt-4
      flex
      flex-wrap
      items-center
      gap-2
      md:gap-8
    "
    initial={{
      opacity: 0,
      y: 20,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 0.7,
      delay: 0.15,
      ease,
    }}
    viewport={{
      once: true,
      amount: 0.3,
    }}
  >

    <p className="text-lg md:text-2xl font-medium">
      Chosen by spirit
    </p>

    <span className="text-2xl md:text-3xl">
      →
    </span>

    <p className="text-lg md:text-2xl font-medium">
      Rituals & training
    </p>

    <span className="text-2xl md:text-3xl">
      →
    </span>

    <p className="text-lg md:text-2xl font-medium">
      Transform
    </p>

    <span className="text-2xl md:text-3xl">
      →
    </span>

      <p className="text-lg md:text-2xl font-medium">
      Restore balance
    </p>

  </motion.div>

</div>

  </motion.div>

    {/* Two Column Content */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 md:mt-20 mt-4">

    {/* Column 1 */}
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="group"
    >

  

      {/* Image */}
      <motion.div
        className="w-full overflow-hidden"
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        transition={{
          duration: 0.45,
          ease,
        }}
      >
        <motion.img
            src="/assets/Theyyam/GamePlay01.webp"
          alt="Exploring through place"
          className="
            w-full
            aspect-[4/3]
            object-cover
            block
          "
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
        />
      </motion.div>

    </motion.div>


    {/* Column 2 */}
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.8,
        delay: 0.25,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="group"
    >

    

      {/* Image */}
      <motion.div
        className="w-full overflow-hidden "
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        transition={{
          duration: 0.45,
          ease,
        }}
      >
        <motion.img
            src="/assets/Theyyam/GamePlay02.webp"
          alt="Stories in the environment"
          className="
            w-full
            aspect-[4/3]
            object-cover
            block
          "
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
        />
      </motion.div>

    </motion.div>



  </div>



</section>






     {/* sixth Text */}
  <motion.div
    className="w-full md:mt-10 mt-6"
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
    <h3 className="text-2xl md:text-3xl md:font-medium font-bold md:mb-4 mb-2">
  Game Play Overview
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
      Experience immersive third-person combat that combines powerful melee weapons with divine abilities. Perform authentic Theyyam-inspired rituals to unlock new powers and abilities as you progress. Explore a non-linear world filled with environmental storytelling, hidden paths, and sacred locations, where your choices and ritual actions influence the journey and shape the consequences of the story.
    </p>
  </motion.div>

     {/* seven Text */}
  <motion.div
    className="w-full md:mt-10 mt-6"
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
    <h3 className="text-2xl md:text-3xl md:font-medium font-bold mb-4">
  Key Features
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
     Transform into powerful Theyyam forms, each with unique abilities, and perform sacred rituals, dances, and offerings to unlock divine powers. Explore authentic North Kerala locations brought to life in a cinematic world, face epic boss battles against evil spirits and demons, and experience a deep narrative inspired by Theyyam folklore and oral traditions.
    </p>
  </motion.div>

  {/* Two Column Content */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 md:mt-20 mt-4">

  {/* Column 1 */}
  <motion.div
    variants={reveal}
    initial="hidden"
    whileInView="visible"
    transition={{
      duration: 0.8,
      delay: 0.1,
      ease,
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
    className="group"
  >
    {/* Image */}
    <motion.div
      className="w-full overflow-hidden "
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{
        duration: 0.45,
        ease,
      }}
    >
      <motion.img
        src="/assets/Theyyam/Theyyam03.webp"
        alt="Exploring through place"
        className="
          w-full
          h-auto
          object-contain
          block
        "
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          duration: 0.7,
          ease,
        }}
      />
    </motion.div>
  </motion.div>


  {/* Column 2 */}
  <motion.div
    variants={reveal}
    initial="hidden"
    whileInView="visible"
    transition={{
      duration: 0.8,
      delay: 0.25,
      ease,
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
    className="group"
  >
    {/* Image */}
    <motion.div
      className="w-full overflow-hidden "
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{
        duration: 0.45,
        ease,
      }}
    >
      <motion.img
        src="/assets/Theyyam/Theyyam04.webp"
        alt="Stories in the environment"
        className="
          w-full
          h-auto
          object-contain
          block
        "
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          duration: 0.7,
          ease,
        }}
      />
    </motion.div>
  </motion.div>


  {/* Column 3 */}
  <motion.div
    variants={reveal}
    initial="hidden"
    whileInView="visible"
    transition={{
      duration: 0.8,
      delay: 0.1,
      ease,
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
    className="group"
  >
    {/* Image */}
    <motion.div
      className="w-full overflow-hidden "
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{
        duration: 0.45,
        ease,
      }}
    >
      <motion.img
        src="/assets/Theyyam/Theyyam05.webp"
        alt="Exploring through place"
        className="
          w-full
          h-auto
          object-contain
          block
        "
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          duration: 0.7,
          ease,
        }}
      />
    </motion.div>
  </motion.div>


  {/* Column 4 */}
  <motion.div
    variants={reveal}
    initial="hidden"
    whileInView="visible"
    transition={{
      duration: 0.8,
      delay: 0.25,
      ease,
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
    className="group"
  >
    {/* Image */}
    <motion.div
      className="w-full overflow-hidden "
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{
        duration: 0.45,
        ease,
      }}
    >
      <motion.img
        src="/assets/Theyyam/Theyyam06.webp"
        alt="Stories in the environment"
        className="
          w-full
          h-auto
          object-contain
          block
        "
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          duration: 0.7,
          ease,
        }}
      />
    </motion.div>
  </motion.div>

</div>

 {/* Full Width Image */}
  <motion.div
    className="w-full mt-4 md:mt-12 overflow-hidden "
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
    <motion.img
     src="/assets/Theyyam/Theyyam07.webp"
      alt="World and Environment"
      className="
        w-full
        aspect-[16/8]
        object-cover
        block
      "
      whileHover={{
        scale: 1.04,
      }}
      transition={{
        duration: 0.8,
        ease,
      }}
    />
  </motion.div>


     {/* eight Text */}
  <motion.div
    className="w-full md:mt-20 mt-6 mb-8"
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
    <h3 className="text-2xl md:text-3xl md:font-medium font-bold md:mb-4 mb-2">
  Inspiration
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
     Deeply rooted in the rich heritage of Theyyam folklore and North Kerala traditions, the game draws inspiration from sacred rituals, elaborate costumes, powerful performances, traditional music, and generations of oral storytelling. These cultural elements shape the characters, environments, combat, and narrative, creating a mystical world where folklore, spirituality,
and tradition come alive through gameplay.
    </p>
  </motion.div>




</section>

  </div>
</main>

  );
}
