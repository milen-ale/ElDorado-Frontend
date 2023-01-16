import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import Login from '../components/Login';
import Register from '../components/Register';

describe('Login component', () => {
  test('Should render the proper Login component', () => {
    const login = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Login />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(login).toMatchSnapshot();
  });
  test('Should render the proper Register component', () => {
    const register = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Register />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(register).toMatchSnapshot();
  });
});
