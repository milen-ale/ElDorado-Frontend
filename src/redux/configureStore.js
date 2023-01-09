import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './Auth/authSlice';

// root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(logger),
);

export default store;
