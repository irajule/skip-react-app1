import { configureStore } from '@reduxjs/toolkit';
import skipsReducer from '../redux/skips/skipsSlice';

export const store = configureStore({
  reducer: {
    skips: skipsReducer,
  },
});
