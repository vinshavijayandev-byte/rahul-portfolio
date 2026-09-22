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
          <div className="relative flex items-center gap-2 text-xl">
           
            <img
              src="/assets/HomePage/RahulDP.png"
              alt="Rahul"
              className="w-20 h-20 rounded-full object-cover"
            />

            <div className="relative">
              <h2 className="text-black hover:text-[#fc310c] z-10 text-2xl">
                Rahul
              </h2>

              <h2 className="text-black hover:text-[#fc310c] absolute text-2xl top-0">
                Rahul
              </h2>
            </div>
          </div>
        </Link>
        <div className="relative">
          <nav className=" relative flex justify-center place-items-center p-4 text-2xl rounded-2xl z-10  text-black main-nav-bar">
            {MenuItems.map((item, key) => (
              <Link href={item.link} key={key} className="px-4">
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
