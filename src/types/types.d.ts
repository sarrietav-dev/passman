import { VaultItem } from './../components/vault-item/VaultItem';
export interface VaultItem {
  id: string;
  account_name: string;
  username: string;
  password: string;
  site_url: string;
  logo_url: string;
  created_at: string;
}

export interface PasswordFormFieldValues {
  accountName: string;
  username: string;
  password: string;
  url: string;
  logoUrl: string;
  create_date: Date;
}
