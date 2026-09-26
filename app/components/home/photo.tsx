
"use client";

import * as React from "react";
import { motion } from "framer-motion";

const ImageSection: React.FunctionComponent = () => {
  return (
    <section
  className="
    relative
    w-full
    overflow-hidden
    bg-[#ff3218]

    aspect-[390/560]

    /* Tablet */
    md:aspect-[1024/700]

    /* Desktop */
    lg:aspect-[1440/850]
  "
>

      {/* =========================
          BACKGROUND IMAGE
      ========================== */}
      <motion.img
        src="/Rahul.png"
        alt="Rahul"
        initial={{
          opacity: 0,
          scale: 1.08,
          filter: "blur(12px)",
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* =========================
          OVERLAY
      ========================== */}
      <motion.div
        className="
          absolute
          inset-0
          bg-black/10
          pointer-events-none
        "
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.15,
          ease: "easeOut",
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      />

 {/* =========================
    SIGNATURE VIDEO
========================= */}
<motion.video
  src="/Signature.webm"
  autoPlay
  muted
  playsInline
  preload="auto"
  initial={{
    opacity: 0,
    scale: 0.96,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 1,
    delay: 0.3,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  className="
    absolute
    z-20
    pointer-events-none
    object-contain
    mix-blend-screen

    /* Desktop */
    w-[33%]
    right-[7%]
    top-[49%]

    /* Tablet */
    md:w-[36%]
    md:right-[6%]
    md:top-[48%]

    /* Mobile */
    max-md:w-[48%]
    max-md:right-[5%]
    max-md:top-[56%]
  "
/>

      {/* =========================
          BOTTOM TEXT
      ========================== */}
      <div
        className="
          absolute
          z-30
          left-0
          right-0
          bottom-[9%]

          w-full

          flex
          flex-nowrap
          items-center
          justify-between

          px-[8.3%]

          /* Tablet */
          md:px-[6%]
          md:bottom-[8%]

          /* Mobile */
          max-md:px-[5%]
          max-md:bottom-[7%]
        "
      >
        {/* =========================
            BRAND DESIGNER
        ========================== */}
        <motion.h2
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
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            text-white
            font-[800]
            uppercase
            leading-none
            whitespace-nowrap
            font-display-custom

            /* Desktop */
            text-[clamp(20px,2.7vw,60px)]
            tracking-[-0.04em]

            /* Mobile */
            max-md:text-[clamp(12px,3.5vw,26px)]
            max-md:tracking-[-0.045em]
          "
        >
          BRAND DESIGNER
        </motion.h2>

        {/* =========================
            WEB DESIGNER
        ========================== */}
        <motion.h2
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
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            text-white
            font-[800]
            uppercase
            leading-none
            whitespace-nowrap
            font-display-custom

            /* Desktop */
            text-[clamp(20px,2.7vw,60px)]
            tracking-[-0.04em]

            /* Mobile */
            max-md:text-[clamp(12px,3.5vw,26px)]
            max-md:tracking-[-0.045em]
          "
        >
          WEB DESIGNER
        </motion.h2>

        {/* =========================
            PRODUCT DESIGNER
        ========================== */}
        <motion.h2
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
            delay: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            text-white
            font-[800]
            uppercase
            leading-none
            whitespace-nowrap
            font-display-custom

            /* Desktop */
            text-[clamp(20px,2.7vw,60px)]
            tracking-[-0.04em]

            /* Mobile */
            max-md:text-[clamp(12px,3.5vw,26px)]
            max-md:tracking-[-0.045em]
          "
        >
          PRODUCT DESIGNER
        </motion.h2>
      </div>
    </section>
  );
};

export default ImageSection;

