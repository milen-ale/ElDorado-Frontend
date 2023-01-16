import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import DeleteCar from '../components/DeleteCar';

describe('AddCar component', () => {
  test('Should render the proper DeleteCar component', () => {
    const deleteCar = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <DeleteCar />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(deleteCar).toMatchSnapshot();
  });
});
