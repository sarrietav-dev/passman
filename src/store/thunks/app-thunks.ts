import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { VaultItem } from '../../types/types';
import {
  addItem,
  setCurrentItem,
  setItems,
  updateItem,
} from '../reducers/App.reducer';

export const fetchItems = createAsyncThunk('app/fetchItems', async (_, thunkAPI) => {
  const response = await axios.get<VaultItem[]>(
    'http://localhost:8000/passwords',
  );
  thunkAPI.dispatch(setItems(response.data));
});

export const postItem = createAsyncThunk(
  'app/postItem',
  async (item: VaultItem, thunkApi) => {
    await axios.post('http://localhost:8000/passwords', item);
    thunkApi.dispatch(addItem(item));
  },
);

export const patchItem = createAsyncThunk(
  'app/updateItem',
  async (item: VaultItem, thunkAPI) => {
    const response = await axios.patch(
      `http://localhost:8000/passwords/${item.id}`,
      item,
    );
    thunkAPI.dispatch(updateItem(item));
    thunkAPI.dispatch(setCurrentItem(item.id));
  },
);
