import React, { useContext } from 'react';
import MovieList from './MovieList';
import { SearchContext } from '../hooks/SearchContext';

const FilterResults: React.FC = () => {
    const { movies, error, loading } = useContext(SearchContext);

    return (
        <section>
            {loading && (
                <div className="text-white font-semibold text-center p-2 my-2">
                    Loading...
                </div>
            )}
            {!loading && movies && <MovieList movies={movies} />}
            {!loading && movies && movies.length === 0 && <li>No results</li>}
            <div className="text-white font-semibold text-center p-2 my-2">
                {error && error}
            </div>
        </section>
    );
};

export default FilterResults;
