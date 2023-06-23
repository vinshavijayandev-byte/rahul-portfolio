import * as React from "react";
import Marquee from "react-fast-marquee";
import PageHeader from "@/app/components/common/pageHeader";

const imgRow1Arr = [
  {
    src: "/assets/about/1.jpg",
    title: "",
  },
  {
    src: "/assets/about/2.jpg",
    title: "",
  },
  {
    src: "/assets/about/3.jpg",
    title: "",
  },
  {
    src: "/assets/about/4.jpg",
    title: "",
  },
  {
    src: "/assets/about/5.jpg",
    title: "",
  },
  {
    src: "/assets/about/6.jpg",
    title: "",
  },
  {
    src: "/assets/about/7.jpg",
    title: "",
  },
  {
    src: "/assets/about/25.png",
    title: "",
  },
  {
    src: "/assets/about/26.png",
    title: "",
  },
];

const imgRow2Arr = [
  {
    src: "/assets/about/8.jpg",
    title: "",
  },
  {
    src: "/assets/about/9.jpg",
    title: "",
  },
  {
    src: "/assets/about/10.jpg",
    title: "",
  },
  {
    src: "/assets/about/11.jpg",
    title: "",
  },
  {
    src: "/assets/about/12.jpg",
    title: "",
  },
  {
    src: "/assets/about/13.jpg",
    title: "",
  },
  {
    src: "/assets/about/14.jpg",
    title: "",
  },
  {
    src: "/assets/about/15.jpg",
    title: "",
  },
  {
    src: "/assets/about/16.jpg",
    title: "",
  },
  {
    src: "/assets/about/17.jpg",
    title: "",
  },
  {
    src: "/assets/about/18.jpg",
    title: "",
  },
  {
    src: "/assets/about/19.jpg",
    title: "",
  },
  {
    src: "/assets/about/20.jpg",
    title: "",
  },
  {
    src: "/assets/about/21.jpg",
    title: "",
  },
  {
    src: "/assets/about/22.jpg",
    title: "",
  },
  {
    src: "/assets/about/23.jpg",
    title: "",
  },
  {
    src: "/assets/about/24.jpg",
    title: "",
  },
];
const About: React.FunctionComponent = () => {
  return (
    <>
      <PageHeader
        title="Personal Profile"
        subTitle="A Closer Look at My Professional Pathway"
      />
      <section className="white-dot-bg">
        <div className="max-w-screen-xl  xl:mx-auto mx-5 grid place-items-center py-12 ">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-1/2 hidden md:block ">
              <img
                src="/assets/vysakh1.webp"
                alt="my journy "
                className="w-full object-cover rounded-2xl shadow-xl shadow-sky-700/30 "
              />
            </div>
            <div className="w-full md:w-1/2 p-2 grid place-content-center ">
              <p className="text-lg leading-normal my-5 font-semibold ">
                My name is Vysakh Arakkal, a dedicated software engineer based
                in Dubai. I embarked on my educational journey at KTU, where I
                pursued a Btech degree in Electronics and Communication.
                Although I didn't successfully complete my degree, I've managed
                to build a robust career in software development, specializing
                in NodeJS and ReactJS, with three years of hands-on experience.
              </p>
              <p className="text-lg leading-normal my-5 font-semibold ">
                As a self-taught developer, I hold a strong passion for
                programming and the continual exploration of new technologies.
                This curiosity extends beyond my professional life as I find
                myself drawn to hobby electronics. As a maker, I've channeled
                this interest into various personal projects, particularly in
                the realms of embedded systems and IoT. This blend of passion
                and hands-on experience allows me to continuously innovate and
                grow as a developer.
              </p>
            </div>
          </div>
        </div>
        <div className=" py-12 ">
          <div className="relative text-center mb-5 ">
            <h2 className="font-extrabold text-5xl leading-tight  text-black">
              Sneak Peek into <br />
              My Creations
            </h2>
          </div>
          <div>
            <Marquee speed={60}>
              {imgRow1Arr.map((item, key) => (
                <div key={key} className="m-2 relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className=" h-56 w-56 object-cover rounded-xl shadow-md"
                  />
                </div>
              ))}
              <video
                className=" h-56 w-56 object-cover rounded-xl shadow-md"
                controls={false}
                autoPlay={true}
                muted={true}
                loop={true}
              >
                <source src="/assets/about/v1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Marquee>
          </div>
          <div>
            <Marquee direction="right" speed={60}>
              {imgRow2Arr.map((item, key) => (
                <div key={key} className="m-2 relative">
                  <img
                    src={item.src}
                    alt={item.src}
                    className=" h-56 w-56 object-cover rounded-xl shadow-md"
                  />
                </div>
              ))}
            </Marquee>
          </div>
          {/* <p className="text-right p-4 text-[12px] ">
            <span className="text-[#32fcd7]  bg-gray-800 p-2 rounded-xl ">
              {" "}
              Stay tune for more updates*
            </span>
          </p> */}
        </div>
      </section>
      <section className="light-dot-bg">
        <div className="max-w-screen-xl  xl:mx-auto mx-5 grid place-items-center py-12 ">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-1/2 grid place-items-center">
              <div>
                <h4 className="bg-gray-800 w-fit px-4 py-1 rounded-2xl my-4 ">
                  <span className="text-[#32fcd7]   ">
                    Notable Achievements
                  </span>
                </h4>
                <h2 className="font-extrabold text-5xl leading-tight  text-black">
                  Gitex 22
                </h2>
                <p className="text-lg leading-normal my-5 font-semibold ">
                  I had the privilege of representing Epson Middle East as an
                  exhibitor at GITEX 2022. During the event, I was involved in
                  elaborating on Epson's Document Scanners and Software
                  solutions to attendees. Over the course of this four-day
                  event, I engaged in conversations with over 1000 potential
                  clients, who hailed from diverse regions including the Middle
                  East, Africa, and Europe.
                </p>
                <div className="bg-white/70 p-4 rounded-xl">
                  <p>
                    GITEX Technology Week, held annually in Dubai, is a
                    prestigious global event where tech visionaries converge to
                    showcase innovations and advanced tech solutions. Serving as
                    a nexus for businesses, startups, and industry leaders,
                    GITEX provides a platform to explore cutting-edge
                    technologies, network, and shape the future of digital
                    landscapes worldwide.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 grid place-items-center ">
              <img
                src="/assets/about/gitex.jpeg"
                alt="my journy "
                className="w-full object-cover rounded-xl shadow-xl "
              />
            </div>
          </div>
          {/* <div className="w-full grid place-items-center my-12 ">
          <Link href="/journey">
            <div className="w-fit px-10 py-4 font-bold link-btn text-black transition-all text-center rounded-2xl">
              View My Complete Journey
            </div>
          </Link>
        </div> */}
        </div>
      </section>
    </>
  );
};

export default About;
