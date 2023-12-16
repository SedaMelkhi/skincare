import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isauth: false,
  },
  reducers: {
    setIsauth: (state, { payload }) => {
      state.isauth = payload;
    },
  },
});

export const { setIsauth } = authSlice.actions;
export default authSlice.reducer;
