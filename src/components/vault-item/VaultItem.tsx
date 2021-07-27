import React, { useState } from 'react';
import './vault-item.scss';

interface VaultItemProps {
  active?: boolean;
  imageUrl?: string;
  title: string;
  username: string;
  onClick: () => void;
}

export const VaultItem = ({
  active,
  imageUrl,
  title,
  username,
  onClick,
}: VaultItemProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`vault-item ${active ? 'vault-item--active' : ''}`}
      onClick={onClick}
    >
      <div className="vault-item__image">
        {imageUrl ? (
          !imgError ? (
            <img
              src={imageUrl}
              alt="Vault item logo. Probably a logo of a company."
              onError={() => {
                setImgError(true);
              }}
            />
          ) : (
            title.charAt(0).toUpperCase()
          )
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
