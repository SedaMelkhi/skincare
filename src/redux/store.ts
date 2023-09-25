import { configureStore } from '@reduxjs/toolkit';
import basket from './basketSlice/basketSlice';

export const store = configureStore({
  reducer: {
    basket,
  },
});
