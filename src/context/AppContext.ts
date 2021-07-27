import { createContext } from 'react';
import { VaultItem } from '../types/types';

export interface AppContextState {
  vaultItems: VaultItem[];
  currentItem: VaultItem | undefined;
  addItem: (item: VaultItem) => Promise<void>;
  setCurrentItem: (itemId: string) => void;
  updateItem: (item: VaultItem) => Promise<void>;
}

export const appContextDefaultValues: AppContextState = {
  vaultItems: [],
  currentItem: undefined,
  addItem: async () => {},
  setCurrentItem: () => {},
  updateItem: async () => {},
};

export const AppContext = createContext<AppContextState>(
  appContextDefaultValues,
);
