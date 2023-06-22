import * as React from "react";
import Link from "next/link";
import Icon from "@/app/components/common/iconfy";
import MenuItems from "./menuItems";

interface IMobHeaderProps {
  currentMenu: string;
}

const MobHeader: React.FunctionComponent<IMobHeaderProps> = (props) => {
  const currentPage: string = props.currentMenu;
  return (
    <section className="max-w-screen-xl  xl:mx-auto mx-5 relative">
      <div className=" absolute top-5 left-0 flex justify-between w-full ">
        <Link href="/">
          <div className="relative  text-3xl ">
            <h2 className="  leading-tight text-main-grd z-10 font-extrabold">
              yzk/.
            </h2>
            <h2 className=" leading-tight text-main-grd absolute top-0 text-bg-blur font-extrabold ">
              yzk/.
            </h2>
          </div>
        </Link>
        <div className="relative">
          <button className="bg-slate-800 p-2 rounded-full">
            <Icon
              icon="eva:menu-2-fill"
              className="text-[#32fcd5] text-3xl text-main-grd"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobHeader;
