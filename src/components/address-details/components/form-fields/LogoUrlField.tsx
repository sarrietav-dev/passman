
import FormField from '../FormField';
import { FormInput } from '../FormInput';
import { FormInputProps } from './FormInputProps';

export const LogoUrlField = ({
  editing,
  currentItemName: currentItem,
  ref,
}: FormInputProps) => (
  <FormField editing={editing} ref={ref}>
    <label htmlFor="logo-url">Logo URL</label>
    <FormInput
      type="url"
      name="logo-url"
      autoComplete="false"
      editing={editing}
      ref={ref}
      currentItem={currentItem ?? ''}
    />
  </FormField>
);
