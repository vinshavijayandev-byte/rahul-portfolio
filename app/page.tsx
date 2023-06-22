import LandingSec from "@/app/components/home/landing";
import AboutSec from "@/app/components/home/about";
import JourneySec from "@/app/components/home/journey";
import ProjectSec from "@/app/components/home/projects";
import SkillSec from "@/app/components/home/skils";
import BlogSec from "@/app/components/home/blog";

export default function Home() {
  return (
    <main className="">
      <LandingSec />
      <AboutSec />
      <JourneySec />
      <ProjectSec />
      <SkillSec />
      <BlogSec />
      {/* Demo ⬇️⬇️⬇️ */}
      {/* <div className="min-h-screen min-w-screen grid place-items-center white-dot-bg">
        <div className="relative text-5xl md:text-6xl  text-center font-bold">
          <h2 className="  leading-tight text-main-grd-2 z-10">
            Gradient text shadow in <br /> CSS / tailwindcss
          </h2>
          <h2 className=" leading-tight text-main-grd-2 absolute top-0 text-bg-blur ">
            Gradient text shadow in <br /> CSS / tailwindcss
          </h2>
        </div>
      </div> */}
    </main>
  );
}
