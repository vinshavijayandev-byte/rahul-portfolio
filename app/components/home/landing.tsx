import * as React from "react";
import Link from "next/link";

const LandingSec: React.FunctionComponent = () => {
  const startedYear: number = 2020;
  const currentYear: number = new Date().getFullYear();
  const experience: number = currentYear - startedYear;

  return (
    <section
      className="bg-black text-white  landing-bg "
      style={{
        backgroundImage: "url(/assets/landing.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-screen-xl  xl:mx-auto mx-5 grid place-items-center min-h-[90vh] ">
        <div className="w-full md:w-1/2 text-center flex flex-col items-center  ">
          <div className="relative text-5xl md:text-6xl ">
            <h2 className="  leading-tight text-main-grd z-10">
              Building Things
              <br />
              <span className="font-extrabold"> That Inspire </span>
            </h2>
            <h2 className=" leading-tight text-main-grd absolute top-0 text-bg-blur ">
              Building Things
              <br />
              <span className="font-extrabold"> That Inspire </span>
            </h2>
          </div>

          <p className="md:text-xl leading-normal my-5 text-[#44f8fe] stext-[#25faa5]">
            My name is Vysakh, and I'm a full-stack JS developer with more than{" "}
            {experience} year's of professional experience. <br /> I love to
            build things that solve real-world problems.
          </p>
          <Link href="/about">
            <div className="w-fit px-10 py-4 font-bold link-btn text-black transition-all rounded-2xl ">
              Know More
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingSec;
