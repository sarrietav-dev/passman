import React from 'react';
import './address-details.scss';
import '../sass/button.scss';

export const AddressDetails = () => {
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
        <div className="form__field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="" autoComplete="false" required />
        </div>

        <div className="form__field form__field--pass">
          <div className="password-field-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form__field"
              id="password-field"
              autoComplete="false"
              required
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

        <div className="form__field">
          <label htmlFor="site-url">Site URL</label>
          <input
            type="url"
            name="site-url"
            id=""
            autoComplete="false"
            required
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
