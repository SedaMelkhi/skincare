import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menu: [],
    isMenuOpen: false,
  },
  reducers: {
    setMenu: (state, { payload }) => {
      state.menu = payload;
    },
    setIsMenuOpen: (state, { payload }) => {
      state.isMenuOpen = payload;
    },
  },
});

export const { setMenu, setIsMenuOpen } = menuSlice.actions;
export default menuSlice.reducer;
