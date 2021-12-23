import FormField from '../FormField';
import { FormInput } from '../FormInput';
import { FormInputProps } from './FormInputProps';

export const UsernameField = ({
  ref,
  editing,
  currentItemName: currentItem,
}: FormInputProps) => (
  <FormField editing={editing} ref={ref}>
    <label htmlFor="username">Username</label>
    <FormInput
      type="text"
      name="username"
      autoComplete="false"
      ref={ref}
      editing={editing}
      currentItem={currentItem ?? ''}
    />
  </FormField>
);
