import React, { useEffect, useState } from 'react';
import { AddressDetails } from './components/address-details/AddressDetails';
import './App.scss';

import axios from 'axios';
import { VaultItem } from './types/types';
import { SideBar } from './components/side-bar/SideBar';

function App() {
  const [vaultItems, setVaultItems] = useState<VaultItem[]>([]);

  useEffect(() => {
    axios
      .get<VaultItem[]>('http://localhost:8000/passwords')
      .then((response) => setVaultItems(response.data));
  }, []);

  return (
    <div className="App">
      <SideBar vaultItems={vaultItems} />
      <AddressDetails />
    </div>
  );
}

export default App;
