import { configureStore, combineReducers } from '@reduxjs/toolkit';
import orderReducer from './order/order.slice';
import authReducer from './auth/auth.slice';

const rootReducer = combineReducers({
  order: orderReducer,
  auth: authReducer, 
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
