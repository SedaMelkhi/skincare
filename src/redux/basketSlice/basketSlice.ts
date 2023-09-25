import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    isBasketOpen: false,
    isNotifications: false,
  },
  reducers: {
    setIsBasketOpen: (state, { payload }) => {
      state.isBasketOpen = payload;
    },
    setIsNotifications: (state, { payload }) => {
      state.isNotifications = payload;
    },
  },
});

export const { setIsBasketOpen, setIsNotifications } = basketSlice.actions;
export default basketSlice.reducer;
