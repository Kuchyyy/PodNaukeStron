import gsap from "gsap"
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Tekst = () => {

  const container = useRef(null);
  const title = useRef(null);

  useEffect(() => {
    gsap.to(title.current, {
      scale: 900,
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=10000",
        scrub: true,
        pin: true,
      },
    });
  }, []);
  

  return (
    
    <div className="min-h-screen">
      <img src="firma.png" alt="" className="fixed inset-0 h-screen w-screen object-cover" />


      <div ref={container}  className="h-screen w-screen flex justify-center items-center mix-blend-screen bg-stone-100 z-10">
        <h1 ref={title} className="text-8xl font-bold">SONOS</h1>
      </div>
    </div>
  )
}

export default Tekst