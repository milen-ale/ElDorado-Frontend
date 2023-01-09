import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reservationReducer from './Reservations/reservationsSlice';

// root Reducer
const rootReducer = combineReducers({
  // Add your reducers here
  reservations: reservationReducer,
});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(logger),
);

export default store;
