import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Select, Option } from '@material-tailwind/react';
import { allMessages, bookCar } from '../redux/Reservations/reservationsSlice';
import { useAuthUser } from '../redux/Auth/useAuthUser';
import { allCars } from '../redux/Home/home';

const Booking = () => {
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const currentUser = useAuthUser();
  const cars = useSelector(allCars);
  const message = useSelector(allMessages);
  const [carId, setCarId] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDateFormat = (date) => moment(date).format('YYYY-MM-DD');

  const handleCarId = (carId) => {
    setCarId(+carId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      pickup_date: handleDateFormat(pickupDate),
      return_date: handleDateFormat(returnDate),
      car_id: carId,
    };
    const reservationObject = {
      reservation,
      userId: currentUser.id,
    };
    dispatch(bookCar(reservationObject));
  };

  useEffect(() => {
    if (message === 'Car has been successfully booked') navigate('/reservation');
  }, [message]);

  return (
    <>
      <form className="flex flex-col w-1/2 mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-between mb-6">
          <DatePicker
            required
            placeholderText="Pickup Date"
            className="mb-4 w-full p-2 bg-black"
            selected={pickupDate}
            dateFormat="yyyy/MM/dd"
            minDate={new Date()}
            onChange={(date) => {
              setPickupDate(date);
            }}
          />
          <DatePicker
            required
            placeholderText="Return Date"
            className="w-full p-2 bg-black"
            selected={returnDate}
            dateFormat="yyyy/MM/dd"
            minDate={new Date()}
            onChange={(date) => {
              setReturnDate(date);
            }}
          />
        </div>
        <Select
          color="amber"
          className="bg-black/30 text-white"
          name="car"
          label="Select a car"
          onChange={handleCarId}
          required
        >
          {cars.map(({ id: carId, name }) => (
            <Option value={carId.toString()} key={carId}>
              {name}
            </Option>
          ))}
        </Select>
        <button
          className="bg-amber-600/90 self-center rounded-md hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-l mt-5"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Booking;
