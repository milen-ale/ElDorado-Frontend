import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import Home from '../pages/Home';

describe('Home Page', () => {
  test('Should render the proper Home Page', () => {
    const homePage = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Home />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(homePage).toMatchSnapshot();
  });
});
