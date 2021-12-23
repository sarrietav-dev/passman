import FormField from '../FormField';
import { FormInput } from '../FormInput';
import { FormInputProps } from './FormInputProps';

export const SiteUrlField = ({
  editing,
  currentItemName: currentItem,
  ref,
}: FormInputProps) => (
  <FormField editing={editing} ref={ref}>
    <label htmlFor="site-url">Site URL</label>
    <FormInput
      type="url"
      name="site-url"
      autoComplete="false"
      editing={editing}
      ref={ref}
      currentItem={currentItem ?? ''}
    />
  </FormField>
);
