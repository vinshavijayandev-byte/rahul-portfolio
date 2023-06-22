import * as React from "react";

const AboutSec: React.FunctionComponent = () => {
  return (
    <section className="light-dot-bg">
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
    </section>
  );
};

export default AboutSec;
