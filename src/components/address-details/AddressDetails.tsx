import React, { FormEvent, Ref, useContext, useState } from 'react';
import './address-details.scss';
import '../../sass/button.scss';
import { AddressDetailsForm } from './AddressDetailsForm';
import { VaultItem } from '../../types/types';
import { AppContext } from '../../context/AppContext';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

export const AddressDetails = () => {
  const app = useContext(AppContext);

  const [state, setState] = useState({
    editingMode: false,
  });

  const handleEditingMode = () => setState({ editingMode: !state.editingMode });

  const onSubmit = (e: any) => {
    e.preventDefault();
    const [id, account_name, username, password, url, logoUrl, created_at] = [
      uuid(),
      e.target['0'].value,
      e.target['1'].value,
      e.target['2'].value,
      e.target['6'].value,
      e.target['7'].value,
      Date(),
    ];

    app.addItem({
      account_name: account_name as string,
      id,
      created_at,
      username: username as string,
      password: password as string,
      site_url: url as string,
      logo_url: logoUrl as string,
    });
    handleEditingMode();
  };

  const getFormParent = () => {
    const child = (
      <AddressDetailsForm
        editingMode={state.editingMode}
        handleEditingMode={handleEditingMode}
      />
    );

    return state.editingMode ? (
      <form className="form" id="form" onSubmit={onSubmit}>
        {child}
      </form>
    ) : (
      <div className="form">{child}</div>
    );
  };

  return <div className="address-details">{getFormParent()}</div>;
};
