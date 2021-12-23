import React from 'react';

interface ButtonProps {
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

type ComponentType = React.FunctionComponent<
  ButtonProps &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
>;

export const Button: ComponentType = ({ children, className, onClick }) => (
  <button
    onClick={onClick}
    className={`text-white font-roboto text-sm mx-1 my-0 border-none rounded bg-black bg-opacity-20 hover:bg-white hover:bg-opacity-50 active:bg-white active:bg-opacity-30 ${className}`}
  >
    {children}
  </button>
);
