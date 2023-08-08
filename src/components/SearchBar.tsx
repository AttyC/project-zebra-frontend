import { useState } from 'react';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');
    const [totalPages, setTotalPages] = useState('');
    const [totalResults, setTotalResults] = useState('');

    const handleSearchInput = (searchInput: string) => {
        setError('');
        setTotalResults('');
        setSearchQuery(searchInput);
    };

    const handleSearchSubmit = async () => {
        setError('');
        const searchUrl = `http://localhost:3000/search?`;
        const searchParams = new URLSearchParams({
            page: '1',
            query: searchQuery,
        }).toString();

        try {
            const response = await fetch(searchUrl + searchParams);
            const data = await response.json();
            setSearchResults(data.results);
            setTotalPages(data.total_pages.toString());
            setTotalResults(data.total_results.toString());
        } catch (error) {
            console.error('Error fetching movies:', error);
            setError('There was an error fetching movies! Please try again.');
        }
    };

    return (
        <div className="flex justify-between items-center mb-5">
            <h2 className="text-3xl">Find your favorite Movie </h2>

            <div>
                <input
                    size={30}
                    className="border p-2 rounded"
                    type="text"
                    placeholder="Search for a movie..."
                    value={searchQuery}
                    onChange={(e) => handleSearchInput(e.target.value)}
                />
                <button onClick={handleSearchSubmit}>Search</button>
                {totalResults && <span>{totalResults} result(s)</span>}
                {error && <div>{error}</div>}
            </div>
        </div>
    );
};

export default SearchBar;
