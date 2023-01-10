import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './Auth/authSlice';
import carReducer from './Home/home';

// root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
  cars: carReducer,
});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(logger),
);

export default store;
