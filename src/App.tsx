import React from 'react';
import { AddressDetails } from './components/address-details/AddressDetails';
import './App.scss';
import { SearchBar } from './components/search-bar/SearchBar';
import { CreateButton } from './components/create-button/CreateButton';
import { VaultItem } from './components/vault-item/VaultItem';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <header>
          <SearchBar />
          <CreateButton />
        </header>
        <VaultItem title="Facebook" username="sarrietav" active />
        <VaultItem title="Whatsapp" username="sarrietav@gmail.com" />
        <VaultItem title="Instagram" username="sarrietav@protonmail.com" />
        <VaultItem title="College" username="sarrietav@unicartagena.edu.co" />
      </nav>
      <AddressDetails />
    </div>
  );
}

export default App;
