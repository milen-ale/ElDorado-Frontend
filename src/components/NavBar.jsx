import React from 'react';
import logo from '../assets/logo.png';

const NavBar = () => (
  <div
    className="flex flex-col bg-cyan-200
    drop-shadow-xl h-screen w-[200px] "
  >
    <img src={logo} alt="" />
  </div>
);

export default NavBar;
