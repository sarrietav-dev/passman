import React, { RefObject, useRef } from 'react';
import './address-details.scss';
import '../../sass/button.scss';

export const AddressDetails = () => {
  const nameFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const urlFieldRef = useRef<HTMLInputElement>(null);

  const focusInput = (ref: RefObject<HTMLInputElement>) => {
    ref.current?.focus();
  };

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
      <header>
        <div className="account-logo">A</div>
        <h1 className="account-name">Account Name</h1>
      </header>
      <hr />
      <form action="" className="form">
        <div className="form__field" onClick={() => focusInput(nameFieldRef)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id=""
            autoComplete="false"
            required
            ref={nameFieldRef}
          />
        </div>

        <div
          className="form__field form__field--pass"
          onClick={() => focusInput(passwordFieldRef)}
        >
          <div className="password-field-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form__field"
              id="password-field"
              autoComplete="false"
              required
              ref={passwordFieldRef}
            />
          </div>
          <div className="password-buttons">
            <button className="btn btn--password">
              <i className="fa fa-eye"></i>
            </button>
            <button className="btn btn--password">
              <i className="fa fa-refresh"></i>
            </button>
            <button className="btn btn--password">
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
