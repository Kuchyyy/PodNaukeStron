import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Framer3 = () => {
  const ref = useRef(null);

  // Śledzimy widoczność pomarańczowego kwadratu w viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "start 20%"], 
    // "start end" → kiedy górna krawędź kwadratu dotknie dołu ekranu
    // "end start" → kiedy dolna krawędź kwadratu dotknie góry ekranu
  });

  // Bar rośnie od 20% do 90% wysokości paska, w trakcie przewijania boxa
  const barHeight = useTransform(scrollYProgress, [0, 1], ["20%", "100%"]);

  return (
    <div className="bg-zinc-800">
      <div className="h-screen w-screen bg-zinc-800"></div>

      {/* Pomarańczowy box */}
      <motion.div
        ref={ref}
        className="bg-orange-500 w-80 h-140 mx-auto rounded-2xl shadow-md flex items-center justify-center flex-col px-5 gap-3"
      >
        {/* Pasek wewnątrz */}
        <div className="w-34 h-100 bg-zinc-700 rounded-2xl flex items-end overflow-hidden">
          <motion.div
            style={{ height: barHeight }}
            className="w-34 bg-white"
          />
        </div>
        <div className="text-white font-medium text-center">
            Scrolluję mnie, aby zobaczyć pasek rosnący 📈
        </div>
      </motion.div>

      <div className="h-screen w-screen bg-zinc-800"></div>

      <div className="bg-stone-100 flex flex-col gap-2 w-[96%] mx-auto">
        <div className="bg-stone-100 h-screen"></div>

        <div className="bg-zinc-700 h-screen flex items-end justify-start relative rounded-t-2xl">
          <p className="text-white text-8xl uppercase font-bold font-mono sticky bottom-0 p-2">
            tekst po lewej
          </p>
        </div>

        <div className="bg-zinc-700 h-screen flex items-end justify-end relative">
          <p className="text-white text-8xl uppercase font-bold font-mono sticky bottom-0">
            tekst po prawej
          </p>
        </div>

        <div className="bg-zinc-700 h-screen flex items-end justify-start relative rounded-b-2xl">
          <p className="text-white text-8xl uppercase font-bold font-mono sticky bottom-0">
            tekst po lewej
          </p>
        </div>

        <div className="bg-stone-100 h-screen"></div>
      </div>
    </div>

  );
};

export default Framer3;
