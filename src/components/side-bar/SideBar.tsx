import { useState } from 'react';
import { SearchBar } from '../search-bar/SearchBar';
import { CreateButton } from '../create-button/CreateButton';
import { VaultItem } from '../vault-item/VaultItem';
import { v4 as uuid } from 'uuid';

import './side-bar.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { orderItems, setCurrentItem } from '../../store/reducers/App.reducer';
import { hideNavbar } from '../../store/reducers/Navbar.reducer';

export const SideBar = () => {
  const [searchString, setSearchString] = useState('');
  let { vaultItems, currentItem } = useAppSelector((state) => state.app);
  const { shown } = useAppSelector((state) => state.navbar);
  const dispatch = useAppDispatch();

  const renderVaultItem = () => {
    if (searchString !== '') {
      vaultItems = vaultItems.filter((item) =>
        item.account_name.toLowerCase().includes(searchString.toLowerCase()),
      );
    }

    return vaultItems.map((item) => (
      <VaultItem
        onClick={() => {
          dispatch(setCurrentItem(item.id));
          dispatch(hideNavbar());
        }}
        title={item.account_name}
        username={item.username}
        imageUrl={item.logo_url}
        key={uuid()}
        active={currentItem?.id === item.id}
      />
    ));
  };

  return (
    <nav className={`nav ${!shown && 'nav--hidden'}`}>
      <div className="close-btn" onClick={() => dispatch(hideNavbar())}>
        <i className="fa fa-times"></i>
      </div>
      <header>
        <SearchBar changeSearchString={setSearchString} />
        <CreateButton />
      </header>
      <div className="order-buttons">
        Sort by Date:
        <button className="btn" onClick={() => dispatch(orderItems('DESC'))}>
          DESC
        </button>
        <button className="btn" onClick={() => dispatch(orderItems('ASC'))}>
          ASC
        </button>
      </div>
      <div className="vault-items">{renderVaultItem()}</div>
    </nav>
  );
};
