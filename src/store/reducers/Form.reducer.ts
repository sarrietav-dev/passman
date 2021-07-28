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
    setEditingModeToTrue(state) {
      state.editingMode = true;
    },
  },
});

export const { switchEditingMode, setEditingModeToTrue } = formSlice.actions;
export default formSlice.reducer;
