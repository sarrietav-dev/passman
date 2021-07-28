import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VaultItem } from '../../types/types';

interface AppSliceState {
  vaultItems: VaultItem[];
  currentItem: VaultItem | undefined;
}

const initialState: AppSliceState = {
  currentItem: undefined,
  vaultItems: [],
};

export const appSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<VaultItem[]>) => {
      state.vaultItems = action.payload;
    },
    addItem: (state, action: PayloadAction<VaultItem>) => {
      state.vaultItems.push(action.payload);
    },
    setCurrentItem: (state, action: PayloadAction<string>) => {
      state.currentItem = state.vaultItems.find(
        (item) => item.id === action.payload,
      );
    },
    updateItem: (state, action: PayloadAction<VaultItem>) => {
      const vaultItems = state.vaultItems.filter(
        (item) => item.id !== action.payload.id,
      );
      vaultItems.push(action.payload);
      state.vaultItems = vaultItems;
    },
  },
});

export const { addItem, setCurrentItem, updateItem, setItems } =
  appSlice.actions;
export default appSlice.reducer;
