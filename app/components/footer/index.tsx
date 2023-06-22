import React from "react";
import Link from "next/link";
import Contact from "./contact";
export default function Footer() {
  return (
    <>
      <Contact />
      <footer className="bg-gray-950 text-gray-400">
        <div className="max-w-screen-xl  xl:mx-auto mx-5  ">
          <div className="w-full flex flex-col md:flex-row justify-between p-4 text-gray-400 ">
            <div className="text-[12px]">
              <p>
                This work is free from copyright restrictions - feel free to use
                it anywhere you wish.
              </p>
            </div>
            <div className="text-[12px]">
              Built with <span className="text-red-500">❤</span> by Vysakh
            </div>
            <div className="text-[12px]">
              <p>
                *AI generated content. All the content is genarated with the
                help of GPT-4
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
