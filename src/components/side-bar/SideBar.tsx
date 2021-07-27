import React, { useContext } from 'react';
import { SearchBar } from '../search-bar/SearchBar';
import { CreateButton } from '../create-button/CreateButton';
import { VaultItem } from '../vault-item/VaultItem';
import { VaultItem as VaultItemApi } from '../../types/types';
import { v4 as uuid } from 'uuid';
import { AppContext } from '../../context/AppContext';

interface SideBarProps {
  vaultItems: VaultItemApi[];
}

export const SideBar = ({ vaultItems }: SideBarProps) => {
  const context = useContext(AppContext);
  return (
    <nav className="nav">
      <header>
        <SearchBar />
        <CreateButton />
      </header>
      {vaultItems.map((item) => (
        <VaultItem
          onClick={() => context.setCurrentItem(item.id)}
          title={item.account_name}
          username={item.username}
          imageUrl={item.logo_url}
          key={uuid()}
          active={context.currentItem?.id === item.id}
        />
      ))}
    </nav>
  );
};
