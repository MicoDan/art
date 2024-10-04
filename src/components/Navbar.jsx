import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = function () {
    setNav(!nav);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-4 md:px-8 py-4">
       
        <h1 className="font-bold text-3xl md:inline-block hidden">Hope Gallery</h1>

        <div
          className={`${
            nav
              ? "flex gap-8 z-10 flex-col md:flex-row bg-white border-[1px] md:border-none items-start border-gray-500 p-4 absolute md:static w-4/5 h-2/5 md:w-auto top-10 left-10 transition-all ease-in delay-150 md:transition-none"
              : "flex gap-8 z-10 flex-col md:flex-row bg-white border-[1px] md:border-none items-start border-gray-500 p-4 absolute md:static w-4/5 h-2/5 md:w-auto top-10 left-[-100%] transition-all ease-in-out delay-150 md:transition-none"
          }`}
        >
          <div className="flex justify-between w-full md:hidden">
            <h1 className="font-bold text-3xl">Hope Gallery</h1>
            <span onClick={handleClick} className="text-3xl cursor-pointer">
              ✖
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-6 mt-4 md:mt-0">
            <Link
              to="/"
              className="text-2xl md:text-base font-semibold md:font-normal text-black"
            >
              Home
            </Link>
            <Link
              to="/marketplace"
              className="text-2xl md:text-base font-semibold md:font-normal text-black"
            >
              Marketplace
            </Link>
          </div>
        </div>


        <div className="md:hidden">
          <span
            onClick={handleClick}
            className="text-3xl cursor-pointer"
          >
            ☰ 
          </span>
        </div>
      </nav>
    </>
  );
}
