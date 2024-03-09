import { createSlice } from '@reduxjs/toolkit';

export const footerSlice = createSlice({
  name: 'footer',
  initialState: {
    footerData: [],
  },
  reducers: {
    setFooterData: (state, { payload }) => {
      state.footerData = payload;
    },
  },
});

export const { setFooterData } = footerSlice.actions;
export default footerSlice.reducer;
