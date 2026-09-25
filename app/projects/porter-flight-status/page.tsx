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

export default function PorterFlightStatusPage() {
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
          text-5xl
          md:text-8xl
          font-extrabold
          leading-[0.9]
          tracking-tight
          font-display-custom
        "
      >
        PORTER FLIGHT STATUS
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
        Porter’s second most popular flow had a clarity issue
      </motion.p>

    </motion.div>
  </div>


{/* Project Information */}
<div className="w-full pb-6 md:pb-10">

  <div
    className="
      w-full
      max-w-[1000px]
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
        UI/UX Designer
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
      src="/assets/Porterflight/Porter01.webp"
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
      <h3 className="text-2xl md:text-3xl md:font-medium font-bold md:mb-4 mb-2">
 Problem
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
 Flight Status is one of Porter’s most visited features, receiving 1.25 million visits per month, second only to booking. However, the page wasn’t designed for the real context in which passengers use it: stressful, on-the-go moments while traveling. Gate agents revealed that passengers often struggled to find key information during these situations. Most users came looking for a single, clear answer, but the previous layout forced them to search for it, while
also overlooking critical operational states such as diverted flights.
    </p>
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
 Solution
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
     I redesigned the experience to prioritize clarity and comprehensive coverage. The new solution was built using a design system I developed in parallel, ensuring consistency and scalability. The redesign was then validated through user testing to confirm it effectively addressed passenger needs in high-stress, time-sensitive scenarios.
    </p>
  </motion.div>




  {/* Second Text */}
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
      <h3 className="text-2xl md:text-3xl md:font-medium font-bold md:mb-4 mb-2">
 Old Main page
</h3>
    
  </motion.div>
{/* Visual Language */}
<section className="w-full  max-w-[1100px] mx-auto">

  {/* Image + Text */}
  <div className="w-full max-w-[1100px] mx-auto">

    {/* Image */}
    <motion.div
      className="w-full overflow-hidden  md:mt-10 mt-4"
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
       src="/assets/Porterflight/Porter02.webp"
        alt="Edumate interface"
        className="w-full h-auto object-cover"
      />
    </motion.div>

 

  </div>

</section>


  {/* third Text */}
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
      <h3 className="text-2xl md:text-3xl md:font-medium font-bold md:mb-4 mb-2">
Old Result page
</h3>
    
  </motion.div>
{/* Visual Language */}
<section className="w-full  max-w-[1100px] mx-auto">

  {/* Image + Text */}
  <div className="w-full max-w-[1100px] mx-auto">

    {/* Image */}
    <motion.div
      className="w-full overflow-hidden  md:mt-10 mt-4"
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
       src="/assets/Porterflight/Porter03.webp"
        alt="Edumate interface"
        className="w-full h-auto object-cover"
      />
    </motion.div>

 

  </div>

</section>





    {/* third Text */}
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
    <h3 className="text-2xl md:text-3xl md:font-medium font-bold md:mb-4 mb-2">
 Status before everything else
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
      Passengers access this page between gates, during connections, or when travel plans change, looking for one immediate answer: What’s happening with my flight?
Usability testing revealed that users struggled to find this information quickly and confidently. Solving this required two key decisions: designing a layout that prioritizes flight status above everything else, and expanding coverage to support every operational scenario including diverted flights, which the original experience did not account for. The redesign focused on giving passengers timely, clear information when they need it most, while aligning with Canada’s passenger protection regulations that require airlines to keep travelers informed during delays and cancellations.
    </p>
  </motion.div>
{/* New Section */}
<section className="w-full md:mt-14 mt-4">

  <div className="w-full max-w-[1000px] mx-auto">

    {/* Image */}
    <motion.div
      className="w-full overflow-hidden "
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.98,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <motion.img
         src="/assets/Porterflight/Porter04.webp"
        alt="Edumate interface"
        className="w-full h-auto object-cover"
        initial={{
          scale: 1.05,
        }}
        whileInView={{
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      />
    </motion.div>

  

  </div>

</section>




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
    <h3 className="text-2xl md:text-3xl md:font-medium font-bold md:mb-4 mb-2">
  Don't make users search for connections
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
      Mid-project, a backend constraint surfaced: the system couldn’t determine whether a passenger was continuing to a connecting flight or ending their journey at a layover. To address this limitation, I placed the next flight leg directly beneath the primary status result, making it visible for every user. This removed the need for passengers to manually search for connecting flight details and created a more seamless experience regardless of their travel path.
    </p>
  </motion.div>
{/* New Section */}
<section className="w-full md:mt-14 mt-4">

  <div className="w-full max-w-[1000px] mx-auto">

    {/* Image */}
    <motion.div
      className="w-full overflow-hidden "
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.98,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <motion.img
         src="/assets/Porterflight/Porter05.webp"
        alt="Edumate interface"
        className="w-full h-auto object-cover"
        initial={{
          scale: 1.05,
        }}
        whileInView={{
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      />
    </motion.div>

 

  </div>

</section>




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
  Dark blue anchors the primary view
</h3>
<p className="w-full text-xl md:text-2xl leading-relaxed">
I used Porter’s deep brand blue to create a clear visual hierarchy between the primary action and supporting details, helping stressed passengers immediately understand what to do next.
During usability testing, users were able to locate key actions on their first attempt without unnecessary scanning or backtracking, confirming that the new hierarchy improved clarity and efficiency.    </p>
   
  </motion.div>

  {/* fourth Text */}
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
    <h3 className="text-2xl md:text-3xl md:font-medium font-bold md:mb-4 mb-2">
 Landing Page
</h3>

  </motion.div>

{/* New Section */}
<section className="w-full md:mt-14 mt-4">

  <div className="w-full max-w-[700px] mx-auto">

    {/* Image */}
    <motion.div
      className="w-full overflow-hidden "
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.98,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <motion.img
         src="/assets/Porterflight/Porter06.webp"
        alt="Edumate interface"
        className="w-full h-auto object-cover"
        initial={{
          scale: 1.05,
        }}
        whileInView={{
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      />
    </motion.div>

    {/* Centered Text */}
    <motion.div
      className="max-w-[850px] mx-auto md:mt-12 mt-4 text-center"
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
        duration: 0.9,
        delay: 0.15,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
   
    </motion.div>

  </div>

</section>



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
 Results by Flight Number
</h3>

  </motion.div>
  {/* New Section */}
<section className="w-full md:mt-14 mt-4">

  <div className="w-full max-w-[700px] mx-auto">

    {/* Image */}
    <motion.div
      className="w-full overflow-hidden "
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.98,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <motion.img
       src="/assets/Porterflight/Porter07.webp"
        alt="Edumate interface"
        className="w-full h-auto object-cover"
        initial={{
          scale: 1.05,
        }}
        whileInView={{
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      />
    </motion.div>

    {/* Centered Text */}
    <motion.div
      className="max-w-[850px] mx-auto md:mt-12 mt-4 text-center"
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
        duration: 0.9,
        delay: 0.15,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
   
    </motion.div>

  </div>

</section>

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
 Results by Route
</h3>

  </motion.div>
  {/* New Section */}
<section className="w-full md:mt-14 mt-4">

  <div className="w-full max-w-[700px] mx-auto">

    {/* Image */}
    <motion.div
      className="w-full overflow-hidden "
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.98,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <motion.img
       src="/assets/Porterflight/Porter08.webp"
        alt="Edumate interface"
        className="w-full h-auto object-cover"
        initial={{
          scale: 1.05,
        }}
        whileInView={{
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      />
    </motion.div>

    {/* Centered Text */}
    <motion.div
      className="max-w-[850px] mx-auto md:mt-12 mt-4 text-center"
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
        duration: 0.9,
        delay: 0.15,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
   
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
Added aircraft info as a moment of delight
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
     I advocated for adding aircraft details and onboard service information as a small preview of the journey ahead. Our CX Director questioned whether the content was truly relevant, so I framed the decision around three potential benefits: helping passengers recognize their aircraft, building anticipation, and creating moments of delight. Rather than relying on assumptions,
I proposed validating the feature through usability testing by observing whether passengers noticed and valued the section. The results were clear—users referenced it unprompted, with one participant saying, “Oh, this section is really fun, I love it.” Based on the positive response, we kept the feature in the final experience.
    </p>
  </motion.div>
  {/* New Section */}
<section className="w-full md:mt-14 mt-4">

  <div className="w-full max-w-[1000px] mx-auto">

    {/* Image */}
    <motion.div
      className="w-full overflow-hidden "
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.98,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <motion.img
         src="/assets/Porterflight/Porter09.webp"
        alt="Edumate interface"
        className="w-full h-auto object-cover"
        initial={{
          scale: 1.05,
        }}
        whileInView={{
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      />
    </motion.div>

    {/* Centered Text */}
    <motion.div
      className="max-w-[850px] mx-auto md:mt-12 mt-4 text-center"
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
        duration: 0.9,
        delay: 0.15,
        ease,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
      <p className="text-lg md:text-2xl leading-relaxed text-gray-400 font-light">
     Aircraft type, configuration, and onboard services. Useful before boarding, memorable after.
      </p>
    </motion.div>

  </div>

</section>

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
    <h3 className="text-2xl md:text-3xl md:font-medium font-bold md:mb-4 mb-2" >
  Results
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
      All five test participants were able to find and understand their flight status without assistance, including in diverted and cancelled scenarios.
    </p>
    <p className="w-full text-xl md:text-2xl leading-relaxed mt-2">
 All users also rated the redesign higher than the original on clarity and ease of use.
    </p>
    <p className="w-full text-xl md:text-2xl leading-relaxed mt-2">
     Designs produced 20% faster using the new design system.
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
    <h3 className="text-2xl md:text-3xl md:font-medium font-bold md:mb-4 mb-2">
  What I’d do differently
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
     Push for baseline call data before launch. Without it, the operational impact remains inferential rather than measurable. I would advocate for capturing baseline call deflection rates prior to launch, along with a 60–90 day post-launch measurement window—even if it means adjusting the launch timeline.
    </p>
  </motion.div>


   {/* nine Text */}
  <motion.div
    className="w-full md:mt-10 mt-6 mb-8"
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
  What I’d do differently
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
     Push for baseline call data before launch. Without it, the operational impact remains inferential rather than measurable. I would advocate for capturing baseline call deflection rates prior to launch, along with a 60–90 day post-launch measurement window—even if it means adjusting the launch timeline.
    </p>
  </motion.div>




</section>

  </div>
</main>

  );
}
