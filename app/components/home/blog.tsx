import * as React from "react";
import Link from "next/link";
import BlogCardMd from "@/app/components/common/blogCardMd";
const BlogSec: React.FunctionComponent = () => {
  return (
    <section className="light-dot-bg">
      <div className="max-w-screen-xl  xl:mx-auto mx-5 grid place-items-center min-h-[90vh] ">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-2/5 ">
            <h4 className="bg-gray-800 w-fit px-4 py-1 rounded-2xl my-4 ">
              <span className="text-[#32fcd7]   ">Blogs</span>
            </h4>
            <h2 className="font-extrabold text-5xl leading-tight  text-black">
              Quick Notes
            </h2>
            <p className="text-lg leading-normal my-5 font-semibold ">
              This guide is quick, simple, and to the point - no lengthy, dull
              articles here. Although I originally crafted it as a
              self-reminder, feel free to make use of it if it serves your needs
              as well.
            </p>
            <div className="w-full grid   place-items-center md:block">
              <Link href="/blog">
                <div className="w-fit px-10 py-4 font-bold link-btn text-black transition-all text-center rounded-2xl">
                  View All Blogs
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-3/5 px-5 ">
            <div className="flex flex-col md:flex-row gap-4">
              <BlogCardMd
                title="How to make gradient text shadow using CSS / tailwindcss"
                desc="This article will guide you through the process of creating gradient text shadows using CSS and Tailwind CSS. "
                img="/assets/blog/gradient-text.jpg"
                link="/blog/gradient-text-shadow"
                date="June 1, 2023"
                author="Vysakh"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSec;
