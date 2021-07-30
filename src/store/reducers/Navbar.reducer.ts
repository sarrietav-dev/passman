import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shown: false,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    showNavbar: (state) => {
      state.shown = true;
    },
    hideNavbar: (state) => {
      state.shown = false;
    },
  },
});

export const { hideNavbar, showNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
