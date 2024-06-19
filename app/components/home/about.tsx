import * as React from "react";
import Marquee from "react-fast-marquee";

const imgRow2Arr = [
  {
    id: 1,
    src: "/assets/about/8.jpg",
    title: "",
  },
  {
    id: 2,
    src: "/assets/about/9.jpg",
    title: "",
  },
  {
    id: 3,
    src: "/assets/about/10.jpg",
    title: "",
  },
  {
    id: 4,
    src: "/assets/about/11.jpg",
    title: "",
  },
  {
    id: 5,
    src: "/assets/about/12.jpg",
    title: "",
  },
  {
    id: 6,
    src: "/assets/about/30.png",
    title: "",
  },
  {
    id: 7,
    src: "/assets/about/27.jpg",
    title: "",
  },

  {
    id: 8,
    src: "/assets/about/31.png",
    title: "",
  },
  {
    id: 9,
    src: "/assets/about/13.jpg",
    title: "",
  },
  {
    id: 10,
    src: "/assets/about/14.jpg",
    title: "",
  },
  {
    id: 11,
    src: "/assets/about/15.jpg",
    title: "",
  },
  {
    id: 12,
    src: "/assets/about/16.jpg",
    title: "",
  },
  {
    id: 13,
    src: "/assets/about/17.jpg",
    title: "",
  },
  {
    id: 14,
    src: "/assets/about/18.jpg",
    title: "",
  },
  {
    id: 15,
    src: "/assets/about/19.jpg",
    title: "",
  },
  {
    id: 16,
    src: "/assets/about/20.jpg",
    title: "",
  },
  {
    id: 17,
    src: "/assets/about/21.jpg",
    title: "",
  },
  {
    id: 18,
    src: "/assets/about/22.jpg",
    title: "",
  },
  {
    id: 19,
    src: "/assets/about/23.jpg",
    title: "",
  },
  {
    id: 20,
    src: "/assets/about/24.jpg",
    title: "",
  },
];
const AboutSec: React.FunctionComponent = () => {
  return (
    <section className="light-dot-bg relative ">
      <div className="max-w-screen-xl  xl:mx-auto mx-5 grid place-items-center min-h-[90vh] ">
        <div className="w-full md:w-2/5 text-center ">
          <h4 className="bg-gray-800 w-fit px-4 py-1 rounded-2xl mx-auto  my-4 ">
            <span className="text-[#32fcd7]   ">About My Self</span>
          </h4>
          <h2 className="font-extrabold text-5xl leading-tight  text-black">
            Programer{" "}
            <span className="relative">
              <span className="text-main-grd">/</span>
              <span className=" text-main-grd absolute left-0 top-0 text-bg-blur">
                /
              </span>
            </span>{" "}
            Maker
          </h2>
          <p className="text-xl leading-normal my-5 font-semibold ">
            I'm a programmer with a passion for electronics. <br />I love to
            build electronics devices, design software and write programs that
            solve real-world problems. <br />
            My diverse skill set enables me to approach problems from different
            angles.
          </p>
        </div>
      </div>
      <div className=" absolute bottom-0 opacity-50  ">
        <Marquee speed={80} className=" overflow-hidden mb-2">
          {imgRow2Arr.map((item, key) => (
            <div key={key} className=" relative m-2">
              <img
                src={item.src}
                alt={item.title}
                className=" h-28 w-36 object-cover rounded-xl shadow-md text-main-grd hover:scale-110  transition-all"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default AboutSec;
