import { motion, useTransform, MotionValue } from "framer-motion";

interface CardProps {
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export default function Card({ index, progress, range, targetScale }: CardProps) {

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className=" sticky top-0 w-full h-full">
      <motion.div
        style={{
          scale,
          top: `calc(10vh + ${index}rem)`,
          position: "relative",
          zIndex: index,
        }}
        className="bg-blue-500 text-white p-6 rounded-lg shadow-lg border border-t-gray-300 aspect-square"
      >
        <h2 className="text-xl font-bold mb-2">Sticky Card {index + 1}</h2>
        <p>Scale is based on individual scroll range.</p>
      </motion.div>
    </div>
  );
}
