import { useState } from "react";
import { IoReorderThreeOutline, IoClose } from "react-icons/io5";
const Navbar = () => {

  return (
    <div className="bg-richblack-800 px-4 py-5 flex justify-between items-center">
      <div className="text-white font-bold text-xl">PREDOCTOR.</div>
      <div className="hidden md:flex space-x-5">
        <ul className="flex space-x-5">
          <li className="text-[#ede7e3] py-2 cursor-pointer md:mx-10">
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
