import { FormEvent, RefObject, useRef } from 'react';
import '../../sass/button.scss';
import { AddressDetailsForm } from './AddressDetailsForm';
import { v4 as uuid } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { patchItem, postItem } from '../../store/thunks/app-thunks';

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
    e.preventDefault();

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
  };

  const getFormParent = () => {
    const child = <AddressDetailsForm refs={refs} />;

    return editingMode ? (
      <form
        className="flex flex-col -mt-5"
        id="form"
        onSubmit={onSubmit}
        method="POST"
      >
        {child}
      </form>
    ) : (
      <div className="flex flex-col -mt-5">{child}</div>
    );
  };

  return (
    <div className="px-5 py-3 lg:py-14 lg:px-28 flex flex-col justify-evenly h-screen w-full bg-neutral-800 border-l-[0.5px] border-solid border-black">
      {getFormParent()}
    </div>
  );
};
