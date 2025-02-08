import React, { useState } from "react";
import { HiMenuAlt1, HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "/src/assets/image/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="w-full bg-cyan-700">
        <div className="container max-w-screen-xl flex justify-between items-center">
          <div className="pl-1 pt-1">
            <a href="#">
              <img
                src={Logo}
                alt="notes Image"
                className="h-10 w-12 bg-lime-500 pl-2 rounded-full shrink-0"
              />
            </a>
          </div>
          <div className="hidden sm:pr-3 sm:block">
            <ul className="flex gap-x-4 ">
              <li className=" text-white font-sans font-medium text-lg">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white font-sans font-medium text-lg">
                <Link to="/notes">Notes</Link>
              </li>
              <li className="text-white font-sans font-medium text-lg">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="text-4xl pr-2 cursor-pointer sm:hidden">
            {showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} />
            ) : (
              <HiMenuAlt2 onClick={toggleMenu} />
            )}
          </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </>
  );
};

export default Navbar;
