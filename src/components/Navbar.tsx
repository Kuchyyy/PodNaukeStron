import { useState, useEffect, useRef } from 'react'
import { useWindowScroll } from "react-use";
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Contact'];

const Navbar = () => {

  const [lastScroll, setLastScroll] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const { y: currentScroll } = useWindowScroll();
  const navContainerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if( currentScroll === 0 ){
      setShowNav(true);
    } else if( currentScroll > lastScroll && isOpen === false ){
      setShowNav(false);
    } else if( currentScroll < lastScroll ){
      setShowNav(true);
    }

    setLastScroll(currentScroll);
  }, [currentScroll, lastScroll, isOpen]);

  useEffect(() => {
    gsap.to(navContainerRef.current,
      {
        y: showNav ? 0 : -100,
        opacity: showNav ? 1 : 0,
        duration: 1,
        ease: "power2.out"
      }
    )
  }
  , [showNav]);

  const menuRef = useRef(null);

  useEffect(() => {
    if(isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 1,
        ease: "power2.out",
        display: 'block'
      });
    } else {
      gsap.to(menuRef.current, {
        x: '100%',
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [isOpen]);



  return (
    <div className='fixed w-screen' ref={navContainerRef}>
        <div className={`mx-4 my-2 flex justify-between items-center h-12 rounded-xl bg-sky-300 px-4
        ${isOpen ? "opacity-0 duration-300" : "opacity-100 duration-300"}`}>
            <h1>Navbar</h1>
            <div>
              <div className='hidden sm:flex sm:gap-4'>
                {navItems.map( (item, index) => (
                  <a
                  key={index} 
                  href={`#${item.toLowerCase()}`}
                  className=''>
                    {item}
                  </a>
                ))}
              </div>
              <button onClick={() => setIsOpen(!isOpen)} className='sm:hidden'>
                {isOpen ? <X /> : <Menu />}
                 
              </button>

            </div>
        </div>

      <div
        ref={menuRef}
        className="fixed w-screen h-dvh right-0 top-0 bg-sky-200  justify-center text-2xl"
        style={{ transform: "translateX(100%)" }}
        >
          <div className="absolute top-4 right-4">
            <button onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>
          <div className='flex flex-col items-end mr-4 mt-16'>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="my-2"
              >
                {item}
              </a>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Navbar