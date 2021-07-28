import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { setCurrentItem } from '../../store/reducers/App.reducer';
import { setEditingModeToTrue } from '../../store/reducers/Form.reducer';
import './create-button.scss';

export const CreateButton = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      className="create"
      onClick={() => {
        dispatch(setEditingModeToTrue());
        dispatch(setCurrentItem(undefined));
      }}
    >
      +
    </button>
  );
};
