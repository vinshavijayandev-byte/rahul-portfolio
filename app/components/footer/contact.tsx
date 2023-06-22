import React from "react";
import Iconify from "@/app/components/common/iconfy";

export default function Contact() {
  return (
    <>
      <section className="white-dot-bg relative py-5">
        <div className="max-w-screen-xl  xl:mx-auto mx-5 grid place-items-center min-h-[80vh] md:min-h-[50vh] ">
          <div className="w-full md:w-2/5 text-center ">
            <h4 className="bg-gray-800 w-fit px-4 py-1 rounded-2xl mx-auto  my-4 ">
              <span className="text-[#32fcd7]   ">Contact Me</span>
            </h4>
            <h2 className="font-extrabold text-5xl leading-tight  text-black">
              Let's start a conversation
              {/* <br /> My portfolio */}
            </h2>
            <p className="text-xl leading-normal my-5 font-semibold ">
              Got a groundbreaking, billion-dollar idea? I'd love to hear it!
              Connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/vysakh-av"
                className=" underline text-sky-600 "
              >
                LinkedIn
              </a>{" "}
              or drop me a line at{" "}
              <a
                href="mailto:vysakh.4v@gmail.com"
                className="underline  text-purple-500 "
              >
                vysakh.4v@gmail.com
              </a>
              . I'm always ready for a great chat!
            </p>

            <div className="flex justify-center">
              <a
                href="mailto:vysakh.4v@gmail.com"
                className="m-2 text-white p-3 grid place-content-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 hover:from-amber-200 hover:to-amber-200 hover:text-orange-500 transition-all ease-linear shadow-xl shadow-orange-400/50"
              >
                <Iconify icon="mdi:email" className="w-8 h-8 inline-block" />
              </a>

              <a
                href="https://www.linkedin.com/in/vysakh-av"
                className="m-2 text-white p-3 grid place-content-center w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-teal-500 hover:from-sky-200 hover:to-teal-200 hover:text-sky-700 transition-all ease-linear shadow-xl shadow-sky-400/50"
              >
                <Iconify icon="mdi:linkedin" className="w-8 h-8 inline-block" />
              </a>
              <a
                href="https://github.com/vysakh5"
                className="m-2 text-white p-3 grid place-content-center w-12 h-12 rounded-xl bg-gradient-to-br from-slate-600 to-sky-900 hover:from-gray-200 hover:to-slate-200 hover:text-slate-700 transition-all ease-linear shadow-xl shadow-slate-400/50"
              >
                <Iconify icon="mdi:github" className="w-8 h-8 inline-block" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
