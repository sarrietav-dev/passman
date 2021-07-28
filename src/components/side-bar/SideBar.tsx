import React from 'react';
import { SearchBar } from '../search-bar/SearchBar';
import { CreateButton } from '../create-button/CreateButton';
import { VaultItem } from '../vault-item/VaultItem';
import { v4 as uuid } from 'uuid';

import './side-bar.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setCurrentItem } from '../../store/reducers/AppReducer.reducer';

export const SideBar = () => {
  const { vaultItems, currentItem } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  return (
    <nav className="nav">
      <header>
        <SearchBar />
        <CreateButton />
      </header>
      <div className="vault-items">
        {vaultItems.map((item) => (
          <VaultItem
            onClick={() => dispatch(setCurrentItem(item.id))}
            title={item.account_name}
            username={item.username}
            imageUrl={item.logo_url}
            key={uuid()}
            active={currentItem?.id === item.id}
          />
        ))}
      </div>
    </nav>
  );
};
