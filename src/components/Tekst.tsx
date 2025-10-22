import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Tekst = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textScale = useTransform(scrollYProgress, [0, 1], [1, 12]);

  return (
    <div className="w-full">
      <div
        ref={sectionRef}
        className="relative h-[200vh] bg-black flex items-center justify-center overflow-hidden"
      >
        {/* Stałe zdjęcie w tle */}
        <img
          src="/firma.png"
          alt="firma"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Litery jako maska */}
        <motion.h1
          style={{ scale: textScale }}
          className="text-[20vw] font-extrabold uppercase text-white mix-blend-difference relative z-10"
        >
          BRADOS
        </motion.h1>
      </div>
    </div>
  );
};

export default Tekst;
