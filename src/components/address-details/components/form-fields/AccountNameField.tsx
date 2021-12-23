import { VaultItem } from '../../../../types/types';
import { Img } from '../../../Img';
import { AddressDetailState } from '../../AddressDetailsForm';
import FormField from '../FormField';
import { FormInput } from '../FormInput';
import { FormInputProps } from './FormInputProps';

type AccountNameFieldProps = FormInputProps & {
  currentItem: VaultItem | undefined;
  state: AddressDetailState;
  setState: React.Dispatch<any>;
};

export const AccountNameField = ({
  editing,
  ref,
  currentItemName,
  currentItem,
  state,
  setState,
}: AccountNameFieldProps) => {
  const ItemLogo = () =>
    isLogoAvailable() ? (
      <Img url={currentItem?.logo_url} title={getLogoText()} />
    ) : (
      <>getLogoText()</>
    );

  const isLogoAvailable = () =>
    currentItem?.logo_url !== '' || currentItem !== undefined;

  const getLogoText = () => {
    if (currentItem) return currentItem?.account_name.charAt(0).toUpperCase();
    return state.name === undefined || state.name === ''
      ? '@'
      : state.name.charAt(0).toUpperCase();
  };

  return (
    <FormField className="flex place-content-center font-roboto" ref={ref}>
      <span className="text-3xl text-gray-400 w-16 h-16 text-center rounded inline-flex place-items-center">
        <ItemLogo />
      </span>
      <FormInput
        type="text"
        placeholder="Account name"
        className="text-3xl ml-5 w-4/5"
        editing={editing}
        ref={ref}
        currentItem={currentItemName ?? ''}
        onChange={(e) => {
          if (e.target.value !== '')
            setState({ ...state, name: e.target.value });
        }}
      />
    </FormField>
  );
};
