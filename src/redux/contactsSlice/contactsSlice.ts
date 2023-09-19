import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsArray: [],
  },
  reducers: {
    setContactsArray: (state, { payload }) => {
      state.contactsArray = payload;
    },
  },
});

export const { setContactsArray } = contactsSlice.actions;
export default contactsSlice.reducer;
