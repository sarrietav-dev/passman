import './search-bar.scss';

interface SearchBarProps {
  changeSearchString: (_: string) => void;
}

export const SearchBar = ({ changeSearchString }: SearchBarProps) => {
  return (
    <div className="search-bar">
      <i className="fa fa-search"></i>
      <input
        type="text"
        onChange={(e) => {
          changeSearchString(e.target.value);
        }}
        placeholder="Search password"
      />
    </div>
  );
};
