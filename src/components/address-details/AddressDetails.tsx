import React, { useState } from 'react';
import './address-details.scss';
import '../../sass/button.scss';
import { AddressDetailsForm } from './AddressDetailsForm';

export const AddressDetails = () => {
  const [state, setState] = useState({
    editingMode: false,
  });

  const handleEditingMode = () => setState({ editingMode: !state.editingMode });

  const getFormParent = () => {
    const child = <AddressDetailsForm editingMode={state.editingMode} />;

    return state.editingMode ? (
      <form className="form">{child}</form>
    ) : (
      <div className="form">{child}</div>
    );
  };

  return (
    <div className="address-details">
      <div className="action-buttons">
        <button
          className={`btn btn--${state.editingMode ? 'submit' : 'edit'}`}
          onClick={handleEditingMode}
        >
          <i className={`fa fa-${state.editingMode ? 'check' : 'pencil'}`}></i>
          {state.editingMode ? 'Submit' : 'Edit'}
        </button>
        <button className="btn btn--delete">
          <i className="fa fa-trash"></i>
          Delete
        </button>
      </div>
      {getFormParent()}
    </div>
  );
};
