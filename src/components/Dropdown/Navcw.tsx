import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react";



const Navcw = () => {

    const { scrollY } = useScroll();
    const [ visible, setVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (now) => {
        const prev = scrollY.getPrevious() ?? 0;
        if (now > prev) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    });

  return (

    <motion.div
    animate={visible ? { y: 0 } : { y: -100 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="fixed top-2 inset-x-2 mx-auto z-50 max-w-[1440px] font-montserrat bg-amber-800 rounded-sm p-4 text-white text-center">
     
    siema
    </motion.div>
  )
}

export default Navcw;