import React from 'react';
import { AddressDetails } from './components/AddressDetails';
import './App.scss';
import { SearchBar } from './components/SearchBar';

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
