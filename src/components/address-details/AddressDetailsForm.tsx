import { RefObject, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { switchEditingMode } from '../../store/reducers/Form.reducer';
import { deleteItem } from '../../store/thunks/app-thunks';
import FormField from './components/FormField';
import { VaultItem } from '../../types/types';
import { AnyAction, Dispatch, ThunkDispatch } from '@reduxjs/toolkit';
import { AccountNameField } from './components/form-fields/AccountNameField';
import { LogoUrlField } from './components/form-fields/LogoUrlField';
import { PasswordField } from './components/form-fields/PasswordField';
import { SiteUrlField } from './components/form-fields/SiteUrlField';
import { UsernameField } from './components/form-fields/UsernameField';
import { Button } from '../Button';
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
        setState={setState}
        editing={editingMode}
        ref={refs.nameFieldRef}
        currentItem={currentItem}
        currentItemName={currentItem?.account_name}
      />

      <hr className="mx-0 my-5" />

      <UsernameField
        editing={editingMode}
        ref={refs.usernameFieldRef}
        currentItemName={currentItem?.username}
      />

      <PasswordField
        state={state}
        setState={setState}
        editing={editingMode}
        ref={refs.passwordFieldRef}
        currentItemName={currentItem?.password}
        showPassword={state.showPassword}
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
    <Button
      className={`px-4 py-3 flex place-items-center hover:-translate-y-0.5 hover:text-white hover:shadow active:shadow active:bg-white active:bg-opacity-50 ${
        editing ? 'bg-green-500' : ''
      }`}
      onClick={editing ? () => {} : () => dispatch(switchEditingMode())}
      type={editing ? 'submit' : 'button'}
      form={editing ? 'form' : ''}
    >
      <i className={`text-inherit fa fa-${editing ? 'check' : 'pencil'}`}></i>
      {editing ? 'Submit' : 'Edit'}
    </Button>
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
    <Button
      className="px-4 py-3 flex place-items-center hover:-translate-y-0.5 hover:text-white hover:bg-red-500 hover:shadow active:shadow active:bg-white active:bg-opacity-50"
      onClick={() => dispatch(deleteItem(currentItem))}
    >
      <i className="fa fa-trash text-inherit"></i>
      Delete
    </Button>
  );
}
