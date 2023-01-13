import React from 'react'
import { useToken } from '../redux/Auth/useAuthUser'
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isTokenSet  = useToken()
    return isTokenSet ? <Outlet/>:<Navigate to='/login'/>
}

export default ProtectedRoute