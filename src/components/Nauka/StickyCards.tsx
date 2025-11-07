import { motion, useScroll, useTransform } from "framer-motion";

export default function StickyCard() {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div className="h-[300vh] w-full flex justify-center items-start pt-40">
      <div className="relative w-[400px] ">
        
        <motion.div
          style={{ scale }}
          className="sticky top-20 h-40 bg-red-500 rounded-xl text-white flex items-center justify-center shadow-xl "
        >
          Card 1
        </motion.div>

        <motion.div
          style={{ scale }}
          className="sticky top-24 h-40 bg-blue-500 rounded-xl text-white flex items-center justify-center shadow-xl"
        >
          Card 2
        </motion.div>

        <motion.div
          style={{ scale }}
          className="sticky top-28 h-40 bg-green-500 rounded-xl text-white flex items-center justify-center shadow-xl"
        >
          Card 3
        </motion.div>

        <motion.div
          style={{ scale }}
          className="sticky top-32 h-40 bg-purple-500 rounded-xl text-white flex items-center justify-center shadow-xl"
        >
          Card 4
        </motion.div>

        <motion.div
          style={{ scale }}
          className="sticky top-36 h-40 bg-orange-500 rounded-xl text-white flex items-center justify-center shadow-xl"
        >
          Card 5
        </motion.div>

      </div>
    </div>
  );
}
