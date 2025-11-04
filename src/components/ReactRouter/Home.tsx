
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-dvh flex flex-col gap-6 items-center justify-center text-3xl font-numans bg-linear-65 from-purple-500 to-pink-500">
      Home

      <div className="flex gap-4">
        <Link to="/about" className="px-4 py-2 bg-white text-black rounded-md">
          About
        </Link>

        <Link to="/offer" className="px-4 py-2 bg-white text-black rounded-md">
          Offer
        </Link>
      </div>
    </div>
  );
};

export default Home;
