import { configureStore } from '@reduxjs/toolkit';
import contacts from './contactsSlice/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts,
  },
});
