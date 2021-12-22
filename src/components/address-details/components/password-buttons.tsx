import { AddressDetailState } from '../AddressDetailsForm';

export const ShowPasswordButton = ({
  state,
  setState,
}: {
  setState: React.Dispatch<React.SetStateAction<AddressDetailState>>;
  state: AddressDetailState;
}) => {
  return (
    <button
      className="btn btn--password"
      onClick={(e) => {
        e.preventDefault();
        setState({ ...state, showPassword: !state.showPassword });
      }}
    >
      <i className={`fa fa-eye${state.showPassword ? '-slash' : ''}`}></i>
    </button>
  );
};

export const CopyToClipboardButton = ({
  ref,
}: {
  ref: React.RefObject<HTMLInputElement>;
}) => {
  return (
    <button
      className="btn btn--password"
      onClick={(e) => {
        e.preventDefault();
        navigator.clipboard.writeText(ref.current!.value);
      }}
    >
      <i className="fa fa-copy"></i>
    </button>
  );
};

export const GeneratePasswordButton = ({
  ref,
  generatePassword,
}: {
  ref: React.RefObject<HTMLInputElement>;
  generatePassword: () => string;
}) => {
  return (
    <button
      className="btn btn--password"
      onClick={(e) => {
        e.preventDefault();
        ref.current!.value = generatePassword();
      }}
    >
      <i className="fa fa-refresh"></i>
    </button>
  );
};
