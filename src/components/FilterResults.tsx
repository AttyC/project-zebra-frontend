import React from 'react';
import { IMovie } from '../types/interfaces';
import Movie from './Movie';

interface IFilterResults {
  filterResults: Array<IMovie>;
}

const FilterResults: React.FC<IFilterResults> = ({ filterResults }) => (
    <ul className="flex flex-wrap justify-center">
        {filterResults?.map((movie) => (
            <li key={movie.id}>
                <Movie movie={movie} />
            </li>
        ))}
    </ul>
);

export default FilterResults;
