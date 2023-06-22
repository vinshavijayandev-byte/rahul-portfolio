import * as React from "react";
import Link from "next/link";
import MenuItems from "./menuItems";

interface IMainHeaderProps {
  currentMenu: string;
}

const MainHeader: React.FunctionComponent<IMainHeaderProps> = (props) => {
  const currentPage: string = props.currentMenu;
  return (
    <section className="max-w-screen-xl  xl:mx-auto mx-5 relative">
      <div className=" absolute top-5 left-0 flex justify-between w-full ">
        <Link href="/">
          <div className="relative  text-5xl ">
            <h2 className="  leading-tight text-main-grd z-10 font-extrabold">
              yzk/.
            </h2>
            <h2 className=" leading-tight text-main-grd absolute top-0 text-bg-blur font-extrabold ">
              yzk/.
            </h2>
          </div>
        </Link>
        <div className="relative">
          <nav className=" relative bg-slate-800 flex justify-center place-items-center p-4 rounded-2xl z-10 font-bold text-white main-nav-bar">
            {MenuItems.map((item, key) => (
              <Link href={item.link} key={key} className="px-4">
                <h1
                  className={
                    currentPage === item.name
                      ? "text-[#32fcd5]"
                      : "hover:text-[#f753fc]"
                  }
                >
                  {item.name}
                </h1>
              </Link>
            ))}
          </nav>
          <div className="main-nav-bar-bg "></div>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
