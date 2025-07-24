import ModelViewer from "../ModelViewer";
import SplashCursor from "../ui/SplashCursor";
import Hero from "../Hero";
import About from "../About";

const Section1 = () => {
  return (
    <div className="w-[100vw]">
      <div className="hidden lg:block">
        <SplashCursor />
      </div>
      <div className="absolute z-200 w-full h-screen">
          <ModelViewer />
      </div>
      <div className="">
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default Section1;
