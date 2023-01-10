import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import { getCars } from '../redux/Home/home';
import CarDetails from '../pages/CarDetails';

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
            element={<h1>Booking component will be here</h1>}
          />
          <Route
            path="/reservation"
            element={<h1>Reservation component will be here</h1>}
          />
          <Route
            path="/login"
            element={<h1>Login component will be here</h1>}
          />
        </Routes>
      </div>
    </div>
  );
};
export default AppRouter;
