import React from 'react';
import { AddressDetails } from './components/address-details/AddressDetails';
import './App.scss';
import { SearchBar } from './components/search-bar/SearchBar';
import { CreateButton } from './components/create-button/CreateButton';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <header>
          <SearchBar />
          <CreateButton />
        </header>
      </nav>
      <AddressDetails />
    </div>
  );
}

export default App;
