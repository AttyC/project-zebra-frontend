import { useContext } from 'react';
import { SearchContext } from '../hooks/SearchContext';

const SearchBar = () => {
    const { query, setQuery } = useContext(SearchContext);

    const handleChange = (value: string) => {
        setQuery(value);
    };
    return (
        <>
            <label
                htmlFor="searchInput"
                className="max-w-sm font-semibold my-2 text-xl"
            >
                Search for a movie...
            </label>
            <input
                type="text"
                placeholder="Type to search for a movie..."
                value={query}
                onChange={(e) => handleChange(e.target.value)}
                className="searchInput"
                id="searchInput"
            />
        </>
    );
};

export default SearchBar;
