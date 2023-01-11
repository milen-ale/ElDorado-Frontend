import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api/api';

// Actions
const RESERVATIONS = 'RESERVATIONS';

const initialState = {

  reservations: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  message: '',
  error: null,

};

// Thunks

export const bookCar = createAsyncThunk(RESERVATIONS, async ({ user_id: id, reservation }) => {
  try {
    return await api.reserveCar(id, reservation);
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
      }));
  },

});

export const carReservations = (state) => state.reservations.reservations;

export const allStatus = (state) => state.reservations.status;

export default reservationsSlice.reducer;
