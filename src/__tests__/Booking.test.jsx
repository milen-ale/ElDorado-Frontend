import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import Booking from '../Components/Booking';

describe('Booking component', () => {
  test('Should render the proper booking component', () => {
    const booking = render(
      <Provider store={store}>
        <Router>
          <Booking />
        </Router>
      </Provider>,
    );
    expect(booking).toMatchSnapshot();
  });
});
