import { useEffect, useRef } from "react";
import Lenis, { type LenisOptions } from "lenis";

type ReactLenisProps = {
  children: React.ReactNode;
  options?: LenisOptions;
  root?: boolean;
};

export function ReactLenis({ children, options, root }: ReactLenisProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis(options);
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [options]);

  // root = cała strona
  if (root) {
    return <>{children}</>;
  }

  // bez root = wrapper na scrollowalną sekcję
  return <div className="lenis-wrapper overflow-y-auto">{children}</div>;
}
