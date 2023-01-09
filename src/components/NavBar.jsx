import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import back from '../assets/control.png';
import home from '../assets/Home.png';
import booking from '../assets/Booking.png';
import reservation from '../assets/Reservation.png';
import login from '../assets/Login.png';

const NavBar = () => {
  const [open, setOpen] = useState(true);
  const menu = [
    { name: 'Home', src: home, path: '/' },
    { name: 'Booking', src: booking, path: '/booking' },
    { name: 'Reservation', src: reservation, path: '/reservation' },
  ];
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="sidebar flex">
      <div
        className={`${
          open ? 'w-72' : 'w-20'
        } h-screen bg-gray-300 relative drop-shadow-xl duration-300`}
      >
        <img
          src={back}
          alt="back"
          className={`absolute top-9 w-7 border-2 border-gray-300 rounded-full cursor-pointer -right-3 ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />
        <div>
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
        <ul className="pt-6">
          {menu.map((data, index) => (
            <li
              key={index}
              className={`text-sm text-black flex items-center gap-x-4 cursor-pointer p-3 my-2 hover:bg-light-blue-50 hover:rounded-md ${
                location.pathname === data.path && 'bg-light-blue-50 rounded-md'
              }`}
              onClick={() => navigate(data.path)}
            >
              <img src={data.src} alt="menu-icon" className="w-7" />
              <span className={`${!open && 'hidden'}`}>{data.name}</span>
            </li>
          ))}
          <li
            className={`text-sm text-black flex items-center gap-x-4 cursor-pointer p-3 my-2 hover:bg-light-blue-300 rounded-md ${
              location.pathname === '/login' && 'bg-light-blue-300 rounded-md'
            }`}
            onClick={() => navigate('/login')}
          >
            <img src={login} alt="menu-icon" className="w-7" />
            <span className={`${!open && 'hidden'} origin-right duration-200`}>
              Login
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
