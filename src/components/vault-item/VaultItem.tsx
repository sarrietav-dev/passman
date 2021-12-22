import { Img } from '../Img';

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
      className={`w-full my-5 mx-0 py-3 px-4 flex items-stretch rounded-xl transition hover:bg-white hover:bg-opacity-10 active:bg-slate-500 active:opacity-10 ${
        active ? 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex place-content-center w-1/6 bg-gray-500 rounded">
        {<Img url={imageUrl} title={title} />}
      </div>
      <div className="flex flex-col justify-between ml-5">
        <div className="font-roboto font-medium mb-1">{title}</div>
        <div className="opacity-50">{username}</div>
      </div>
    </div>
  );
};
