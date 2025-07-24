import React, { useState, useEffect } from "react";
import Models from "./Models";
import { motion, useScroll, useTransform } from "motion/react"

const slides = [
  {
    title: "TROPICAL PUNCH",
    desc: "25",
    img: 'bg-[url("/image/TROPICAL.png")]',
    image: "https://imgs.search.brave.com/r0QUVzvejFgafltwC2TL3y97URT4ry8-pjyAmCVIIx8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzYv/MTUyLzk1OC9zbWFs/bC9mcnVpdC1zdHJh/d2JlcnJ5LWlzb2xh/dGVkLXdpdGgtY2xp/cHBpbmctcGF0aC1w/bmcucG5n",
    color: "md:text-rose-600",
    model: "model",
    size: 0.5
  },
  {
    title: "BLUE RASPBERRY",
    desc: "10",
    img: 'bg-[url("/image/RASPBERRY.png")]',
    image: "https://imgs.search.brave.com/KN5VbZGtebAv_dV2mY6hVlm4bILMoPokoyVlMrC5CRI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTkv/Mzk3LzI0Mi9zbWFs/bC93b25kZXJmdWwt/bW9kZXJuLWJsYWNr/YmVycnktNGstcG5n/LnBuZw",
    color: "md:text-blue-400",
    model: "prime1",
    size: 60
  },
  {
    title: "META MOON",
    desc: "15",
    img: 'bg-[url("/image/moon.png")]',
    image: "https://imgs.search.brave.com/ZEe9_yPTKqg1HqQrHHp-pWTuTdnVTrizHRjcIbD9gAo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/Nzk0LzI4OS9zbWFs/bC9oaWdoLXJlc29s/dXRpb24taW1hZ2Ut/b2YtdGhlLWZ1bGwt/bW9vbi13aXRoLXZp/c2libGUtY3JhdGVy/cy1hbmQtZGV0YWls/cy1zZXQtYWdhaW5z/dC1wbmcucG5n",
    color: "md:text-zinc-800",
    model: "prime2",
    size: 1500
  },
  {
    title: "LEMONADE",
    desc: "20",
    img: 'bg-[url("/image/Lemonade.png")]',
    image: "https://imgs.search.brave.com/uyY8AAFbsYCSCeo26BVj0eJm40s2GELed2WbSEwBL44/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDgv/ODk0LzkyNy9zbWFs/bC9hLWxlbW9uLXNs/aWNlLW9uLWEtdHJh/bnNwYXJlbnQtYmFj/a2dyb3VuZC1wbmcu/cG5n",
    color: "md:text-orange-400",
    model: "prime3",
    size: 60
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goToNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-screen h-screen bg-rose-200 overflow-hidden shadow-lg">
      <div className="relative h-[100vh]">
        {slides.map((slide, idx) => (
          <div
            key={slide.title}
            className={`absolute inset-0 flex flex-col lg:flex-row items-center justify-between transition-all duration-700 ease-in-out
                        ${
                          idx === current
                            ? "opacity-100 z-10"
                            : "opacity-0 z-0 pointer-events-none"
                        }`}
          >
            <div className="w-full lg:w-3/5 h-screen object-cover object-center relative">

            {/*Images PNG */}
              <motion.img
              initial={{ opacity: 0, x: -100, y: 200 }}
              transition={{ duration: 2.5 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              src={slide.image} alt="image" className="absolute z-400 md:w-50 w-28 md:top-20 top-10 left-0 md:left-30"/>
              <motion.img
              initial={{ opacity: 0, x: -300, y: 100 }}
              transition={{ duration: 2.5 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              src={slide.image} alt="image" className="absolute z-400 md:w-40 w-40 md:top-70 top-20 md:left-30 left-15"/>
              <motion.img
              initial={{ opacity: 0, x: -200, y: 300 }}
              transition={{ duration: 2.5 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              src={slide.image} alt="image" className="absolute z-400 w-30 md:top-80 md:left-180 top-40 left-7"/>
              <motion.img
              initial={{ opacity: 0, x: -300, y: 100 }}
              transition={{ duration: 2.5 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              src={slide.image} alt="image" className="absolute z-400 md:w-50 w-25 md:top-30 top-5 md:left-160 left-30"/>
              <motion.img
              initial={{ opacity: 0, x: -100, y: 200 }}
              transition={{ duration: 2.5 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              src={slide.image} alt="image" className="absolute z-400 md:w-45 w-15 md:top-120 top-75 md:left-140 left-18"/>
              <motion.img
              initial={{ opacity: 0, x: -200, y: 300 }}
              transition={{ duration: 2.5 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              src={slide.image} alt="image" className="absolute z-400 w-35 top-0 left-130"/>

              {/* clippath */}
              <motion.div
                initial={{ opacity: 0, x: -400, y: 400 }}
                transition={{ duration: 2.5 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                className={`${slide.img} w-full h-full`}
                key={slide.title}
                style={{
                  clipPath: "circle(75% at 25% 87%)",
                }}
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, x: -300 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute w-full h-full top-0 md:-left-60 left-30 md:scale-100"
              >
                <Models modelName={`${slide.model}`} size={slide.size} />
              </motion.div>
            </div>
            <div className="absolute lg:relative inset-0 lg:inset-auto p-4 sm:p-6 lg:p-8 w-full lg:w-2/5 flex flex-col justify-end lg:justify-center items-start bg-gradient-to-t lg:h-full text-white pb-15 md:pb-15 lg:pb-0">
              <motion.h2
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`text-2xl sm:text-3xl lg:text-7xl font-bold uppercase mb-2 sm:mb-4 text-white ${slide.color}`}
              >
                {slide.title}
              </motion.h2>
              <div
                className={`mb-4 text-sm sm:text-base lg:text-lg opacity-90 text-white ${slide.color}`}
              >
                <ul>
                  <motion.li
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    Zero Added Sugar
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    {slide.desc} Calories
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    10% Coconut Water
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    BCAAs + B Vitamins
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    Antioxidants + Electrolytes
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    Caffeine-Free
                  </motion.li>
                </ul>
              </div>
              <div className="flex gap-3">
                <motion.button
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-white rounded-lg  font-semibold transition-all text-sm sm:text-base text-rose-800 border-2 hover:text-white hover:bg-rose-800"
                >
                  BUY NOW
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="px-4 py-2 sm:px-6 sm:py-3 border-2 border-rose-800 rounded-lg text-white hover:bg-white hover:text-rose-800 transition-all text-sm sm:text-base bg-rose-800"
                >
                  Add to cart
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black/50 hover:bg-green-600 
                  p-2 sm:p-3 rounded-full text-xl sm:text-2xl text-white transition-all z-20"
        onClick={goToPrev}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black/50 hover:bg-green-600 
                  p-2 sm:p-3 rounded-full text-xl sm:text-2xl text-white transition-all z-20"
        onClick={goToNext}
      >
        &gt;
      </button>
      {/* Slide indicators */}
      <div className="flex gap-2 absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all
                      ${
                        idx === current
                          ? "bg-green-500 scale-125"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
