import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { getCars } from '../redux/Home/home';
import CarDetails from '../pages/CarDetails';
import BookingPage from '../pages/BookingPage';

const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <div className="flex">
      <NavBar />
      <div className="sm:p-2 md:p-3 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="car-details/:id" element={<CarDetails />} />
          <Route
            path="/booking"
            element={<BookingPage />}
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
