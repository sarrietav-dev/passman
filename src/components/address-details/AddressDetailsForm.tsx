import React, { RefObject, useRef, useState } from 'react';
import './address-details.scss';
import '../../sass/button.scss';

interface AddressDetailState {
  name: string | undefined;
  showPassword: boolean;
}

interface AddressDetailsFormProps {
  editingMode: boolean;
}

export const AddressDetailsForm = ({
  editingMode,
}: AddressDetailsFormProps) => {
  const [state, setState] = useState<AddressDetailState>({
    name: undefined,
    showPassword: false,
  });

  const nameFieldRef = useRef<HTMLInputElement>(null);
  const usernameFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const urlFieldRef = useRef<HTMLInputElement>(null);

  const focusInput = (ref: RefObject<HTMLInputElement>) => {
    ref.current?.focus();
  };

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
    <>
      <header
        className={`form__field form__field--header ${
          !editingMode ? 'form__field--disabled' : ''
        }`}
        onClick={() => focusInput(nameFieldRef)}
      >
        <span className="account-logo">
          {state.name?.charAt(0).toUpperCase() ?? '@'}
        </span>
        <input
          type="text"
          name=""
          id=""
          className="account-name"
          placeholder="Account name"
          onChange={(e) => {
            if (e.target.value !== '')
              setState({ ...state, name: e.target.value });
          }}
          ref={nameFieldRef}
          disabled={!editingMode}
        />
      </header>
      <hr />
      <div
        className={`form__field ${!editingMode ? 'form__field--disabled' : ''}`}
        onClick={() => focusInput(usernameFieldRef)}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id=""
          autoComplete="false"
          required
          ref={usernameFieldRef}
          disabled={!editingMode}
        />
      </div>

      <div
        className={`form__field form__field--pass ${
          !editingMode ? 'form__field--disabled' : ''
        }`}
        onClick={() => focusInput(passwordFieldRef)}
      >
        <div className="password-field-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type={state.showPassword ? 'text' : 'password'}
            name="password"
            className="form__field"
            id="password-field"
            autoComplete="false"
            required
            ref={passwordFieldRef}
            disabled={!editingMode}
          />
        </div>
        <div className="password-buttons">
          <button
            className="btn btn--password"
            onClick={(e) => {
              e.preventDefault();
              setState({ ...state, showPassword: !state.showPassword });
            }}
          >
            <i className={`fa fa-eye${state.showPassword ? '-slash' : ''}`}></i>
          </button>
          {editingMode && (
            <button
              className="btn btn--password"
              onClick={(e) => {
                e.preventDefault();
                passwordFieldRef.current!.value = generatePassword();
              }}
            >
              <i className="fa fa-refresh"></i>
            </button>
          )}
          <button
            className="btn btn--password"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(passwordFieldRef.current!.value);
            }}
          >
            <i className="fa fa-copy"></i>
          </button>
        </div>
      </div>

      <div
        className={`form__field ${!editingMode ? 'form__field--disabled' : ''}`}
        onClick={() => focusInput(urlFieldRef)}
      >
        <label htmlFor="site-url">Site URL</label>
        <input
          type="url"
          name="site-url"
          id=""
          autoComplete="false"
          required
          ref={urlFieldRef}
          disabled={!editingMode}
        />
      </div>
      <div className="form__field">
        <label htmlFor="">Created at</label>
        <p className="creation-date">{Date().toString()}</p>
      </div>
    </>
  );
};
