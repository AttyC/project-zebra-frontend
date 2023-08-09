import React, { useContext } from 'react';
import Movie from './Movie';
import { SearchContext } from '../hooks/SearchContext';

const FilterResults: React.FC = () => {
    const { movies, error, loading } = useContext(SearchContext);

    return (
        <ul className="flex flex-wrap justify-center">
            {loading && <li>Loading...</li>}
            {!loading &&
                movies &&
                movies.map((movie) => (
                    <li key={movie.id}>
                        <Movie movie={movie} />
                    </li>
                ))}
            {!loading && movies && movies.length === 0 && <li>No results</li>}
            {error && <li>{error}</li>}
        </ul>
    );
};

export default FilterResults;
