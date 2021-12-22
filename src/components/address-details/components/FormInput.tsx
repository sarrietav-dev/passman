export const FormInput = ({
  type,
  onChange,
  ref,
  editing,
  currentItem,
  placeholder,
  className,
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { editing: boolean; currentItem: string }) => (
  <input
    type={type}
    className={`w-full px-3 py-2 mr-3 bg-transparent outline-none rounded border-2 border-transparent transition focus:invalid:border-red-500 focus:valid:border-green-500 hover:bg-transparent ${className}`}
    placeholder={placeholder}
    onChange={onChange}
    ref={ref}
    disabled={!editing}
    required
    defaultValue={currentItem}
  />
);
