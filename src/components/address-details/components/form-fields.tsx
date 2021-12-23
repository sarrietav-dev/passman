import React from 'react';
import { VaultItem } from '../../../types/types';
import { Img } from '../../Img';
import { AddressDetailState } from '../AddressDetailsForm';
import FormField from './FormField';
import { FormInput } from './FormInput';
import {
  CopyToClipboardButton,
  GeneratePasswordButton,
  ShowPasswordButton,
} from './password-buttons';

interface FormInputProps {
  editing: boolean;
  ref: React.RefObject<HTMLInputElement>;
  currentItemName: string | undefined;
}

type AccountNameFieldProps = FormInputProps & {
  currentItem: VaultItem | undefined;
  state: AddressDetailState;
  setState: React.Dispatch<any>;
};

export const AccountNameField = ({
  editing,
  ref,
  currentItemName,
  currentItem,
  state,
  setState,
}: AccountNameFieldProps) => {
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
    <FormField
      className="flex place-content-center font-roboto"
      editing={editing}
      ref={ref}
    >
      <span className="text-3xl text-gray-400 w-16 h-16 text-center rounded inline-flex place-items-center">
        <ItemLogo />
      </span>
      <FormInput
        type="text"
        placeholder="Account name"
        className="text-3xl ml-5 w-4/5"
        editing={editing}
        ref={ref}
        currentItem={currentItemName ?? ''}
        onChange={(e) => {
          if (e.target.value !== '')
            setState({ ...state, name: e.target.value });
        }}
      />
    </FormField>
  );
};

export const UsernameField = ({
  ref,
  editing,
  currentItemName: currentItem,
}: FormInputProps) => (
  <FormField editing={editing} ref={ref}>
    <label htmlFor="username">Username</label>
    <FormInput
      type="text"
      name="username"
      autoComplete="false"
      ref={ref}
      editing={editing}
      currentItem={currentItem ?? ''}
    />
  </FormField>
);

type PasswordFieldProps = FormInputProps & {
  showPassword: boolean;
  setState: React.Dispatch<any>;
  state: AddressDetailState;
};

export const PasswordField = ({
  editing,
  currentItemName: currentItem,
  ref,
  showPassword,
  state,
  setState,
}: PasswordFieldProps) => {
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

  return (
    <FormField className="flex items-center" editing={editing} ref={ref}>
      <div className="basis-4/5">
        <label htmlFor="password">Password</label>
        <FormInput
          name="password"
          id="password-field"
          autoComplete="false"
          className="p-4 inline-block rounded transition"
          editing={editing}
          ref={ref}
          currentItem={currentItem ?? ''}
          type={showPassword ? 'text' : 'password'}
        />
      </div>
      <div>
        <ShowPasswordButton state={state} setState={setState} />
        {editing && (
          <GeneratePasswordButton
            ref={ref}
            generatePassword={generatePassword}
          />
        )}
        <CopyToClipboardButton ref={ref} />
      </div>
    </FormField>
  );
};

export const SiteUrlField = ({
  editing,
  currentItemName: currentItem,
  ref,
}: FormInputProps) => (
  <FormField editing={editing} ref={ref}>
    <label htmlFor="site-url">Site URL</label>
    <FormInput
      type="url"
      name="site-url"
      autoComplete="false"
      editing={editing}
      ref={ref}
      currentItem={currentItem ?? ''}
    />
  </FormField>
);

export const LogoUrlField = ({
  editing,
  currentItemName: currentItem,
  ref,
}: FormInputProps) => (
  <FormField editing={editing} ref={ref}>
    <label htmlFor="logo-url">Logo URL</label>
    <FormInput
      type="url"
      name="logo-url"
      autoComplete="false"
      editing={editing}
      ref={ref}
      currentItem={currentItem ?? ''}
    />
  </FormField>
);
