import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ChevronLeftIcon,
  HomeIcon,
  CreditCardIcon,
  BookmarkIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import RandomLuxLogo from './RandomLuxLogo';
import whiteLogo from '../assets/logo-transparent-white.png';

const NavBar = () => {
  const [open, setOpen] = useState(true);
  const menu = [
    {
      id: 1,
      name: 'Home',
      icon: <HomeIcon className="w-7" />,
      path: '/',
    },
    {
      id: 2,
      name: 'Booking',
      icon: <CreditCardIcon className="w-7" />,
      path: '/booking',
    },
    {
      id: 3,
      name: 'Reservation',
      icon: <BookmarkIcon className="w-7" />,
      path: '/reservation',
    },
  ];
  return (
    <div
      className={`${
        open ? 'w-72' : 'w-20'
      } h-screen bg-black/90 relative drop-shadow-xl duration-300`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`absolute flex justify-center items-center bg-amber-700 p-0 hover:border-black top-9 w-6 h-6 border rounded-full cursor-pointer -right-3 ${
          !open && 'rotate-180'
        }`}
      >
        <ChevronLeftIcon className="w-5 stroke-white" />
      </button>

      {open ? (
        <div>
          <img
            src={whiteLogo}
            alt="sidebar-white-logo"
            className="w-full h-full"
          />
        </div>
      ) : (
        <RandomLuxLogo />
      )}
      <ul className="pt-6 flex flex-col justify-center">
        {menu.map(({
          id, name, icon, path,
        }) => (
          <li className="" key={id}>
            <NavLink
              end
              to={path}
              className={({ isActive }) => `${
                isActive && 'bg-amber-600/90 rounded-md'
              } flex gap-x-4 text-sm text-white items-center ${
                !open
                  && 'justify-center w-max p-1 mx-auto transition-[display] duration-100'
              } cursor-pointer p-3 my-2 hover:bg-amber-600/90 hover:text-black hover:rounded-md`}
            >
              {icon}
              <span className={`${!open && 'hidden'}`}>{name}</span>
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink
            end
            to="/login"
            className={({ isActive }) => `${
              isActive && 'bg-amber-600/90 rounded-md '
            } flex gap-x-4 text-sm text-white items-center ${
              !open
                && 'justify-center w-max p-1 mx-auto transition-[display] duration-100'
            } cursor-pointer p-3 my-2 hover:bg-amber-600/90 hover:text-black hover:rounded-md`}
          >
            <ArrowRightOnRectangleIcon className="w-7" />
            <span className={`${!open && 'hidden'}`}>Login</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
