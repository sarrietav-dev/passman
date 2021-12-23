interface FormFieldProps {
  className?: string;
  ref?: React.RefObject<HTMLInputElement>;
}

const FormField: React.FC<FormFieldProps> = ({ className, ref, children }) => {
  const focusInput = (ref?: React.RefObject<HTMLInputElement>) => {
    ref?.current?.focus();
  };

  return (
    <div
      className={`p-4 inline-block rounded transition  ${className ?? ''}`}
      onClick={() => focusInput(ref)}
    >
      {children}
    </div>
  );
};

export default FormField;
