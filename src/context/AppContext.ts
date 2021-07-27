import { createContext } from 'react';
import { VaultItem } from '../types/types';

export interface AppContextState {
  vaultItems: VaultItem[];
  currentItem: VaultItem | undefined;
  addItem: (item: VaultItem) => void;
  setCurrentItem: (itemId: string) => void;
}

export const appContextDefaultValues: AppContextState = {
  vaultItems: [],
  currentItem: undefined,
  addItem: () => {},
  setCurrentItem: () => {},
};

export const AppContext = createContext<AppContextState>(
  appContextDefaultValues,
);
