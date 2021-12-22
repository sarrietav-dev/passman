import { useState } from 'react';
import { SearchBar } from '../search-bar/SearchBar';
import { CreateButton } from '../create-button/CreateButton';
import { VaultItem } from '../vault-item/VaultItem';
import { v4 as uuid } from 'uuid';

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
    <nav
      className={`absolute z-10 w-full h-full lg:h-screen lg:min-w-[25%] bg-neutral-800 border-solid border-r-[0.5px] border-r-black p-8 pr-0 ${
        !shown && 'hidden'
      }`}
    >
      <div
        className="text-3xl mb-8 -mt-3 pr-8 flex justify-end lg:hidden"
        onClick={() => dispatch(hideNavbar())}
      >
        <i className="fa fa-times"></i>
      </div>
      <header className="flex items-stretch pr-8">
        <SearchBar changeSearchString={setSearchString} />
        <CreateButton />
      </header>
      <div className="flex justify-end items-center pr-8 mx-3 py-0">
        Sort by Date:
        <button
          className="px-1 py-2"
          onClick={() => dispatch(orderItems('DESC'))}
        >
          DESC
        </button>
        <button
          className="px-1 py-2"
          onClick={() => dispatch(orderItems('ASC'))}
        >
          ASC
        </button>
      </div>
      <div className="pr-8 lg:pr-0 h-full overflow-scroll overflow-x-hidden">
        {renderVaultItem()}
      </div>
    </nav>
  );
};
