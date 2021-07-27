import React from 'react';
import { SearchBar } from '../search-bar/SearchBar';
import { CreateButton } from '../create-button/CreateButton';
import { VaultItem } from '../vault-item/VaultItem';
import { VaultItem as VaultItemApi } from '../../types/types';
import { v4 as uuid } from 'uuid';

interface SideBarProps {
  vaultItems: VaultItemApi[];
}

export const SideBar = ({ vaultItems }: SideBarProps) => {
  return (
    <nav className="nav">
      <header>
        <SearchBar />
        <CreateButton />
      </header>
      {vaultItems.map((item) => (
        <VaultItem
          title={item.account_name}
          username={item.username}
          imageUrl={item.logo_url}
					key={uuid()}
        />
      ))}
    </nav>
  );
};
