"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Tekst = () => {
  const container = useRef(null);

  // animacja na przestrzeni 100vh (jeden ekran)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 200]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  

  return (
    <div >
      {/* obrazek w tle */}
      <img
        src="firma.png"
        alt=""
        className="fixed inset-0 w-screen h-screen object-cover -z-10"
      />

      {/* sekcja 1 z animacją */}
      <div
        ref={container}
        className="h-[200vh] w-screen bg-white mix-blend-screen"
      >
        <div className="sticky top-0 h-screen flex justify-center items-center">
          <motion.h1
            style={{ scale, opacity }}
            className="text-8xl font-extrabold origin-center"
          >
            BRADOS
          </motion.h1>
        </div>
      </div>

      {/* sekcja 2 (ostatnia) */}
      <div className="h-screen bg-white flex justify-center items-center">
        <p className="text-4xl">Druga sekcja</p>
      </div>
    </div>
  );
};

export default Tekst;
