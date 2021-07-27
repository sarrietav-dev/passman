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
        <VaultItem
          title="Facebook"
          username="sarrietav"
          active
          imageUrl="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/EWLVhDVJTum.png"
        />
        <VaultItem
          title="Whatsapp"
          username="sarrietav@gmail.com"
          imageUrl="https://www.whatsapp.com/apple-touch-icon-precomposed.png"
        />
        <VaultItem
          title="Instagram"
          username="sarrietav@protonmail.com"
          imageUrl="https://www.instagram.com/static/images/ico/apple-touch-icon-180x180-precomposed.png/c06fdb2357bd.png"
        />
        <VaultItem
          title="Google Drive"
          username="sarrietav@unicartagena.edu.co"
          imageUrl="https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png"
        />
        <VaultItem title="College" username="sarrietav@unicartagena.edu.co" />
      </nav>
      <AddressDetails />
    </div>
  );
}

export default App;
