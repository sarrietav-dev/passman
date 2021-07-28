import React from 'react';
import { useState } from 'react';
import './address-details.scss';
import '../../sass/button.scss';
import { AddressDetailsForm } from './AddressDetailsForm';
import { v4 as uuid } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { patchItem, postItem } from '../../store/thunks/app-thunks';

export const AddressDetails = () => {
  const { currentItem } = useAppSelector((state) => state.app);
  const { editingMode } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  const onSubmit = (e: any) => {
    const [id, account_name, username, password, url, logoUrl, created_at] = [
      uuid(),
      e.target['0'].value,
      e.target['1'].value,
      e.target['2'].value,
      e.target['6'].value,
      e.target['7'].value,
      Date(),
    ];

    if (currentItem === undefined) {
      dispatch(
        postItem({
          account_name: account_name as string,
          id,
          created_at,
          username: username as string,
          password: password as string,
          site_url: url as string,
          logo_url: logoUrl as string,
        }),
      );
    } else {
      dispatch(
        patchItem({
          account_name: account_name as string,
          id: currentItem.id,
          created_at,
          username: username as string,
          password: password as string,
          site_url: url as string,
          logo_url: logoUrl as string,
        }),
      );
    }
  };

  const getFormParent = () => {
    const child = <AddressDetailsForm />;

    return editingMode ? (
      <form className="form" id="form" onSubmit={onSubmit}>
        {child}
      </form>
    ) : (
      <div className="form">{child}</div>
    );
  };

  return <div className="address-details">{getFormParent()}</div>;
};
