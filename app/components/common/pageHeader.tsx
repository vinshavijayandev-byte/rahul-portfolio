import * as React from "react";

interface IPageHeaderProps {
  title: string;
  subTitle?: string;
}

const PageHeader: React.FunctionComponent<IPageHeaderProps> = (props) => {
  return (
    <>
      <section className="landing-bg h-[35vh] md:h-[50vh] flex flex-col-reverse">
        <div className="max-w-screen-xl  xl:mx-auto mx-5 p-5 mb-5 ">
          <div className="flex flex-col gap-5 md:text-center">
            <h1>
              <span className="text-4xl md:text-6xl font-bold text-white">
                {props.title}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl  text-white">
              {props.subTitle}
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHeader;
