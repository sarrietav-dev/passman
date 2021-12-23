import { Button } from '../../Button';
import { AddressDetailState } from '../AddressDetailsForm';

interface PasswordButtonProps {
  callback: () => any;
}

const PasswordButton: React.FC<PasswordButtonProps> = ({
  children,
  callback,
}) => (
  <Button
    className="group bg-transparent px-3 py-1"
    onClick={(e) => {
      e.preventDefault();
      callback();
    }}
  >
    {children}
  </Button>
);

interface ShowPasswordButtonProps {
  setState: React.Dispatch<React.SetStateAction<AddressDetailState>>;
  state: AddressDetailState;
}

export const ShowPasswordButton: React.FC<ShowPasswordButtonProps> = ({
  state,
  setState,
}) => (
  <PasswordButton
    callback={() => setState({ ...state, showPassword: !state.showPassword })}
  >
    <i
      className={`text-inherit group-hover:text-gray-400 fa fa-eye${
        state.showPassword ? '-slash' : ''
      }`}
    ></i>
  </PasswordButton>
);

type CopyToClipboardButtonProps = { ref: React.RefObject<HTMLInputElement> };

export const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({
  ref,
}) => (
  <PasswordButton
    callback={() => navigator.clipboard.writeText(ref.current!.value)}
  >
    <i className="text-inherit group-hover:text-gray-400 fa fa-copy"></i>
  </PasswordButton>
);

interface GeneratePasswordButtonProps {
  ref: React.RefObject<HTMLInputElement>;
  generatePassword: () => string;
}

export const GeneratePasswordButton: React.FC<GeneratePasswordButtonProps> = ({
  ref,
  generatePassword,
}) => (
  <PasswordButton callback={() => (ref.current!.value = generatePassword())}>
    <i className="text-inherit group-hover:text-gray-400 fa fa-refresh"></i>
  </PasswordButton>
);
