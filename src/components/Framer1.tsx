import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const FramerShowcase = () => {
  const [showBox, setShowBox] = useState(true);

  const list = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-12 p-8">
      {/* 1. Fade in + slide up */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-orange-500 text-white p-4 rounded-lg justify-between flex"
      >
        Fade in + slide up
        {/* 2. Hover i Tap */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg"
        >
          Kliknij mnie
        </motion.button>
      </motion.div>

      {/* 3. Infinite bounce */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="text-2xl text-green-600"
      >
        ⬇️ Scrolluj
      </motion.div>

      {/* 4. Staggered list */}
      <motion.ul
        variants={list}
        initial="hidden"
        animate="show"
        className="space-y-2"
      >
        {["A", "B", "C"].map((letter) => (
          <motion.li
            key={letter}
            variants={item}
            className="bg-gray-200 p-2 rounded"
          >
            {letter}
          </motion.li>
        ))}
      </motion.ul>

      {/* 5. Drag and Drop */}
      <motion.div
        drag
        dragConstraints={{ left: -0, right: 0, top: -0, bottom: 0 }}
        className="w-20 h-20 bg-pink-500 rounded-lg cursor-grab flex items-center justify-center text-white font-bold"
      >
        Drag
      </motion.div>

      {/* 6. Rotate */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="w-20 h-20 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold"
      >
        🔄
      </motion.div>

      {/* 7. Pulse */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center text-white font-bold"
      >
        ❤️
      </motion.div>

      {/* 8. AnimatePresence */}
      <div>
        <button
          onClick={() => setShowBox(!showBox)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Toggle Box
        </button>
        <AnimatePresence>
          {showBox && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-40 h-20 bg-green-500 text-white flex items-center justify-center rounded mt-4"
            >
              Hello 👋
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 9. Path drawing */}
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke="orange"
          strokeWidth="6"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        />
      </motion.svg>

      {/* 10. Layout animation */}
      <motion.div
        layout
        className="w-full bg-gray-200 p-4 rounded-lg"
      >
        Kliknij, a elementy się przesuną ✨
      </motion.div>
    </div>
  );
};

export default FramerShowcase;
