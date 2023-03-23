import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="max-w-6xl mx-auto h-[80px] bg-[#111111] py-2 px-2 flex justify-between items-center sticky top-0 left-0 z-50">
      <div>
        <h1 className="md:text-3xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-700 ">
          Meals App
        </h1>
      </div>
      <div className="flex gap-4 md:gap-8 lg:gap-14 text-sm md:text-md lg:text-lg tracking-wide text-gray-400 font-poppins">
        <Link to={"/"} className="hover:text-gray-100">
          Home
        </Link>
        <Link to={"/categories"} className="hover:text-gray-100">
          Categories
        </Link>
        <Link to={"random"} className="hover:text-gray-100">
          Random
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
