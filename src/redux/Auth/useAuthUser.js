import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthenticatedUser, authenticatedUser } from './authSlice';

export const useToken = () => localStorage.getItem('token') || false;

export const useAuthUser = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(authenticatedUser);

  useEffect(() => {
    dispatch(getAuthenticatedUser());
  }, []);

  return currentUser;
};
