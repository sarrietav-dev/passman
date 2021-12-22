import { useState } from 'react';

interface ImgProps {
  url?: string;
  title?: string;
}

export const Img = ({ url, title }: ImgProps) => {
  const [imgError, setImgError] = useState(false);

  const getJsx = () => {
    if (url !== '' || url !== undefined) {
      if (!imgError) {
        return (
          <img
            className="w-full z-10 rounded m-auto"
            src={url}
            alt="Vault item logo. Probably a logo of a company."
            onError={() => {
              setImgError(true);
            }}
          />
        );
      }
    }
    return <span>{title?.charAt(0).toUpperCase()}</span>;
  };

  return getJsx();
};
