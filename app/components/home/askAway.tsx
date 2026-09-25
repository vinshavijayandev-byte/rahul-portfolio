"use client";

import * as React from "react";
import { motion } from "framer-motion";

const askItems = [
  {
    title: "What's your design process like?",
    answer:
"I start with research and discovery, move into wireframes and prototypes, then refine through usability testing and iteration before final visual polish."  },
  {
    title: "What inspires your work?",
    answer:
" Everyday interactions, architecture, motion, and the small details that make a product feel effortless to use."  },
  {
    title: "What's your favorite kind of project?",
    answer:
" Projects that mix brand identity with product thinking — where design decisions have to work both visually and functionally."  },
  {
    title: "What's one thing you never compromise on?",
    answer:
" Usability. A beautiful interface still has to be clear, accessible, and easy for real people to use."  },
];

/* Same reveal animation used throughout the page */
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

const AskAwaySec: React.FunctionComponent = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section id="faq" className="relative overflow-x-clip py-10 md:py-20 mb-6">
      
      <div className="max-w-screen-xl xl:mx-auto mx-5">

        {/* Heading */}
        <motion.div
          className="w-full"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.4,
          }}
        >
          <h2 className="font-extrabold text-4xl md:text-8xl leading-tight text-black font-display-custom">
            ASK AWAY
          </h2>
        </motion.div>

        {/* Paragraph */}
        <motion.div
          className="w-full md:mt-6"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            delay: 0.12,
          }}
        >
          <p className="w-full text-lg md:text-2xl leading-relaxed text-black mt-2">
           If you still looking for some answers let's connect.
          </p>
        </motion.div>

        {/* Ask Boxes */}
        <div className="w-full mt-4 md:mt-12 space-y-4">
          {askItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.12,
                }}
                role="button"
                tabIndex={0}
                onClick={() => handleToggle(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleToggle(index);
                  }
                }}
                aria-expanded={isOpen}
               className="
  w-full
  border
  border-black
  px-3
  py-4
  md:px-6
  md:py-5
  cursor-pointer
  select-none
"
              >
              
            {/* Title + Plus */}
<div className="flex items-center justify-between gap-2 md:gap-6">
  <p className="text-[15px] sm:text-base md:text-2xl font-medium text-black whitespace-nowrap">
    {item.title}
  </p>

  <span
    className="
      shrink-0
      text-3xl
      md:text-4xl
      font-medium
      leading-none
      text-[#E84629]
      transition-transform
      duration-300
    "
  >
    {isOpen ? "−" : "+"}
  </span>
</div>

                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AskAwaySec;
