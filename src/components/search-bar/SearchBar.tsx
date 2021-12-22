interface SearchBarProps {
  changeSearchString: (_: string) => void;
}

export const SearchBar = ({ changeSearchString }: SearchBarProps) => {
  return (
    <div className="flex items-center text-xs w-full">
      <i className="z-10 -mr-5 text-gray-500 fa fa-search"></i>
      <input
        className="bg-gray-600 border-none py-3 px-5 pl-8 w-full outline-none rounded transition-all placeholder:text-gray-400 focus:bg-gray-700"
        type="text"
        onChange={(e) => {
          changeSearchString(e.target.value);
        }}
        placeholder="Search password"
      />
    </div>
  );
};
