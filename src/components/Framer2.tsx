"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Framer2 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // start widać, koniec scrolla
  });

  // Animacja zmieniająca scale + opacity w zależności od scrolla
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <div className="space-y-24 p-8">
      {/* 1. Fade-in gdy element pojawia się w widoku */}
      <div className="w-full h-dvh bg-zinc-950"/>
      <div className="w-full h-dvh">
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="bg-orange-500 text-white p-8 rounded-lg shadow-md"
        >
            Scrolluję i pojawiam się 🔥
        </motion.div>

      </div>

      {/* 2. Slide z lewej przy scrollu */}
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-blue-500 text-white p-8 rounded-lg shadow-md"
      >
        Wjeżdżam z lewej 👉
      </motion.div>

      {/* 3. Sekcja reagująca na scroll (scale/opacity) */}
      <div ref={ref}>
        <motion.div
          style={{ scale, opacity }}
          className="bg-green-500 text-white p-12 rounded-lg shadow-lg text-center font-bold text-2xl"
        >
          Skroluj mnie i zobacz efekt ✨
        </motion.div>
      </div>

      {/* 4. Infinite fade-in/out przy powrocie do widoku */}
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.6 }}
        className="bg-purple-600 text-white p-8 rounded-lg shadow-md"
      >
        Za każdym razem gdy mnie zobaczysz — pojawiam się na nowo 🔁
      </motion.div>
    </div>
  );
};

export default Framer2;
