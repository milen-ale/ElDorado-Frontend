import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import CarDetails from '../pages/CarDetails';
import BookingPage from '../pages/BookingPage';
import ReservationPage from '../pages/ReservationPage';
import { getCars } from '../redux/Home/home';

const AppRouter = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = (flag) => {
    if (flag === true || flag === false) setOpen(flag);
    else setOpen(!open);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <div className="flex w-full">
      <NavBar open={open} handleOpen={handleOpen} />
      <div className="p-7 px-2 flex-1 h-screen overflow-y-scroll">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="car-details/:id" element={<CarDetails open={open} />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </div>
  );
};
export default AppRouter;
