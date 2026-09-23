"use client";

import * as React from "react";
import { motion } from "framer-motion";

const headingLines = ["FROM FRICTION TO FLOW,", "FLOW TO GROWTH"];

const paragraphWords = [
  "5",
  "Years",
  "of",
  "crafting",
  "meaningful",
  "products",
  "and",
  "visuals",
  "that",
  "hold",
  "up",
];

const wordAnimation = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(10px)",
  },

  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const LandingSection: React.FunctionComponent = () => {
  const [headingComplete, setHeadingComplete] = React.useState(false);

  return (
    <section className="text-white">
      <div className="max-w-screen-xl xl:mx-auto mx-5 grid place-items-center min-h-[70vh] md:min-h-[90vh]">
        <div className="w-full text-center flex flex-col items-center">
          <div className="relative text-5xl md:text-6xl overflow-hidden">
           <motion.h2
  initial="hidden"
  animate="visible"
  onAnimationComplete={() => setHeadingComplete(true)}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }}
  className="text-black z-10"
>
{/* Desktop */}
<div className="hidden md:block">
  {headingLines.map((line, lineIndex) => (
    <React.Fragment key={line}>
      <span className="inline-flex flex-wrap justify-center text-8xl font-display-custom">
        {line.split(" ").map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            variants={wordAnimation}
            custom={lineIndex * 5 + wordIndex}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </span>

      {lineIndex === 0 && <br />}
    </React.Fragment>
  ))}
</div>

{/* Mobile */}
<div className="md:hidden text-center text-[2.9rem] font-display-custom">
  <motion.div
    variants={wordAnimation}
    custom={0}
  >
    FROM FRICTION
  </motion.div>

  <motion.div
    variants={wordAnimation}
    custom={1}
  >
    TO FLOW
  </motion.div>

  <motion.div
    variants={wordAnimation}
    custom={2}
  >
    FLOW TO GROWTH
  </motion.div>
</div>
</motion.h2>
          </div>

          <motion.p
            initial="hidden"
            animate={headingComplete ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.05,
                  staggerChildren: 0.06,
                },
              },
            }}
            className="text-xl md:text-3xl leading-normal my-5 text-black flex flex-wrap justify-center gap-x-[0.3em]"
          >
            {paragraphWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordAnimation}
                custom={index}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
