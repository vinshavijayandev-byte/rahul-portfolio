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

export default function EchopathPage() {
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
        ECHOPATH
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
        Enhancing Cultural Heritage with Location-Based Audio AR
      </motion.p>

    </motion.div>
  </div>


{/* Project Information */}
<div className="w-full pb-4">

  <div
    className="
      w-full
      max-w-[900px]
      grid
      grid-cols-[0.9fr_1.5fr_0.9fr]
      gap-x-3
      sm:gap-x-6
      md:gap-x-12
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
      className="min-w-0"
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
      className="min-w-0"
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
        Figma, AI (ChatGPT, Claude)
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
      className="min-w-0"
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
        Duration :
      </p>

      <p className="text-sm sm:text-base md:text-2xl">
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
<section className="w-full md:py-10 py-4 ">

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
      src="/assets/Echopath/Echopath01.webp"
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
      Traditional audio guides often fail to provide an engaging and seamless visitor experience by delivering lengthy, monotonous narration, requiring manual interaction that disrupts exploration, offering inaccurate location-based content, and lacking accessibility features for visually impaired visitors.
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
    A Location-Based Audio Augmented Reality system addresses these limitations by automatically delivering concise, immersive, and personalized audio based on a visitor’s location, enabling natural exploration, context-aware storytelling, and improved accessibility without interrupting the visitor experience.
  </p>
</motion.div>


{/* Image Section */}
<motion.div
  className="w-full mt-6 md:mt-10"
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
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6">

    {/* Image 1 */}
    <motion.div
      className="group relative w-full overflow-hidden "
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.img
        src="/assets/Echopath/Echopath02.webp"
        alt="Visual Language 1"
        className="w-full h-[300px] md:h-[700px] object-cover"
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.div>


    {/* Image 2 */}
    <motion.div
      className="group relative w-full overflow-hidden "
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.img
        src="/assets/Echopath/Echopath03.webp"
        alt="Visual Language 2"
        className="w-full h-[300px] md:h-[700px] object-cover"
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.div>

  </div>
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
   
    <p className="w-full text-xl md:text-2xl leading-relaxed">
      The goal was to develop a mobile Audio Augmented Reality (AR) application that provides visitors with a simple, personalized storytelling experience without overwhelming them or interrupting their natural exploration of the site. This is achieved through location-based audio that automatically delivers concise historical facts or optional immersive narratives as visitors move through different points of interest. By synchronizing spatial audio with visitors' real-time location, the system creates an intuitive, hands-free experience that seamlessly integrates with the natural flow of exploration, enhancing engagement and accessibility.
    </p>
  </motion.div>


    {/* Third Text */}
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
   
    <p className="w-full text-2xl md:text-4xl leading-relaxed md:font-medium font-bold">
     <span className="text-[#fc310c]">Before starting the design process,</span>   I sought to understand whether visitors experienced confusion, information overload,
or navigation challenges while exploring cultural heritage sites.
    </p>

  </motion.div>

{/* 4 Text */}
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
  <h3 className="text-2xl md:text-3xl md:font-medium font-bold">
    User Interview
  </h3>
</motion.div>


{/* Testimonial Cards Section */}
<motion.div
  className="w-full mt-6 md:mt-10"
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
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

    {/* Card 1 */}
    <motion.div
      className="group bg-[#fc310c] p-4 md:p-8 flex flex-col justify-between min-h-[300px] md:min-h-[450px]"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <p className="text-white text-xl md:text-2xl leading-relaxed">
       "I want information that's relevant to me, easy to follow, available in my language, and presented at my own pace-engaging enough to keep me interested without overwhelming me."
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 mt-10">
        <img
          src="/assets/Echopath/1.webp"
          alt="Author"
          className="w-12 h-12 md:w-20 md:h-20 rounded-full object-cover"
        />

        <div>
          <p className="text-white font-medium text-base md:text-lg">
            P01
          </p>
          <p className="text-white/70 text-sm">
           Audio Guide App User
          </p>
        </div>
      </div>
    </motion.div>


    {/* Card 2 */}
    <motion.div
      className="group bg-[#fc310c] p-4 md:p-8 flex flex-col justify-between min-h-[300px] md:min-h-[450px]"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <p className="text-white text-xl md:text-2xl leading-relaxed">
       "I want an audio guide that feels engaging, is easy to follow, glitch-free, available in my language, and interesting enough to keep me listening."
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 mt-10">
        <img
        src="/assets/Echopath/2.webp"
          alt="Author"
          className="w-12 h-12 md:w-20 md:h-20 rounded-full object-cover"
        />

        <div>
          <p className="text-white font-medium text-base md:text-lg">
            P02
          </p>
          <p className="text-white/70 text-sm">
           Audio Guide App User
          </p>
        </div>
      </div>
    </motion.div>


    {/* Card 3 */}
    <motion.div
      className="group bg-[#fc310c] p-4 md:p-8 flex flex-col justify-between min-h-[300px] md:min-h-[450px]"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <p className="text-white text-xl md:text-2xl leading-relaxed">
      “I want this auditory experience to feel balanced. It should be immerssive enough to feel special, enriches the story.”
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 mt-10">
        <img
           src="/assets/Echopath/3.webp"
          alt="Author"
          className="w-12 h-12 md:w-20 md:h-20 rounded-full object-cover"
        />

        <div>
          <p className="text-white font-medium text-base md:text-lg">
         P03
          </p>
          <p className="text-white/70 text-sm">
            Audio Guide App User
          </p>
        </div>
      </div>
    </motion.div>

  </div>
</motion.div>

    {/* 5 Text */}
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

    <p className="w-full text-xl md:text-2xl leading-relaxed">
     Quantitative research was conducted with 27 participants over two days through onsite interviews. To complement these findings, a QR code–based survey distributed at the visitor centre captured broader user feedback and uncovered patterns that interviews alone could not reveal. Together, these methods provided deeper insights into visitor experiences, identified key feature priorities, and informed the application's core feature set.
    </p>
  </motion.div>

{/* 5 Image */}
  <motion.div
    className="w-full overflow-hidden md:mt-10 mt-6"
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
      src="/assets/Echopath/Echopath04.webp"
      alt="Edumate project"
      className="w-full h-auto object-cover"
    />
  </motion.div>

     {/* 6 Text */}
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

    <p className="w-full text-xl md:text-2xl leading-relaxed">
     The competitor analysis identified the strengths and limitations of existing immersive audio experiences, demonstrating how location-based storytelling enhances visitor engagement while revealing opportunities to improve personalization, accessibility, and seamless interaction in our solution.
    </p>
  </motion.div>

{/* 6 Image */}
  <motion.div
    className="w-full overflow-hidden md:mt-20 mt-6"
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
      src="/assets/Echopath/Echopath05.webp"
      alt="Edumate project"
      className="w-full h-auto object-cover"
    />
  </motion.div>

    {/* 6 Text */}
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

    <p className="w-full text-xl md:text-2xl leading-relaxed">
     Upon arriving in Al Fahidi Historical Neighbourhood, Dubai, Mark is eager to explore the area's rich cultural heritage. At the visitor information centre, he chooses a location-based audio guide instead of joining a guided tour, recalling previous tours that felt rushed and followed a fixed schedule. The audio guide allows him to explore the heritage district at his own pace, spend more time at sites that capture his interest, and skip content that is less relevant, giving him complete control over his cultural experience.
    </p>
  </motion.div>

{/* 4 Cards Section */}
<motion.div
  className="w-full mt-6 md:mt-24"
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
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">

    {/* Card 1 */}
    <motion.div
      className="group bg-[#fc310c] p-4 md:p-8 min-h-[220px] flex flex-col justify-between overflow-hidden"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div>
        <h3 className="text-white text-2xl md:text-3xl mb-5">
           Content overload
        </h3>

        <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl">
        
Visitors found lengthy audio guides overwhelming and difficult to follow while walking, often leading them to lose interest.
        </p>
      </div>
    </motion.div>


    {/* Card 2 */}
    <motion.div
      className="group bg-[#fc310c] p-4 md:p-8 min-h-[220px] flex flex-col justify-between overflow-hidden"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div>
        <h3 className="text-white text-2xl md:text-3xl mb-5">
               Preference on Information
        </h3>

        <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl">
     
Visitors preferred short facts, local stories, and contextual information relevant to their exact location, choosing longer narratives only when interested.
        </p>
      </div>
    </motion.div>


    {/* Card 3 */}
    <motion.div
      className="group bg-[#fc310c] p-4 md:p-8 min-h-[220px] flex flex-col justify-between overflow-hidden"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div>
        <h3 className="text-white text-2xl md:text-3xl mb-5">
               More Spatial Audio Experience
        </h3>

        <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl">
    
Users were more engaged when audio was closely tied to their surroundings, expressing a preference for immersive spatial sound experiences.
        </p>
      </div>
    </motion.div>


    {/* Card 4 */}
    <motion.div
      className="group bg-[#fc310c] p-4 md:p-8 min-h-[220px] flex flex-col justify-between overflow-hidden"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div>
        <h3 className="text-white text-2xl md:text-3xl mb-5">
           Hands-Free Exploration
        </h3>

        <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl">
        
Visitors preferred hands-free exploration, with audio automatically playing as they moved through the site.
        </p>
      </div>
    </motion.div>

  </div>
</motion.div>

  {/* 7 Text */}
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

    <p className="w-full text-xl md:text-2xl leading-relaxed">
   The research revealed what visitors truly need during on-site exploration and exposed the limitations of traditional audio guides, providing clear direction for designing a more engaging, personalized, and seamless audio experience.
    </p>
  </motion.div>


    {/* 8 Text */}
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
    <h3 className="text-3xl md:text-4xl md:font-medium font-bold mb-4">
Audio Content Concept
</h3>
   
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
    <h3 className="text-2xl md:text-3xl md:font-medium font-bold md:mb-4 mb-2">
  Fact Peek Content
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
     

Fact Peek Mode delivers short, location-triggered audio snippets as visitors explore UAE heritage sites. Designed for those with limited time or a preference for concise content,
it shares quick facts, local stories, and cultural insights relevant to each location. By providing contextual, bite-sized audio, Fact Peek Mode encourages visitors to discover the UAE's rich heritage at their own pace without feeling overwhelmed.
    </p>
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
    <h3 className="text-2xl md:text-3xl md:font-medium font-bold md:mb-4 mb-2">
    Narrative Content
</h3>
    <p className="w-full text-xl md:text-2xl leading-relaxed">
    

Narrative Journey Mode offers a continuous, story-driven audio experience for visitors who want to immerse themselves in the rich history, traditions, and cultural heritage of the UAE. Unlike Fact Peek Mode, which provides short audio snippets, this mode unfolds as a seamless narrative, weaving together stories of Emirati life, architecture, trade, and local legends. By combining immersive storytelling with location-based audio, Narrative Journey Mode creates a deeper emotional connection while encouraging visitors to explore each heritage site in its historical and cultural context.
    </p>
  </motion.div>

      {/* 8 Text */}
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
    <h3 className="text-2xl md:text-3xl md:font-medium font-bold mb-4">
 Low fidelity design
</h3>
   
  </motion.div>

  {/* 6 Image */}
  <motion.div
    className="w-full overflow-hidden md:mt-10 mt-6"
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
      src="/assets/Echopath/LowFidelity.webp"
      alt="Edumate project"
      className="w-full h-auto object-cover"
    />
  </motion.div>

       {/* 8 Text */}
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
    <h3 className="text-2xl md:text-3xl md:font-medium font-bold md:mb-4">
  High fidelity design
</h3>
   
  </motion.div>

  {/* 6 Image */}
  <motion.div
    className="w-full overflow-hidden md:mt-10 mt-6 mb-8"
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
      src="/assets/Echopath/LowFideility.webp"
      alt="Edumate project"
      className="w-full h-auto object-cover"
    />
  </motion.div>



  
</section>

  </div>
</main>

  );
}
