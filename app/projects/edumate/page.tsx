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

export default function EdumatePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-[1150px] xl:mx-auto mx-5">

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
          text-5xl
          md:text-8xl
          font-extrabold
          leading-[0.9]
          tracking-tight
          font-display-custom
        "
      >
        EDUMATE
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
          leading-relaxed
          max-w-[1100px]
        "
      >
        Enhancing Cultural Heritage with Location-Based Audio AR
      </motion.p>

    </motion.div>
  </div>


{/* Project Information */}
<div className="w-full md:pb-10 pb-4">

  <div
    className="
      grid
      grid-cols-[0.9fr_1.5fr_0.9fr]
      gap-x-4
      md:gap-x-12
      items-start
    "
  >

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

      <p className="text-sm sm:text-base md:text-2xl">
        UI Designer
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

      <p className="text-sm sm:text-base md:text-2xl">
        Figma, AI (Figma Make)
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

      <p className="text-sm sm:text-base md:text-2xl">
        1 Month
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
    className="w-full overflow-hidden "
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
      src="/assets/Edumate/Edumate01.webp"
      alt="Edumate project"
      className="w-full h-auto object-cover"
    />
  </motion.div>


  {/* First Text */}
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
    <p className="w-full text-xl md:text-2xl leading-relaxed">
      Designed to keep students ahead, the product delivers a personalized, efficient, and intuitive learning journey.
    </p>
  </motion.div>


  {/* Second Image */}
  <motion.div
    className="w-full overflow-hidden  md:mt-20 mt-4"
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
      src="/assets/Edumate/Edumate02.webp"
      alt="Edumate interface"
      className="w-full h-auto object-cover"
    />
  </motion.div>


  {/* Second Text */}
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
Track your project
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
      No more uncertainty about your performance! Students can effortlessly track their marks and overall progress using an intuitive circular chart. This real-time insight makes it easy to recognize strengths and pinpoint areas that need improvement.
    </p>
  </motion.div>

{/* Third Image */}
<motion.div
  className="
    w-full
    max-w-4xl
    mx-auto
    overflow-hidden
   
    mt-4
    md:mt-20
  "
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
    src="/assets/Edumate/Edumate03.webp"
    alt="Edumate interface"
    className="
      w-full
      h-auto
      object-cover
      block
    "
  />
</motion.div>

    {/* third Text */}
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
    <h3 className="text-2xl md:text-3xl md:font-medium font-bold md:mb-4 mb-2" >
  Seamless Communication with Teachers
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
     Stay connected with your instructors through an integrated messaging system. Teachers can share personalized guidance, helpful advice, and important updates—ensuring every student gets the support they need to succeed.
    </p>
  </motion.div>

     {/* fourth Image */}
<motion.div
  className="
    w-full
    max-w-4xl
    mx-auto
    overflow-hidden
   
    mt-4
    md:mt-20
  "
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
    src="/assets/Edumate/Edumate04.webp"
    alt="Edumate interface"
    className="
      w-full
      h-auto
      object-cover
      block
    "
  />
</motion.div>


    {/* fourth Text */}
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
Effortless Subject Navigation
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
    Jump into your studies with just a tap! Peep offers seamless navigation across all your subjects, giving you quick access to notes, assignments, and quizzes—making organized learning simpler than ever.
    </p>
  </motion.div>

       {/* fifth Image */}
<motion.div
  className="
    w-full
    max-w-4xl
    mx-auto
    overflow-hidden

    mt-4
    md:mt-20
  "
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
    src="/assets/Edumate/Edumate05.webp"
    alt="Edumate interface"
    className="
      w-full
      h-auto
      object-cover
      block
    "
  />
</motion.div>

    {/* fifth Text */}
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
 Score Card
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
      The Scorecard feature provides a comprehensive view of your academic performance. With a detailed breakdown of marks across all subjects and exams, students can easily understand where they stand and what to focus on. It serves as a one-stop solution for tracking progress and results.
    </p>
  </motion.div>

      {/* sixth Image */}
 <motion.div
  className="
    w-full
    max-w-4xl
    mx-auto
    overflow-hidden
   
    mt-4
    md:mt-20
  "
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
    src="/assets/Edumate/Edumate06.webp"
    alt="Edumate interface"
    className="
      w-full
      h-auto
      object-cover
      block
    "
  />
</motion.div>

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
  Motivation through Visual Progress
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
     The circular chart offers an instant visual snapshot of progress. As it fills up, it serves as a daily reminder of how far students have come and how close they are to reaching their goals.
    </p>
  </motion.div>

     {/* seven Text */}
  <motion.div
    className="w-full md:mt-10 mt-6 s"
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
Tailored Feedback from Teachers
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
     Pepp connects students and teachers through a direct communication channel. With consistent messages and personalized feedback, students can continuously improve and stay motivated to reach their full potential.
    </p>
  </motion.div>

     {/* eight Text */}
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
    <h3 className="text-2xl md:text-3xl md:font-medium font-bold md:mb-4 mt-2">
 Structured Learning for Focused Study
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed mt-4">
     With Peep’s intuitive subject navigation, students can quickly access all their learning materials without any hassle. Designed for efficiency, it lets students spend more time studying and less time searching for resources.
    </p>
  </motion.div>




 <motion.div
    className="w-full overflow-hidden md:mt-20 mt-10 mb-8"
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
      src="/assets/Edumate/Edumate07.webp"
      alt="Edumate interface"
      className="w-full h-auto object-cover"
    />
  </motion.div>

</section>

  </div>
</main>

  );
}
