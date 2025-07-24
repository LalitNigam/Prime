import { Cover } from './ui/cover';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { motion, useScroll, useTransform } from "motion/react"

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.2, 0], [1, 0]);
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const titleSplit = new SplitText(".Prime", { type: "words" });
      const heroContent = document.querySelector(".main");

      gsap.timeline({
        scrollTrigger: {
          trigger: ".main",
          start: "-75% 30%",
          end: "80% 30%",
          scrub: true,
        }
      })
      .to(heroContent, {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "power1.inOut",
      })
      .from(titleSplit.words, {
        opacity: 0,
        y: 50,
        stagger: 0.05,
        ease: "back.out",
      })
      .to(".hero-text-scroll", {
        duration: 2,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
    });
  });

  return (
    <div className="main w-[100vw] h-[100vh] bg-rose-200 flex">
      <div className="w-[40vw] hidden md:block h-full overflow-hidden">
        <div
          style={{
            clipPath: "circle(89% at 0 0)",
          }}
          className="relative w-full h-full bg-rose-800"
        >
          <motion.img
            style={{ scale }}
            initial={{ opacity: 0, x: 90 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://imgs.search.brave.com/r0QUVzvejFgafltwC2TL3y97URT4ry8-pjyAmCVIIx8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzYv/MTUyLzk1OC9zbWFs/bC9mcnVpdC1zdHJh/d2JlcnJ5LWlzb2xh/dGVkLXdpdGgtY2xp/cHBpbmctcGF0aC1w/bmcucG5n"
            alt="png1"
            className="w-40 rotate-[-50deg] absolute top-10 left-60"
          />
          <motion.img
            style={{ scale }}
            initial={{ opacity: 0, x: 70 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://imgs.search.brave.com/r0QUVzvejFgafltwC2TL3y97URT4ry8-pjyAmCVIIx8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzYv/MTUyLzk1OC9zbWFs/bC9mcnVpdC1zdHJh/d2JlcnJ5LWlzb2xh/dGVkLXdpdGgtY2xp/cHBpbmctcGF0aC1w/bmcucG5n"
            alt="png1"
            className="w-60 absolute top-40 left-90"
          />
          <motion.img
            style={{ scale }}
            initial={{ opacity: 0,x: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://imgs.search.brave.com/r0QUVzvejFgafltwC2TL3y97URT4ry8-pjyAmCVIIx8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzYv/MTUyLzk1OC9zbWFs/bC9mcnVpdC1zdHJh/d2JlcnJ5LWlzb2xh/dGVkLXdpdGgtY2xp/cHBpbmctcGF0aC1w/bmcucG5n"
            alt="png1"
            className="w-20 rotate-[-40deg] absolute top-20 left-100"
          />
          <motion.img
            style={{ scale }}
            initial={{ opacity: 0, x: 80 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://imgs.search.brave.com/r0QUVzvejFgafltwC2TL3y97URT4ry8-pjyAmCVIIx8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzYv/MTUyLzk1OC9zbWFs/bC9mcnVpdC1zdHJh/d2JlcnJ5LWlzb2xh/dGVkLXdpdGgtY2xp/cHBpbmctcGF0aC1w/bmcucG5n"
            alt="png1"
            className="w-30 rotate-[-120deg] absolute top-60 left-10"
          />
          <motion.img
            style={{ scale }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://imgs.search.brave.com/r0QUVzvejFgafltwC2TL3y97URT4ry8-pjyAmCVIIx8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzYv/MTUyLzk1OC9zbWFs/bC9mcnVpdC1zdHJh/d2JlcnJ5LWlzb2xh/dGVkLXdpdGgtY2xp/cHBpbmctcGF0aC1w/bmcucG5n"
            alt="png1"
            className="w-50 rotate-[-190deg] absolute top-90 left-40"
          />
        </div>
      </div>
      <div className="md:w-[60%] w-[100%] h-full">
        <div className="hero-content relative w-full h-full">
          <p className="Prime text-rose-800 lg:text-[4.2em] md:text-[3.5em] text-[2.5em] md:px-18 px-8 pt-10 text-center">
            We dropped our first product,
          </p>
          <div
            className="hero-text-scroll absolute rotate-[-3deg] text-[3em] text-center font-bold  md:top-28 top-36 md:left-60 left-5 overflow-hidden z-400"
            style={{
              clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
            }}
          >
            <div className="text-[39px] bg-rose-700 px-2 border-6 border-rose-300 text-rose-200">
              PRIME HYDRATION
            </div>
          </div>
          <p className="Prime text-rose-800 lg:text-[4em] md:text-[3.5em] text-[2.5em] md:p-17 p-20 text-center">
            in 2022 and since then, <br /> we've continued to work countless
            hours to expand in retailers, <br /> reach new markets and formulate
            new products we know you'll love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
