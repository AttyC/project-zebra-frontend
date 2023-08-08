import React, { useContext } from 'react';
import Movie from './Movie';
import { SearchContext } from '../hooks/SearchContext';

const FilterResults: React.FC = () => {
    const { movies } = useContext(SearchContext);

    return (
        <ul className="flex flex-wrap justify-center">
            {movies?.map((movie) => (
                <li key={movie.id}>
                    <Movie movie={movie} />
                </li>
            ))}
        </ul>
    )
}

export default FilterResults;
