import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookCar } from '../redux/Reservations/reservationsSlice';
import api from '../api/api';

const Booking = () => {
  const user = {
    email: 'abc@gmail.com',
    password: '123456',
  };
  api.login(user);
  const dispatch = useDispatch();
  const [selectedPickupDate, setPickupDate] = useState(null);
  const [selectedReturnDate, setReturnDate] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      pickup_date: selectedPickupDate.format('YYYY-MM-DD'),
      return_date: selectedReturnDate.format('YYYY-MM-DD'),
      car_id: 19,
    };
    const reservationObject = {
      reservation,
      user_id: 2,
    };
    console.log(reservationObject);
    dispatch(bookCar(reservationObject));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            label="Pickup Date"
            renderInput={(params) => <TextField {...params} />}
            value={selectedPickupDate}
            minDate={dayjs(`${new Date().toLocaleString()}`)}
            onChange={(newValue) => {
              setPickupDate(newValue);
            }}
          />
          <MobileDatePicker
            label="return Date"
            renderInput={(params) => <TextField {...params} />}
            value={selectedReturnDate}
            minDate={dayjs(`${new Date().toLocaleString()}`)}
            onChange={(newValue) => {
              setReturnDate(newValue);
            }}
          />
        </LocalizationProvider>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="submit">Submit</button>
      </form>
    </>
  );
};

export default Booking;
