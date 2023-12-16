import { createSlice } from '@reduxjs/toolkit';

export const registredSlice = createSlice({
  name: 'registred',
  initialState: {
    isRegistred: false,
  },
  reducers: {
    setIsRegistred: (state, { payload }) => {
      state.isRegistred = payload;
    },
  },
});

export const { setIsRegistred } = registredSlice.actions;
export default registredSlice.reducer;
