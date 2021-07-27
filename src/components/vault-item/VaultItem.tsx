import React from 'react';
import './vault-item.scss';

interface VaultItemProps {
  active?: boolean;
  imageUrl?: string;
  title: string;
  username: string;
}

export const VaultItem = ({
  active,
  imageUrl,
  title,
  username,
}: VaultItemProps) => {
  console.log(imageUrl);
  return (
    <div className={`vault-item ${active ? 'vault-item--active' : ''}`}>
      <div className="vault-item__image">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Vault item logo. Probably a logo of a company."
          />
        ) : (
          title.charAt(0).toUpperCase()
        )}
      </div>
      <div className="vault-item__info">
        <div className="vault-item__title">{title}</div>
        <div className="vault-item__username">{username}</div>
      </div>
    </div>
  );
};
