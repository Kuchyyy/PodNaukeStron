import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronDown, Plus} from "lucide-react";
import { useState } from "react";



const Nav = () => {

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
  
    useMotionValueEvent(scrollY, "change", (now) => {
      const previous = scrollY.getPrevious() ?? 0;
  
      if (now > previous && now > 700) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    });
    

    return (
      <motion.div 
      animate={hidden ? { y: -80 } : { y: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="max-w-[1440px] fixed top-2 inset-x-2 mx-auto z-50 font-montserrat">
        <div className="w-full bg-zinc-900/90 backdrop-blur-md rounded-lg p-4 text-white flex justify-between items-center">
          <h1 className="text-2xl font-bold">KHY</h1>
  
          <nav>
            <ul className="flex gap-10 relative">
  
              <li className="cursor-pointer">Home</li>
  
              <li className="relative group cursor-pointer gap-1">
                About
                <Plus size={16} className='inline ml-1 mb-0.5 group-hover:rotate-45 transition duration-300' />

                <div className="absolute -left-24 top-full w-100 h-8 group-hover:block hidden  "></div>

                    {!hidden && (<div
                    className='
                        absolute -left-24 top-13
                        w-100 rounded-md bg-zinc-800/95 p-3
                        opacity-0 invisible -translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible
                        transition-all duration-500
                    '
                    >
                    <div className="flex gap-4 ">
                        <div className="flex flex-1 bg-stone-100 p-2 rounded-md ">

                        </div>
                        <div className="flex flex-col flex-1">
                            <p className="hover:underline cursor-pointer p-1">Team</p>
                            <p className="hover:underline cursor-pointer p-1">History</p>
                            <p className="hover:underline cursor-pointer p-1">Values</p>
                        </div>
                    </div>
                    </div> )}
                </li>

  
              <li className="relative group cursor-pointer gap-1">
                Services
                <ChevronDown size={16} className='inline ml-1 group-hover:rotate-180 transition duration-300' />


                <div className="absolute -left-50 top-full w-100 h-8 group-hover:block hidden"></div>
                
                {!hidden && (<div  className="
                        absolute -left-50 top-13
                        w-100 rounded-md bg-zinc-800/95 p-3
                        opacity-0 invisible translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible
                        transition-all duration-500
                    "
                    >
                <div className="flex ">
                    <div className="flex flex-1 flex-col">
                        <p className="hover:underline cursor-pointer p-1">Design</p>
                        <p className="hover:underline cursor-pointer p-1">Development</p>
                        <p className="hover:underline cursor-pointer p-1">Consulting</p>
                    </div>
                    <div className="flex flex-1 bg-rose-200 p-2 rounded-md ">

                    </div>
                </div>
                </div> )}
              </li>
  
              <li className=" cursor-pointer">Contact</li>
            </ul>
          </nav>
  
          <h1 className="text-2xl font-bold">PAGE</h1>
        </div>
      </motion.div>
    )
  }
  
  export default Nav
  