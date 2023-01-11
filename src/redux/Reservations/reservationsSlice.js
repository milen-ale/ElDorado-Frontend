import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api/api';

// Actions
const RESERVE_CAR = 'RESERVE_CAR';
const GET_RESERVATIONS = 'GET_RESERVATIONS';
const DELETE_RESERVATION = 'DELETE_RESERVATION';
const initialState = {
  reservations: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  message: '',
  error: null,
};
// Thunks
export const bookCar = createAsyncThunk(RESERVE_CAR, async ({ userId, reservation }) => {
  try {
    return await api.reserveCar(userId, reservation);
  } catch (error) {
    return error.message;
  }
});
export const getReservations = createAsyncThunk(GET_RESERVATIONS, async (userId) => {
  try {
    return await api.fetchReservations(userId);
  } catch (error) {
    return error.message;
  }
});
export const deleteReservation = createAsyncThunk(DELETE_RESERVATION,
  async ({ userId, reservationId }) => {
    try {
      return await api.deleteReservation(userId, reservationId);
    } catch (error) {
      return error.message;
    }
  });

// Reducer
const reservationsSlice = createSlice({

  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bookCar.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(bookCar.fulfilled, (state, action) => ({
        ...state,
        reservations: [...state.reservations, action.payload.data],
        message: action.payload.message,
        status: 'succeeded',
      }))
      .addCase(bookCar.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(getReservations.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getReservations.fulfilled, (state, action) => ({
        ...state,
        reservations: action.payload,
        message: action.payload.message,
        status: 'succeeded',
      }))
      .addCase(getReservations.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(deleteReservation.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(deleteReservation.fulfilled, (state, action) => ({
        ...state,
        reservations: [...state.reservations
          .filter((reservation) => reservation.id !== action.payload.data.id)],
        message: action.payload.message,
        status: 'succeeded',
      }))
      .addCase(deleteReservation.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },

});

export const carReservations = (state) => state.reservations.reservations;

export const allStatus = (state) => state.reservations.status;
export const allMessages = (state) => state.reservations.message;

export default reservationsSlice.reducer;
