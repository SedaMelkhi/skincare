import { createSlice } from '@reduxjs/toolkit';

export const addressSlice = createSlice({
  name: 'address',
  initialState: {
    isAddressOpen: false,
    type: 'courier',
    mapData: [],
  },
  reducers: {
    setIsAddressOpen: (state, { payload }) => {
      state.isAddressOpen = payload;
    },
    setType: (state, { payload }) => {
      state.type = payload;
    },
    setMapData: (state, { payload }) => {
      state.mapData = payload;
    },
  },
});

export const { setIsAddressOpen, setType, setMapData } = addressSlice.actions;
export default addressSlice.reducer;
