import { FunctionComponent, RefObject } from 'react';

interface FormFieldProps {
  className?: string;
  editing?: boolean;
  ref?: RefObject<HTMLInputElement>;
}

const FormField: FunctionComponent<FormFieldProps> = ({
  className,
  editing,
  ref,
  children,
}) => {
  const focusInput = (ref?: RefObject<HTMLInputElement>) => {
    ref?.current?.focus();
  };

  return (
    <div
      className={`p-4 inline-block rounded transition  ${className ?? ''} ${
        !editing ? 'form__field--disabled' : ''
      }`}
      onClick={() => focusInput(ref)}
    >
      {children}
    </div>
  );
};

export default FormField;
