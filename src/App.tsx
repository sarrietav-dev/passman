import { useEffect } from 'react';
import { AddressDetails } from './components/address-details/AddressDetails';

import { SideBar } from './components/side-bar/SideBar';
import { useAppDispatch } from './store/hooks';
import { fetchItems } from './store/thunks/app-thunks';
import { showNavbar } from './store/reducers/Navbar.reducer';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="font-noto text-white overflow-hidden flex">
      <div
        className="absolute top-5 right-8 text-3xl lg:hidden"
        onClick={() => dispatch(showNavbar())}
      >
        <i className="fa fa-bars"></i>
      </div>
      <SideBar />
      <AddressDetails />
    </div>
  );
}

export default App;
