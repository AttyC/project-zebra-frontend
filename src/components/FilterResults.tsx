import React from 'react';
import { IMovie } from '../types/interfaces';
import Movie from './Movie';

interface IFilterResults {
  filterResults: Array<IMovie>;
}

const FilterResults: React.FC<IFilterResults> = ({ filterResults }) => {
  return (
    <div>
      Filtered Results
      <ul>
        {filterResults?.map((movie) => (
          <li key={movie.id}>
            <Movie movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterResults;
