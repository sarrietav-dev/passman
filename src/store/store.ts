import appReducer from './reducers/App.reducer';
import { configureStore } from '@reduxjs/toolkit'; // ...
import formReducer from './reducers/Form.reducer';
import navbarReducer from './reducers/Navbar.reducer';

export const store = configureStore({
  reducer: { app: appReducer, form: formReducer, navbar: navbarReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
