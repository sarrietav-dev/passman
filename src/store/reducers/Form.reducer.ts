import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  editingMode: false,
  submitting: false,
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
    switchSubmitMode(state) {
      state.submitting = !state.submitting;
    },
  },
});

export const { switchEditingMode, setEditingModeToTrue, switchSubmitMode } =
  formSlice.actions;
export default formSlice.reducer;
