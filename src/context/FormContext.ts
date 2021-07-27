import { createContext } from 'react';
import { Control, UseFormRegister } from 'react-hook-form';
import { VaultItem } from '../types/types';

export interface FormContextState {
  register: UseFormRegister<VaultItem> | undefined;
  control: Control<VaultItem> | undefined;
}

export const formContextDefaultValues: FormContextState = {
  register: undefined,
  control: undefined,
};

export const FormContext = createContext<FormContextState>(
  formContextDefaultValues,
);
