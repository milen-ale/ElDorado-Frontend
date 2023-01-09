import { useState } from 'react';
import { useDispatch } from 'react-redux';
import reactLogo from './assets/react.svg';
import Example from './Example';
import './App.css';
import { bookCar } from './redux/Reservations/reservationsSlice';
import api from './api/api';

function App() {
  const [count] = useState(0);
  const reservationObj = {
    pickup_date: '2023-02-01',
    return_date: '2023-02-12',
    car_id: 1,
  };
  const user = {
    email: 'abc@gmail.com',
    password: '123456',
  };
  api.login(user);
  const dispatch = useDispatch();
  // const reservations = useSelector(carReservations);
  // const status = useSelector(allStatus);
  const handleBooking = () => {
    console.log(reservationObj);
    dispatch(bookCar(2, reservationObj));
  };
  return (
    <>
      <div className="App">
        <div className="flex">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-white bg-black text-4xl">Vite + React</h1>
        <div className="card">
          <button type="button" onClick={handleBooking}>
            count is
            {' '}
            {count}
          </button>
          <p>
            Edit
            {' '}
            <code>src/App.jsx</code>
            {' '}
            and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <Example />
    </>
  );
}

export default App;
