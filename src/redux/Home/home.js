import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

const SHOW_CARS = 'SHOW_CARS';
const SHOW_CAR = 'SHOW_CAR';

const initialState = {
  cars: [],
  car: {},
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Thunks
export const getCars = createAsyncThunk(SHOW_CARS, async () => {
  try {
    return await api.fetchCars();
  } catch (error) {
    return error.message;
  }
});

export const getCar = createAsyncThunk(SHOW_CAR, async () => {
  try {
    return await api.fetchCar();
  } catch (error) {
    return error.message;
  }
});

// Reducer
const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getCars.fulfilled, (state, action) => ({
        ...state,
        cars: action.payload,
        status: 'succeeded',
      }))
      .addCase(getCars.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(getCar.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getCar.fulfilled, (state, action) => ({
        ...state,
        car: action.payload,
        status: 'succeeded',
      }))
      .addCase(getCar.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const allCars = (state) => state.cars.cars;
export const allStatus = (state) => state.cars.status;
export const car = (state) => state.cars.car;

export default carsSlice.reducer;
