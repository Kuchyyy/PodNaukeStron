import { Link } from "react-router-dom";
import People1 from "./People1";


const About = () => {
  return (
    <div>
        <div className="w-screen h-dvh flex flex-col gap-6 items-center justify-center text-3xl font-numans bg-linear-65 from-green-500 to-blue-500">
          About
    
          <div className="flex gap-4">
            <Link to="/" className="px-4 py-2 bg-white text-black rounded-md">
              Home
            </Link>
    
            <Link to="/offer" className="px-4 py-2 bg-white text-black rounded-md">
              Offer
            </Link>
          </div>
        </div>
        <People1 />
    </div>
  );
};

export default About;
