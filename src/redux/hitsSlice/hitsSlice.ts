import { createSlice } from '@reduxjs/toolkit';

export const hitsSlice = createSlice({
  name: 'hits',
  initialState: {
    hitsData: [],
  },
  reducers: {
    setHits: (state, { payload }) => {
      state.hitsData = payload;
    },
  },
});

export const { setHits } = hitsSlice.actions;
export default hitsSlice.reducer;
