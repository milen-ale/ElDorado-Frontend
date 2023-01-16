import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import Booking from '../components/Booking';

describe('Booking component', () => {
  test('Should render the proper booking component', () => {
    const booking = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Booking />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(booking).toMatchSnapshot();
  });
});
