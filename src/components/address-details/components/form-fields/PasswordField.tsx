import { AddressDetailState } from '../../AddressDetailsForm';

import FormField from '../FormField';
import { FormInput } from '../FormInput';
import {
  ShowPasswordButton,
  GeneratePasswordButton,
  CopyToClipboardButton,
} from '../password-buttons';
import { FormInputProps } from './FormInputProps';

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
