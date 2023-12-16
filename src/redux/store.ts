import { configureStore } from '@reduxjs/toolkit';
import basket from './basketSlice/basketSlice';
import footer from './footerSlice/footerSlice';
import menu from './menuSlice/menuSlice';
import hits from './hitsSlice/hitsSlice';
import auth from './authSlice/authSlice';

export const store = configureStore({
  reducer: {
    basket,
    footer,
    menu,
    hits,
    auth,
  },
});
