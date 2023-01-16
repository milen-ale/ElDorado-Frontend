import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import AddCar from '../components/AddCar';

describe('AddCar component', () => {
  test('Should render the proper AddCar component', () => {
    const addCar = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <AddCar />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(addCar).toMatchSnapshot();
  });
});
