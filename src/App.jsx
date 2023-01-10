import React from 'react';
import AppRouter from './routers';
import './App.css';
import BookingPage from './pages/BookingPage';
import 'tw-elements';

const App = () => (
  <>
    <BookingPage />
    <AppRouter />
  </>
);

export default App;
