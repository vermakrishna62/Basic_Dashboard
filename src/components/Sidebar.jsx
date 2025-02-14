import React, { useState } from "react";
import { LuBox, LuUser, LuMessageSquare, LuCalendar } from "react-icons/lu";
import { FaSuitcase } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/members", name: "Members", icon: TbUsers },
    { id: 3, path: "/messages", name: "Messages", icon: LuMessageSquare },
    { id: 4, path: "/projects", name: "Projects", icon: FaSuitcase },
    { id: 5, path: "/clients", name: "Clients", icon: LuUser },
    { id: 6, path: "/work", name: "Meetings", icon: LuCalendar },
  ];

  return (
    <div className="w-16 md:w-56 fixed left -0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white ">
      {/* Logo */}
      <div className="mb-8">
      <Logo />
      <span className="md:hidden block px-2 text-3xl font-extrabold">S</span>
      </div>

      {/* Navigation Links */}
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((item, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 
                ${activeLink === index ? "bg-indigo-100 text-indigo-500" : ""}`}
          >
            <Link
              to={item.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{item.icon()}</span>
              <span className="text-sm text-gray-500 hidden md:flex">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-1 cursor-pointer">
  <p className="flex items-center justify-center text-sm font-semibold text-white py-2 px-10 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
    <span className="text-lg animate-bounce">❓</span>
    <span className="ml-2 whitespace-nowrap">Need Help?</span>
  </p>
</div>

    </div>
  );
};

export default Sidebar;
