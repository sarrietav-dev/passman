import { VaultItem } from './../components/vault-item/VaultItem';
export interface VaultItem {
  id: string;
  account_name: string;
  username: string;
  password: string;
  site_url: string;
  logo_url: string;
  created_at: Date;
}
