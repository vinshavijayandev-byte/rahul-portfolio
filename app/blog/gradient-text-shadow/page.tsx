import * as React from "react";
import CodeSnipet from "@/app/components/common/codeSnipet";

const code1: string = `
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

`;

const code2: string = `
.text-main-grd {
    background: linear-gradient(to right, #ff5f6d, #ffc371);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

`;

const code3: string = `
.text-bg-blur {
    filter: blur(5px);
    z-index: -1;
}
`;

const code4: string = `
<div className="relative text-5xl md:text-6xl ">
    <h2 className="leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 z-10">
        Building Things
        <br />
        <span className="font-extrabold"> That Inspire </span>
    </h2>
    <h2 className="leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 absolute top-0 blur-md z-negative-1">
        Building Things
        <br />
        <span className="font-extrabold"> That Inspire </span>
    </h2>
</div>

`;
const Gtext: React.FunctionComponent = () => {
  return (
    <>
      <section className="pt-24">
        <div className="max-w-screen-xl  xl:mx-auto mx-5">
          <div className="grid place-items-center">
            <img
              src="/assets/blog/gradient-text.jpg"
              alt="gradient text"
              className="w-full md:w-3/5 rounded-2xl shadow-2xl"
            />
            <div className="flex justify-between w-full md:w-3/5 p-3">
              <time>Jun 1, 2023</time>
              <h4>Vysakh</h4>
            </div>
          </div>
          <div>
            <article className="py-4 w-full  md:p-5 md:px-12 grid place-items-center">
              <h1 className="text-center text-3xl font-bold lg:text-4xl md:w-2/3 leading-10 my-5 mb-10">
                How to make gradient text shadow using CSS / tailwindcss
              </h1>
              <p className=" w-full md:w-2/3 text-lg">
                One of the most captivating aspects of modern web design is the
                ability to create stunning visual effects. Among them, gradient
                text shadows can add a touch of sophistication and dynamism to
                your webpage. This article will guide you through the process of
                creating gradient text shadows using CSS and Tailwind CSS. We'll
                take a simple example of a block of text and add a gradient
                shadow to it, using the following code snippet:
              </p>
              <div className="w-full md:w-2/3 my-5  max-w-screen overflow-auto">
                <CodeSnipet code={code1} language="javascript" />
              </div>
              <div className=" w-full md:w-2/3 text-lg">
                <h2 className="text-2xl font-semibold py-4">
                  The Basic Structure
                </h2>
                <p>
                  The code snippet above is a JSX expression (which is typically
                  used in React) that contains two heading components: one for
                  the main text and the other for the shadow. The div container
                  has a relative class, which allows the child components to be
                  positioned relative to it.
                  <br /> <br />
                  The main text and the shadow text have the same content,
                  "Building Things That Inspire". The primary difference between
                  the two lies in their CSS classes.
                </p>
                <h2 className="text-2xl font-semibold py-4">
                  Creating The Gradient Text
                </h2>
                <p>
                  The first h2 tag represents the main text. The text-main-grd
                  class is a custom class that we have defined to implement
                  gradient text. To achieve the gradient effect, you would
                  typically define this class in your CSS file like so:
                </p>
              </div>
              <div className="w-full md:w-2/3 my-5  max-w-screen overflow-auto">
                <CodeSnipet code={code2} language="css" />
              </div>
              <div className=" w-full md:w-2/3 text-lg">
                <h2 className="text-2xl font-semibold py-4">
                  Adding The Text Shadow
                </h2>
                <p>
                  The second h2 tag is used to create the shadow effect. The
                  text-main-grd class is reused to apply the same gradient
                  effect. The absolute class places the shadow text directly
                  over the main text. To create the blurred shadow effect, we
                  use the custom text-bg-blur class
                </p>
              </div>
              <div className="w-full md:w-2/3 my-5  max-w-screen overflow-auto">
                <CodeSnipet code={code3} language="css" />
              </div>
              <div className=" w-full md:w-2/3 text-lg">
                <p>
                  The filter: blur(5px); blurs the text, creating a shadow-like
                  effect. The z-index: -1; places the blurred text behind the
                  main text, which is on z-index: 10.
                </p>
                <h2 className="text-2xl font-semibold py-4">
                  Leveraging Tailwind CSS
                </h2>
                <p>
                  If you're using Tailwind CSS, you can achieve the same effect
                  with utility classes. Here's how you could translate the above
                  example
                </p>
              </div>
              <div className="w-full md:w-2/3 my-5  max-w-screen overflow-auto">
                <CodeSnipet code={code4} language="javascript" />
              </div>

              <div className=" w-full md:w-2/3 text-lg">
                <p>
                  Creating gradient text shadows can add a unique and dynamic
                  visual effect to your webpages. By leveraging CSS and Tailwind
                  CSS's utility classes, you can achieve this effect with ease
                  and flexibility. Happy coding!​
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <div className="bg-gray-300 h-1 w-full my-10" />
    </>
  );
};

export default Gtext;
