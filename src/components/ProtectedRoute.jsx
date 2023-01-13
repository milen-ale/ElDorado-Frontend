import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useToken } from '../redux/Auth/useAuthUser';

const ProtectedRoute = () => {
  const isTokenSet = useToken();
  return isTokenSet ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
