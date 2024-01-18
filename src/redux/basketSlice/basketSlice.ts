import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    isBasketOpen: false,
    isNotifications: false,
    isAddNewItem: false,
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
    setIsAddNewItem: (state, { payload }) => {
      state.isAddNewItem = payload;
    },
  },
});

export const { setIsBasketOpen, setIsNotifications, setReduxBasketArr, setIsAddNewItem } =
  basketSlice.actions;
export default basketSlice.reducer;
