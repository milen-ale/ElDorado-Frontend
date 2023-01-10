import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import carReducer from './Home/home';

// root Reducer
const rootReducer = combineReducers({
  // Add your reducers here
  cars: carReducer,
});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  },

);

export default store;
