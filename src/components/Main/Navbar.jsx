import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsBuildingCheck } from "react-icons/bs";
import { GrConfigure } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import {
  MdPayment,
  MdCarRepair,
  MdLanguage,
  MdOutlineAccountCircle,
  MdOutlineLocalOffer,
} from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoCarSportOutline } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 absolute w-full z-10">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} color="white" />
        </div>
      </div>

      <h1 className="text-xl sm:text-2xl lg:text-3xl px-2 duration-100 text-gray-300 border-l-4 border-gray-200 hover:border-r-4 hover:border-l-0 cursor-pointer">
        Plus
        <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-50">
          Drive+
        </span>
      </h1>

      <div className="hidden md:flex items-center py-2 text-gray-50 cursor-pointer">
        <MdOutlineAccountCircle
          size={25}
          className="mr-2 hover:scale-110 duration-200"
        />
        <MdLanguage size={25} className="mr-2 hover:scale-110 duration-200" />
        <IoIosHelpCircleOutline
          size={25}
          className="hover:scale-110 duration-200"
        />
      </div>

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-full h-[350px] sm:h-[300px] md:h-[220px] lg:h-[150px] bg-white z-10 duration-300"
            : "fixed top-[-100%] left-0 w-full xl:h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(false)}
          size={25}
          className="absolute right-4 top-5 cursor-pointer"
        />
        <h2 className="text-2xl p-4 text-center">
          Plus<span className="font-bold">Drive+</span>
        </h2>
        <nav>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap justify-center items-center lg:gap-10   p-4 text-gray-800">
            <ScrollLink
              to="cars"
              smooth={true}
              duration={500}
              onClick={() => setNav(false)}
            >
              <li className="text-xl py-4 lg:py-1 flex items-center cursor-pointer hover:scale-105 duration-200 border-b-2 border-white hover:border-gray-500">
                <IoCarSportOutline size={25} className="mr-4 " /> Cars
              </li>
            </ScrollLink>
            <Link to="/configurator" onClick={() => setNav(false)}>
              <li className="text-xl py-4 lg:py-1 flex items-center cursor-pointer hover:scale-105 duration-200 border-b-2 border-white hover:border-gray-500">
                <GrConfigure size={25} className="mr-4" /> Configurator
              </li>
            </Link>
            <ScrollLink
              to="collection"
              smooth={true}
              duration={500}
              onClick={() => setNav(false)}
            >
              <li className="text-xl py-4 lg:py-1 flex items-center cursor-pointer hover:scale-105 duration-200 border-b-2 border-white hover:border-gray-500">
                <MdOutlineLocalOffer size={25} className="mr-4" /> Collection
              </li>
            </ScrollLink>
            <Link to="/leasing" onClick={() => setNav(false)}>
              <li className="text-xl py-4 lg:py-1 flex items-center cursor-pointer hover:scale-105 duration-200 border-b-2 border-white hover:border-gray-500">
                <MdPayment size={25} className="mr-4" /> Leasing
              </li>
            </Link>
            <Link to="/service" onClick={() => setNav(false)}>
              <li
                className="text-xl py-4 lg:py-1 flex items-center cursor-pointer hover:scale-105 duration-200 border-b-2 border-white hover:border-gray-500"
                duration-200
              >
                <MdCarRepair size={25} className="mr-4" /> Service
              </li>
            </Link>
            <Link to="/about" onClick={() => setNav(false)}>
              <li className="text-xl py-4 lg:py-1 flex items-center cursor-pointer hover:scale-105 duration-200 border-b-2 border-white hover:border-gray-500">
                <BsBuildingCheck size={25} className="mr-4" /> About Us
              </li>
            </Link>
            <Link to="/contact" onClick={() => setNav(false)}>
              <li className="text-xl py-4 lg:py-1 flex items-center cursor-pointer hover:scale-105 duration-200 border-b-2 border-white hover:border-gray-500">
                <RiContactsLine size={25} className="mr-4" /> Contact Us
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
