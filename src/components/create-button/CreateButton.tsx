import { useAppDispatch } from '../../store/hooks';
import { setCurrentItem } from '../../store/reducers/App.reducer';
import { setEditingModeToTrue } from '../../store/reducers/Form.reducer';
import { hideNavbar } from '../../store/reducers/Navbar.reducer';

export const CreateButton = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      className="border-none rounded bg-blue-500 py-2 px-4 font-roboto font-bold transition-all hover:bg-blue-300 active:bg-blue-400"
      onClick={() => {
        dispatch(setEditingModeToTrue());
        dispatch(setCurrentItem(undefined));
        dispatch(hideNavbar());
      }}
    >
      +
    </button>
  );
};
