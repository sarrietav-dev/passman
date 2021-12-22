import { RefObject, useState } from 'react';
import { Img } from '../Img';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { switchEditingMode } from '../../store/reducers/Form.reducer';
import { deleteItem } from '../../store/thunks/app-thunks';
import FormField from './components/FormField';
import {
  ShowPasswordButton,
  GeneratePasswordButton,
  CopyToClipboardButton,
} from './components/password-buttons';
import { VaultItem } from '../../types/types';
import { AnyAction, Dispatch, ThunkDispatch } from '@reduxjs/toolkit';

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

  function generatePassword() {
    var length = 12,
      charset =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      retVal = '';
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  const getLogoText = () => {
    if (currentItem) return currentItem?.account_name.charAt(0).toUpperCase();
    return state.name === undefined || state.name === ''
      ? '@'
      : state.name.charAt(0).toUpperCase();
  };

  return (
    <>
      <FormField
        className="flex place-content-center font-roboto"
        editing={editingMode}
        ref={refs.nameFieldRef}
      >
        <span className="account-logo">
          {currentItem?.logo_url === '' || currentItem === undefined ? (
            getLogoText()
          ) : (
            <Img url={currentItem?.logo_url} title={getLogoText()} />
          )}
        </span>
        <input
          type="text"
          name=""
          className="account-name"
          placeholder="Account name"
          onChange={(e) => {
            if (e.target.value !== '')
              setState({ ...state, name: e.target.value });
          }}
          ref={refs.nameFieldRef}
          disabled={!editingMode}
          required
          defaultValue={currentItem?.account_name}
        />
      </FormField>
      <hr />
      <FormField editing={editingMode} ref={refs.usernameFieldRef}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          autoComplete="false"
          required
          ref={refs.usernameFieldRef}
          disabled={!editingMode}
          defaultValue={currentItem?.username}
        />
      </FormField>
      <FormField
        className="flex items-center"
        editing={editingMode}
        ref={refs.passwordFieldRef}
      >
        <div className="basis-4/5">
          <label htmlFor="password">Password</label>
          <input
            type={state.showPassword ? 'text' : 'password'}
            name="password"
            className="form__field"
            id="password-field"
            autoComplete="false"
            required
            ref={refs.passwordFieldRef}
            disabled={!editingMode}
            defaultValue={currentItem?.password}
          />
        </div>
        <div className="password-buttons">
          <ShowPasswordButton state={state} setState={setState} />
          {editingMode && (
            <GeneratePasswordButton
              ref={refs.passwordFieldRef}
              generatePassword={generatePassword}
            />
          )}
          <CopyToClipboardButton ref={refs.passwordFieldRef} />
        </div>
      </FormField>
      <FormField editing={editingMode} ref={refs.urlFieldRef}>
        <label htmlFor="site-url">Site URL</label>
        <input
          type="url"
          name="site-url"
          id=""
          autoComplete="false"
          required
          ref={refs.urlFieldRef}
          disabled={!editingMode}
          defaultValue={currentItem?.site_url}
        />
      </FormField>
      <FormField editing={editingMode} ref={refs.urlFieldRef}>
        <label htmlFor="site-url">Logo URL</label>
        <input
          type="url"
          name="site-url"
          id=""
          autoComplete="false"
          ref={refs.logoFieldRef}
          disabled={!editingMode}
          defaultValue={currentItem?.logo_url}
        />
      </FormField>
      <FormField>
        <label htmlFor="">Created at</label>
        <p className="creation-date">{currentItem?.created_at}</p>
      </FormField>
      <div className="action-buttons">
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
