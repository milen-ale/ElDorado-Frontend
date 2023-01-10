import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const AppRouter = () => (
  <div className="flex w-screen">
    <NavBar />
    <div className="p-7 flex-1 h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
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

export default AppRouter;
