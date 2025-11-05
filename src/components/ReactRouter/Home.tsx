import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-dvh flex flex-col gap-6 items-center justify-center text-3xl font-numans bg-linear-65 from-purple-500 to-pink-500">

      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md ${
            isActive
              ? "bg-yellow-300 text-black font-bold border border-black"
              : "bg-white text-black"
          }`
        }
      >
        Home
      </NavLink>

      <div className="flex gap-4">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md ${
              isActive
                ? "bg-yellow-300 text-black font-bold border border-black"
                : "bg-white text-black"
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/offer"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md ${
              isActive
                ? "bg-yellow-300 text-black font-bold border border-black"
                : "bg-white text-black"
            }`
          }
        >
          Offer
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
