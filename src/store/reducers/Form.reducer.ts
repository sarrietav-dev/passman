import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  editingMode: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    switchEditingMode(state) {
      state.editingMode = !state.editingMode;
    },
  },
});

export const { switchEditingMode } = formSlice.actions;
export default formSlice.reducer;
