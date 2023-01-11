import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { Select, Option } from '@material-tailwind/react';
import { bookCar } from '../redux/Reservations/reservationsSlice';
import { useAuthUser } from '../redux/Auth/useAuthUser';
import { allCars } from '../redux/Home/home';

const Booking = () => {
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const currentUser = useAuthUser();
  const cars = useSelector(allCars);
  const [carId, setCarId] = useState('');
  const dispatch = useDispatch();

  const handleCarId = (carId) => {
    setCarId(parseInt(carId, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      pickup_date: format(pickupDate, 'yyyy-MM-dd'),
      return_date: format(returnDate, 'yyyy-MM-dd'),
      car_id: carId,
    };
    const reservationObject = {
      reservation,
      user_id: currentUser.id,
    };
    dispatch(bookCar(reservationObject));
  };
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
            onChange={(date) => { setPickupDate(date); }}
          />
          <DatePicker
            required
            placeholderText="Return Date"
            className="w-full p-2 bg-black"
            selected={returnDate}
            dateFormat="yyyy/MM/dd"
            minDate={new Date()}
            onChange={(date) => { setReturnDate(date); }}
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
          {cars.map((car) => (
            <Option value={car.id.toString()} key={car.id}>{car.name}</Option>
          ))}
        </Select>
        <button className="bg-amber-600/90 self-center rounded-md hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-l mt-5" type="submit">Submit</button>
      </form>
    </>
  );
};

export default Booking;
