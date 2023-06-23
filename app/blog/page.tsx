import * as React from "react";

import PageHeader from "@/app/components/common/pageHeader";
import Iconify from "@/app/components/common/iconfy";
import BlogCardMd from "@/app/components/common/blogCardMd";

const About: React.FunctionComponent = () => {
  return (
    <div className="max-w-screen ">
      <PageHeader
        title="Quick Notes"
        subTitle="
        Self notes
        "
      />
      <section className="light-dot-bg">
        <div className="max-w-screen-xl  xl:mx-auto mx-5 py-12 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
      </section>
    </div>
  );
};

export default About;
