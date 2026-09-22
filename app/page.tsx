
import AboutSec from "@/app/components/home/about";

import LandingSection from "./components/home/landingSec";
import PhotoSec from "./components/home/photo";
import MyThingsSec from "./components/home/myThings";
import AskAwaySec from "./components/home/askAway";

export default function Home() {
  return (
    <main className="">
  
      <LandingSection />
      <PhotoSec />
      <MyThingsSec />
      <AboutSec />
      <AskAwaySec />
  
      
    </main>
  );
}
