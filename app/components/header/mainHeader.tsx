import * as React from "react";
import Link from "next/link";
import MenuItems from "./menuItems";

interface IMainHeaderProps {
  currentMenu: string;
}

const MainHeader: React.FunctionComponent<IMainHeaderProps> = (props) => {
  const currentPage: string = props.currentMenu;

  return (
    <section className="relative max-w-[1150px] 2xl:max-w-[1450px] xl:mx-auto mx-5">
      <div
        className="
          absolute
          top-5
          left-0
          w-[calc(100%-20px)]
          sm:w-[calc(100%-25px)]
          md:w-[calc(100%-30px)]
          lg:w-[calc(100%-35px)]
          xl:w-[calc(100%-35px)]
          2xl:w-[calc(100%-40px)]
          flex
          items-center
          justify-between
          rounded-full
          bg-white/40
          backdrop-blur-md
          border
          border-white/20
          px-4
          py-2
        "
      >
        {/* Logo / Profile */}
        <Link href="/">
          <div className="relative flex items-center gap-2 text-xl md:-ml-1">
            <img
              src="/RahulDP.png"
              alt="Rahul"
              className="w-20 h-20 rounded-full object-cover"
            />

            <div className="relative">
              <h2 className="text-black hover:text-[#fc310c] z-10 text-2xl">
                Rahul
              </h2>

              <h2 className="text-black hover:text-[#fc310c] absolute top-0 text-2xl">
                Rahul
              </h2>
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <div className="relative md:pr-6">
          <nav className="relative flex items-center justify-end text-2xl z-10 text-black main-nav-bar">
            {MenuItems.map((item, key) => (
              <Link
                href={item.link}
                key={key}
                className={`pl-3 ${
                  key === MenuItems.length - 1 ? "pr-0" : "pr-3"
                }`}
              >
                <h1
                  className={
                    currentPage === `/${item.name.toLowerCase()}`
                      ? "text-black"
                      : "hover:text-[#fc310c]"
                  }
                >
                  {item.name}
                </h1>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;