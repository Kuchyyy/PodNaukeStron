import { useScroll } from "framer-motion";
import Card from "./Card";

export default function StickyCard() {

  const { scrollYProgress } = useScroll();
  const cardsCount = 5;

  return (
    <div className="h-[300vh] w-full flex justify-center items-start pt-40">
      <div className="relative  flex flex-col">
        {[...Array(cardsCount)].map((_, i) => {
          const targetScale = 1 - (cardsCount - i) * 0.05;
          const range: [number, number] = [i * (1 / cardsCount), 1];

          return (
            <Card
              key={i}
              index={i}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
}
