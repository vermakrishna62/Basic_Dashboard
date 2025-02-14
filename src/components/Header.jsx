import React from 'react'
import { GoBell } from 'react-icons/go'
import HeaderText from './HeaderText';

const Header = () => {
  return (
    <div className="sticky top-0 left-[250px] w-[calc(100%-0px)] flex justify-between items-center bg-white p-4 shadow-md z-50">
      <div className=' px-5'>
        <HeaderText />
      </div>
      <div className="flex items-center space-x-5">
        <div className="hidden md:flex">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        <div className="flex items-center space-x-5">
          <button className="relative text-2xl text-gray-600">
            <GoBell size={28} />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center 
            bg-indigo-600 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">9</span>
          </button>
          <img 
            className="w-8 h-8 rounded-full border-2 border-indigo-400" 
            src="https://randomuser.me/api/portraits/women/50.jpg" alt="" 
          />
        </div>
      </div>
    </div>
  )
}

export default Header;
