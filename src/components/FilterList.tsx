import React from 'react';
import { IGenre } from '../types/interfaces';
interface IFilterListProps {
  createGenreList: (genre: IGenre) => void;
}

const genres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

const FilterList: React.FC<IFilterListProps> = ({ createGenreList }) => {
  return (
    <div>
      <h2>Filtered Results</h2>
      <ul className='filter__list'>
        {genres?.map((genre) => (
          <li key={genre.id} onClick={() => createGenreList(genre)}>
            <p className='filter__list--item'>{genre.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterList;
