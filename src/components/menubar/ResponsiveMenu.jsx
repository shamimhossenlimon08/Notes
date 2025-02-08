import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const menuraf = useRef(null);
  useEffect((e) => {
    const handler = (e) => {
      if (!menuraf.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  const closeSidebar = () => {
    setShowMenu(false);
  };
  return (
    <>
      <div
        ref={menuraf}
        className={`w-1/2 h-screen bg-slate-500 fixed top-0 left-0 rounded-sm  transition-all flex flex-col justify-between ${
          showMenu ? "left-0" : "left-[-100%]"
        }`}
      >
        <div>
          <div className="sm:hidden">
            <ul className="flex flex-col gap-x-4 px-4 py-5 ">
              <li className="  text-white font-sans font-medium text-lg bg-lime-600 px-2 mb-2 border-b border-black hover:text-fuchsia-950 transition-all duration-400">
                <Link to="/" onClick={closeSidebar}>
                  Home
                </Link>
              </li>
              <li className=" text-white font-sans font-medium text-lg bg-lime-600 mb-2 px-2  border-b border-black hover:text-fuchsia-950 transition-all duration-400">
                <Link to="/notes" onClick={closeSidebar}>
                  Notes
                </Link>
              </li>
              <li className=" text-white font-sans font-medium text-lg  bg-lime-600 px-2 border-b border-black hover:text-fuchsia-950 transition-all duration-400">
                <Link to="/contact" onClick={closeSidebar}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <h3 className=" text-white text-lg font-semibold pb-4">
            this is sidebar
          </h3>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
