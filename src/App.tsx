import React, { useEffect, useState } from 'react';
import { AddressDetails } from './components/address-details/AddressDetails';
import './App.scss';

import axios from 'axios';
import { VaultItem } from './types/types';
import { SideBar } from './components/side-bar/SideBar';
import { AppContext } from './context/AppContext';

function App() {
  const [vaultItems, setVaultItems] = useState<VaultItem[]>([]);
  const [currentItem, setCurrentItem] = useState<VaultItem | undefined>(
    undefined,
  );

  const addItem = (item: VaultItem) => {
    axios
      .post('http://localhost:8000/passwords', currentItem)
      .then(() => setVaultItems([...vaultItems, item]));
  };
  const setCurrentItemContext = (itemId: string) =>
    setCurrentItem(vaultItems.filter((item) => item.id === itemId)[0]);

  useEffect(() => {
    axios
      .get<VaultItem[]>('http://localhost:8000/passwords')
      .then((response) => setVaultItems(response.data));
  }, []);

  return (
    <AppContext.Provider
      value={{
        addItem,
        currentItem,
        setCurrentItem: setCurrentItemContext,
        vaultItems,
      }}
    >
      <div className="App">
        <SideBar vaultItems={vaultItems} />
        <AddressDetails />
      </div>
    </AppContext.Provider>
  );
}

export default App;
