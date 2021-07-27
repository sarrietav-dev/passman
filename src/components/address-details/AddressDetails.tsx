import React, { RefObject, useRef, useState } from 'react';
import './address-details.scss';
import '../../sass/button.scss';

interface AddressDetailState {
  name: string | undefined;
  showPassword: boolean;
}

export const AddressDetails = () => {
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
    <div className="address-details">
      <div className="action-buttons">
        <div className="btn btn--edit">
          <i className="fa fa-pencil"></i>
          Edit
        </div>
        <button className="btn btn--delete">
          <i className="fa fa-trash"></i>
          Delete
        </button>
      </div>
      <form action="" className="form">
        <header
          className="form__field form__field--header"
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
          />
        </header>
        <hr />
        <div
          className="form__field"
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
          />
        </div>

        <div
          className="form__field form__field--pass"
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
              <i
                className={`fa fa-eye${state.showPassword ? '-slash' : ''}`}
              ></i>
            </button>
            <button
              className="btn btn--password"
              onClick={(e) => {
                e.preventDefault();
                passwordFieldRef.current!.value = generatePassword();
              }}
            >
              <i className="fa fa-refresh"></i>
            </button>
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

        <div className="form__field" onClick={() => focusInput(urlFieldRef)}>
          <label htmlFor="site-url">Site URL</label>
          <input
            type="url"
            name="site-url"
            id=""
            autoComplete="false"
            required
            ref={urlFieldRef}
          />
        </div>
        <div className="form__field">
          <label htmlFor="">Created at</label>
          <p className="creation-date">{Date().toString()}</p>
        </div>
      </form>
    </div>
  );
};
