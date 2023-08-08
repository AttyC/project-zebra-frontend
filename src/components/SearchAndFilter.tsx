import SearchBar from './SearchBar';
import Filter from './Filter';

const SearchAndFilter: React.FC = () => (
    <section className={`flex flex-col`}>
        <SearchBar />
        <Filter />
    </section>
);

export default SearchAndFilter;