import React from 'react';
import navImg from "../assets/logo.png";
import dollerImg from "../assets/dollar.png";
const Navbar = ({availableBalance}) => {
  return (
    <div className="navbar max-w-[1200px] mx-auto">
      <div className="flex-1">
        <a className="text-xl">
          <img className="w-[60px] h-[60px]" src={navImg} alt="" />
        </a>
      </div>
      <div className="flex items-center">
        <span>{availableBalance}</span> <span className="ml-2">Coin</span>
        <img className="w-[20px] h-[20px] m-2" src={dollerImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;