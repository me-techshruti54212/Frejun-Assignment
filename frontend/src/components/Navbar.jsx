import React from "react";
import logo from "../assets/frejun-seeklogo.png";
import {FaSearch} from "react-icons/fa";
export default function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="px-4 py-4  bg-[#f9f9f9] flex items-center border-b shadow-sm">
      <img src={logo} className="logo sm:block hidden"></img>
      <div className="relative mx-auto ">
        <FaSearch className=" ml-2 absolute sm:top-3 top-2" size={20} />
        <input
          className="pl-12 sm:py-2 py-1 pr-4 rounded-md sm:w-[400px] outline-none text-lg w-[320px]  shadow-md placeholder-black"
          type="text"
          placeholder="Search here by name or email ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </nav>
  );
}
