import React, { RefObject, useState } from 'react';
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
import { FormInput } from './components/FormInput';

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

  const ItemLogo = () =>
    isLogoAvailable() ? (
      <Img url={currentItem?.logo_url} title={getLogoText()} />
    ) : (
      <>getLogoText()</>
    );

  const isLogoAvailable = () =>
    currentItem?.logo_url !== '' || currentItem !== undefined;

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
          <ItemLogo />
        </span>
        <FormInput
          type="text"
          placeholder="Account name"
          className="text-3xl ml-5 w-4/5"
          editing={editingMode}
          ref={refs.nameFieldRef}
          currentItem={currentItem?.account_name ?? ''}
          onChange={(e) => {
            if (e.target.value !== '')
              setState({ ...state, name: e.target.value });
          }}
        />
      </FormField>
      <hr />
      <FormField editing={editingMode} ref={refs.usernameFieldRef}>
        <label htmlFor="username">Username</label>
        <FormInput
          type="text"
          name="username"
          autoComplete="false"
          ref={refs.usernameFieldRef}
          editing={editingMode}
          currentItem={currentItem?.username ?? ''}
        />
      </FormField>
      <FormField
        className="flex items-center"
        editing={editingMode}
        ref={refs.passwordFieldRef}
      >
        <div className="basis-4/5">
          <label htmlFor="password">Password</label>
          <FormInput
            name="password"
            id="password-field"
            autoComplete="false"
            className="p-4 inline-block rounded transition"
            editing={editingMode}
            ref={refs.passwordFieldRef}
            currentItem={currentItem?.password ?? ''}
            type={state.showPassword ? 'text' : 'password'}
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
        <FormInput
          type="url"
          name="site-url"
          autoComplete="false"
          ref={refs.urlFieldRef}
          editing={editingMode}
          disabled={!editingMode}
          currentItem={currentItem?.site_url ?? ''}
        />
      </FormField>
      <FormField editing={editingMode} ref={refs.urlFieldRef}>
        <label htmlFor="site-url">Logo URL</label>
        <FormInput
          type="url"
          name="site-url"
          autoComplete="false"
          editing={editingMode}
          ref={refs.logoFieldRef}
          currentItem={currentItem?.logo_url ?? ''}
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
