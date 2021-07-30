import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { VaultItem } from '../../types/types';
import {
  addItem,
  setCurrentItem,
  setItems,
  updateItem,
} from '../reducers/App.reducer';
import { switchEditingMode } from '../reducers/Form.reducer';

const ENDPOINT = 'http://localhost:8000/passwords';

export const fetchItems = createAsyncThunk(
  'app/fetchItems',
  async (_, thunkAPI) => {
    const response = await axios.get<VaultItem[]>(ENDPOINT);
    thunkAPI.dispatch(setItems(response.data));
  },
);

export const postItem = createAsyncThunk(
  'app/postItem',
  async (item: VaultItem, thunkApi) => {
    await axios.post(ENDPOINT, item);
    thunkApi.dispatch(addItem(item));
    thunkApi.dispatch(switchEditingMode());
  },
);

export const patchItem = createAsyncThunk(
  'app/updateItem',
  async (item: VaultItem, thunkAPI) => {
    await axios.patch(`${ENDPOINT}/${item.id}`, item);
    thunkAPI.dispatch(updateItem(item));
    thunkAPI.dispatch(setCurrentItem(item.id));
    thunkAPI.dispatch(switchEditingMode());
  },
);

export const deleteItem = createAsyncThunk(
  'app/deleteItem',
  async (item: VaultItem, thunkAPI) => {
    await axios.delete(`${ENDPOINT}/${item.id}`);
    thunkAPI.dispatch(deleteItem(item));
    thunkAPI.dispatch(setCurrentItem(undefined));
  },
);
