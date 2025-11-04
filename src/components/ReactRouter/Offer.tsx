import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="w-screen h-dvh flex flex-col gap-6 items-center justify-center text-3xl font-numans bg-linear-65 from-yellow-500 to-orange-500">
      Offer

      <div className="flex gap-4">
        <Link to="/" className="px-4 py-2 bg-white text-black rounded-md">
          Home
        </Link>

        <Link to="/about" className="px-4 py-2 bg-white text-black rounded-md">
          About
        </Link>
      </div>
    </div>
  );
};

export default Offer;
