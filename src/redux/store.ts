import { configureStore } from '@reduxjs/toolkit';
import basket from './basketSlice/basketSlice';
import footer from './footerSlice/footerSlice';

export const store = configureStore({
  reducer: {
    basket,
    footer,
  },
});
