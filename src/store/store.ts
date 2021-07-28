import appReducer from './reducers/AppReducer.reducer';
import { configureStore } from '@reduxjs/toolkit'; // ...
export const store = configureStore({ reducer: { app: appReducer } });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;