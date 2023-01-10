import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { bookCar } from '../redux/Reservations/reservationsSlice';
import api from '../api/api';

const Booking = () => {
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  if (pickupDate) { console.log(format(pickupDate, 'yyyy-MM-dd')); }
  const user = {
    email: 'abc@gmail.com',
    password: '123456',
  };
  api.login(user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      pickup_date: format(pickupDate, 'yyyy-MM-dd'),
      return_date: format(returnDate, 'yyyy-MM-dd'),
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
        <DatePicker
          placeholderText="Pickup Date"
          className="mb-5"
          selected={pickupDate}
          dateFormat="yyyy/MM/dd"
          minDate={new Date()}
          onChange={(date) => { setPickupDate(date); }}
        />
        <DatePicker
          placeholderText="Return Date"
          selected={returnDate}
          dateFormat="yyyy/MM/dd"
          minDate={new Date()}
          onChange={(date) => { setReturnDate(date); }}
        />
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="submit">Submit</button>
      </form>
    </>
  );
};

export default Booking;
