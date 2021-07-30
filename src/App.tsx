import React, { useEffect } from 'react';
import { AddressDetails } from './components/address-details/AddressDetails';
import './App.scss';

import { SideBar } from './components/side-bar/SideBar';
import { useAppDispatch } from './store/hooks';
import { fetchItems } from './store/thunks/app-thunks';
import { showNavbar } from './store/reducers/Navbar.reducer';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="App">
      <div
        className="hamburger-menu"
        onClick={() => dispatch(showNavbar())}
      >
        <i className="fa fa-bars"></i>
      </div>
      <SideBar />
      <AddressDetails />
    </div>
  );
}

export default App;
