import React, { useEffect } from 'react';
import { AddressDetails } from './components/address-details/AddressDetails';
import './App.scss';

import { SideBar } from './components/side-bar/SideBar';
import { useAppDispatch } from './store/hooks';
import { fetchItems } from './store/thunks/app-thunks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="hamburger-menu hamburger-menu--hidden">
        <i className="fa fa-bars"></i>
      </div>
      <SideBar />
      <AddressDetails />
    </div>
  );
}

export default App;
