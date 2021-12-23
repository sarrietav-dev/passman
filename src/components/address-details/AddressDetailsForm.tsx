import { RefObject, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { switchEditingMode } from '../../store/reducers/Form.reducer';
import { deleteItem } from '../../store/thunks/app-thunks';
import FormField from './components/FormField';
import { VaultItem } from '../../types/types';
import { AnyAction, Dispatch, ThunkDispatch } from '@reduxjs/toolkit';
import {
  AccountNameField,
  LogoUrlField,
  PasswordField,
  SiteUrlField,
  UsernameField,
} from './components/form-fields';

export interface AddressDetailState {
  name: string | undefined;
  showPassword: boolean;
}

interface AddressDetailsProps {
  refs: {
    [key: string]: RefObject<HTMLInputElement>;
  };
}

export const AddressDetailsForm = ({ refs }: AddressDetailsProps) => {
  const { currentItem } = useAppSelector((state) => state.app);
  const { editingMode } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  const [state, setState] = useState<AddressDetailState>({
    name: undefined,
    showPassword: false,
  });

  return (
    <>
      <AccountNameField
        state={state}
        editing={editingMode}
        ref={refs.nameFieldRef}
        currentItem={currentItem}
        currentItemName={currentItem?.account_name}
        setState={setState}
      />

      <hr className="mx-0 my-5" />

      <UsernameField
        ref={refs.usernameFieldRef}
        editing={editingMode}
        currentItemName={currentItem?.username}
      />

      <PasswordField
        editing={editingMode}
        ref={refs.passwordFieldRef}
        currentItemName={currentItem?.password}
        showPassword={state.showPassword}
        setState={setState}
        state={state}
      />

      <SiteUrlField
        ref={refs.urlFieldRef}
        editing={editingMode}
        currentItemName={currentItem?.site_url}
      />

      <LogoUrlField
        editing={editingMode}
        ref={refs.logoFieldRef}
        currentItemName={currentItem?.logo_url ?? ''}
      />

      <FormField>
        <label>Created at</label>
        <p>{currentItem?.created_at}</p>
      </FormField>

      <div className="flex justify-end items-stretch">
        <SubmitButton dispatch={dispatch} editing={editingMode} />
        {currentItem !== undefined && (
          <DeleteItemButton dispatch={dispatch} currentItem={currentItem} />
        )}
      </div>
    </>
  );
};

function SubmitButton({
  editing,
  dispatch,
}: {
  editing: boolean;
  dispatch: Dispatch<AnyAction> & ThunkDispatch<{}, null, AnyAction>;
}) {
  return (
    <button
      className={`btn btn--${editing ? 'submit' : 'edit'}`}
      onClick={editing ? () => {} : () => dispatch(switchEditingMode())}
      type={editing ? 'submit' : 'button'}
      form={editing ? 'form' : ''}
    >
      <i className={`fa fa-${editing ? 'check' : 'pencil'}`}></i>
      {editing ? 'Submit' : 'Edit'}
    </button>
  );
}

function DeleteItemButton({
  dispatch,
  currentItem,
}: {
  dispatch: Dispatch & ThunkDispatch<{}, null, AnyAction>;
  currentItem: VaultItem;
}) {
  return (
    <button
      className="btn btn--delete"
      onClick={() => dispatch(deleteItem(currentItem))}
    >
      <i className="fa fa-trash"></i>
      Delete
    </button>
  );
}
