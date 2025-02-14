import React from "react";
import logo from "../assets/logo.png"; // Ensure logo is placed in `src/assets/`

const Logo = () => {
  return (
    <div className="flex ml-6 items-center space-x-4">
      {/* Large screen logo */}
      <img
        src={logo}
        alt="Stratos Logo"
        className="w-32 h-auto rounded-full hidden md:block object-contain" 
      />
    </div>
  );
};

export default Logo;
