import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import CarDetails from '../pages/CarDetails';
import { getCars } from '../redux/Home/home';

const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <div className="flex w-full">
      <NavBar />
      <div className="p-7 flex-1 h-screen overflow-y-scroll">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="car-details/:id" element={<CarDetails />} />
          <Route
            path="/booking"
            element={<h1>Booking component will be here</h1>}
          />
          <Route
            path="/reservation"
            element={<h1>Reservation component will be here</h1>}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </div>
  );
};
export default AppRouter;
