import SearchInfo from "./SearchInfo";
import Sort from "./Sort";

const Header = ({onSearch, onSort}) => {
  return (
    <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
      <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
        <SearchInfo onSearch={onSearch}/>
        <Sort onSort = {onSort}/>
      </div>
    </header>
  );
};

export default Header;
