import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full fixed bg-white shadow-md p-8">
      <div className="mx-auto flex items-center justify-between p-9">
        {/* Logo */}
        <Link to='/'>
        <div  className="text-2xl ml-6 z-50 font-bold text-gray-900">  TenAi  </div>
        
        </Link>

        {/* Navigation Links */}
        <div className="hidden  md:flex gap-6 p-8 ">
        <Link to='/'>
        <div>  Solution </div>
        
        </Link>

          <Link to='/'>
          <div  className="text-gray-700 hover:text-blue-600">   Industries </div>
          
          </Link>

          <Link to='/'>
          <div  className="text-gray-700 hover:text-blue-600"> Resources </div>
          
          </Link>

          <Link to='/'>
          <div   className="text-gray-700 hover:text-blue-600">   Company  </div>
          
          </Link>

          <div   className="text-gray-700 hover:text-blue-600">   Company  </div>
          <Link to='/'>
          <div   className="text-gray-700 hover:text-blue-600">  Contact Us   </div>
          
          </Link>


        </div>

        {/* CTA Button */}
        <Link to='/'>

        <div
          className="hidden md:block p-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Let's Talk
        </div>
        </Link>


        {/* Mobile Menu Button (Optional) */}
        <button className="md:hidden text-gray-700 text-2xl">
          ☰
        </button>
      </div>
    </div>
  );
};

export default Header;
