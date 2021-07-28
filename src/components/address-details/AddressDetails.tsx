import React, { FormEvent, RefObject, useRef, useState } from 'react';
import './address-details.scss';
import '../../sass/button.scss';
import { AddressDetailsForm } from './AddressDetailsForm';
import { v4 as uuid } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { patchItem, postItem } from '../../store/thunks/app-thunks';
import axios from 'axios';

export const AddressDetails = () => {
  const { currentItem } = useAppSelector((state) => state.app);
  const { editingMode } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  const refs: {
    [key: string]: RefObject<HTMLInputElement>;
  } = {
    nameFieldRef: useRef<HTMLInputElement>(null),
    usernameFieldRef: useRef<HTMLInputElement>(null),
    passwordFieldRef: useRef<HTMLInputElement>(null),
    urlFieldRef: useRef<HTMLInputElement>(null),
    logoFieldRef: useRef<HTMLInputElement>(null),
  };

  const onSubmit = (e: FormEvent) => {
    Object.keys(refs).forEach((refKey) => {
      const ref = refs[refKey].current;
      if (ref?.classList.contains('form__field--invalid'))
        ref?.classList.remove('form__field--invalid');
      ref?.setCustomValidity('');
    });

    const areFilled = Object.keys(refs).filter(
      (ref) =>
        refs[ref].current?.value === '' ||
        refs[ref].current?.value === undefined,
    );

    if (areFilled.length !== 0) {
      e.preventDefault();
      areFilled.forEach((key) => {
        refs[key].current?.classList.add('form__field--invalid');
        refs[key].current?.setCustomValidity('Please fill out this field');
      });
      return false;
    }

    axios
      .get(refs.urlFieldRef.current!.value)
      .then((response) => {
        if (response.status > 400) {
          e.preventDefault();
          refs.ulrFieldRef.current?.classList.add('form__field--invalid');
          refs.urlFieldRef.current?.setCustomValidity(
            'This url does not exist',
          );
          throw Error();
        }
      })
      .then(() => {
        if (currentItem === undefined) {
          dispatch(
            postItem({
              id: uuid(),
              created_at: Date(),
              account_name: refs.nameFieldRef.current!.value,
              username: refs.usernameFieldRef.current!.value,
              password: refs.passwordFieldRef.current!.value,
              site_url: refs.urlFieldRef.current!.value,
              logo_url: refs.logoFieldRef.current!.value,
            }),
          );
        } else {
          dispatch(
            patchItem({
              id: currentItem.id,
              created_at: Date(),
              account_name: refs.nameFieldRef.current!.value,
              username: refs.usernameFieldRef.current!.value,
              password: refs.passwordFieldRef.current!.value,
              site_url: refs.urlFieldRef.current!.value,
              logo_url: refs.logoFieldRef.current!.value,
            }),
          );
        }
      })
      .catch((error) => console.error(error));
  };

  const getFormParent = () => {
    const child = <AddressDetailsForm refs={refs} />;

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
