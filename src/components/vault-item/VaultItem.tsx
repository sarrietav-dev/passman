import React from 'react';
import { Img } from '../Img';
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
  return (
    <div
      className={`vault-item ${active ? 'vault-item--active' : ''}`}
      onClick={onClick}
    >
      <div className="vault-item__image">
        {<Img url={imageUrl} title={title} />}
      </div>
      <div className="vault-item__info">
        <div className="vault-item__title">{title}</div>
        <div className="vault-item__username">{username}</div>
      </div>
    </div>
  );
};
