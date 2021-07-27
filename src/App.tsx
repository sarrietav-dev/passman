import React from 'react';
import { AddressDetails } from './components/address-details/AddressDetails';
import './App.scss';
import { SearchBar } from './components/search-bar/SearchBar';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <SearchBar />
      </div>
      <AddressDetails />
    </div>
  );
}

export default App;
