"use client";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const NavZFramer = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 100) {
      // scroll w dół
      setHidden(true);
    } else {
      // scroll w górę
      setHidden(false);
    }
  });

  return (
    <motion.nav
      animate={hidden ? { y: "-120%" } : { y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-16 flex items-center justify-center shadow-lg z-50 mt-2"
    >
        <div className="w-[90%] mx-auto max-w-7xl bg-orange-500 text-white flex items-center justify-center h-full rounded-xl">
            <h1 className="text-xl font-bold">🍊 My Navbar</h1> 
        </div>
    </motion.nav>
  );
};

export default NavZFramer;
