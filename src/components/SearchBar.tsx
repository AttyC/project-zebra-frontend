import { useContext } from 'react';
import { SearchContext } from '../hooks/SearchContext';

const SearchBar = () => {
    const { query, setQuery } = useContext(SearchContext);

    const handleChange = (value: string) => {
        setQuery(value);
    };
    return (
        <input
            type="text"
            placeholder="Type to search for a movie..."
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            className="searchInput"
        />
    );
};

export default SearchBar;
