import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect, useState } from "react";
import TextType from "./ui/TextType";
import Iridescence from "./ui/Iridescence";

gsap.registerPlugin(SplitText);
const Hero = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);
  useGSAP(() => {
    if (!fontsLoaded) return;
    const titleSplit = new SplitText(".hero-title", {
      type: "chars",
    });
    const tl = gsap.timeline({
      delay: 0.5,
    });
    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.inOut",
    })
      .from(titleSplit.chars, {
        opacity: 0,
        y: 50,
        stagger: 0.05,
        ease: "back.out",
      })
      .to(".hero-text-scroll", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  }, [fontsLoaded]); // Re-run animation when fonts are loaded
  return (
    <section className="relative">
      <div className="relative bg-gradient-to-r from-rose-500 via-red-400 to-red-500 w-screen h-[100vh] overflow-hidden">
        <div className="absolute w-full h-full">
          <Iridescence
            color={[1, 0.3, 0.3]}
            mouseReact={true}
            amplitude={0.1}
            speed={1.0}
          />
        </div>
        <div className=" relative z-10 w-full h-full flex flex-col 2xl:justify-start items-center translate-y-10 lg:pt-13 md:pt-15 pt-30">
          <div className="overflow-hidde">
            <h1 className="hero-title text-rose-200 2xl:text-[12rem] md:text-[8rem] text-[5rem] font-bold uppercase leading-[9vw] tracking-[-.35vw] mb-1 md:-mb-3">
              P R I M E
            </h1>
          </div>
          <div
            style={{
              clipPath: " polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll rotate-[-3deg] mb-4 border-[.6vw] border-rose-300"
          >
            <div className="bg-rose-700">
              <h1 className="text-rose-300 lg:text-[5rem] md:text-[4rem] text-[2rem] font-bold uppercase px-2">
                Hydration + Sticks
              </h1>
            </div>
          </div>

          <div className="w-full h-full flex justify-center md:text-4xl text-2xl items-center md:px-60 px-25">
            <TextType
              text={[
                "Welcome to Prime Hydration, your ultimate refreshment destination!",
                "Experience the taste of vitality — stay cool, stay hydrated, and make every sip Prime!",
              ]}
              typingSpeed={10}
              pauseDuration={1000}
              showCursor={true}
              cursorCharacter="|"
              className="font-bold text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
