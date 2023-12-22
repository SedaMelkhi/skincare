import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    isBasketOpen: false,
    isNotifications: false,
    basketArr: [],
  },
  reducers: {
    setIsBasketOpen: (state, { payload }) => {
      state.isBasketOpen = payload;
    },
    setIsNotifications: (state, { payload }) => {
      state.isNotifications = payload;
    },
    setReduxBasketArr: (state, { payload }) => {
      state.basketArr = payload;
    },
  },
});

export const { setIsBasketOpen, setIsNotifications, setReduxBasketArr } = basketSlice.actions;
export default basketSlice.reducer;
