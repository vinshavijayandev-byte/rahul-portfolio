import * as React from "react";
import Link from "next/link";
import ProjectList from "./gitProjects";

const ProjectSec: React.FunctionComponent = () => {
  return (
    <section className="light-dot-bg relative">
      <div className="max-w-screen-xl  xl:mx-auto mx-5 grid place-items-center min-h-[80vh] md:min-h-[50vh] ">
        <div className="w-full md:w-2/5 text-center ">
          <h4 className="bg-gray-800 w-fit px-4 py-1 rounded-2xl mx-auto  my-4 ">
            <span className="text-[#32fcd7]   ">Projects</span>
          </h4>
          <h2 className="font-extrabold text-5xl leading-tight  text-black">
            Abandoned Dreams
            {/* <br /> My portfolio */}
          </h2>
          <p className="text-xl leading-normal my-5 font-semibold ">
            Although I have worked on over 100 projects throughout my career,
            the majority of them remain unfinished, much like an endless game of
            whack-a-mole that I just can't seem to win.
          </p>
        </div>
      </div>
      <div className="mx-12 hidden md:block ">
        <ProjectList />{" "}
      </div>
      <div className=" bg-gradient-to-b from-transparent transition-all  via-white/50 to-white  w-full h-[20vh] md:h-[40vh] absolute -bottom-5 grid place-items-center  ">
        <a
          href="https://github.com/vysakh5"
          className="w-fit px-10 py-4 font-bold link-btn text-black transition-all rounded-2xl"
          target="_blank"
          rel="noreferrer"
        >
          Check Out My Github
        </a>
      </div>
    </section>
  );
};

export default ProjectSec;
