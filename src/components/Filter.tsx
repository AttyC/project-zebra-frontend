import { useState } from 'react';
import Movie from './Movie';
import { IGenre } from '../types/interfaces';

const Filter = () => {
  const [filterQuery, setFilterQuery] = useState('');
  const [filterResults, setFilterResults] = useState([]);
  const [error, setError] = useState('');
  const [totalPages, setTotalPages] = useState('');
  const [totalResults, setTotalResults] = useState('');
  const [genreUIList, setGenreUIList] = useState('');

  // TODO get genres from genres - or from context! and then use them as the select options programatically
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

  const handleFilterSubmit = async () => {
    setFilterQuery(encodeURI(selectedGenres.join(',')));
    setGenreUIList(encodeURI(genreNames.join(',')));
    setError('');
    const filterURL =
      `http://localhost:3000/movie_genre?` + '&with_genres=' + filterQuery;
    try {
      const response = await fetch(filterURL);
      const data = await response.json();
      setFilterResults(data.results);
      setTotalPages(data.total_pages.toString());
      setTotalResults(data.total_results.toString());
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('There was an error fetching movies! Please try again.');
    }
  };

  const selectedGenres: string[] = [];
  const genreNames: string[] = [];

  const constructLists = (genre: IGenre) => {
    if (selectedGenres.length === 0) {
      selectedGenres.push(genre.id.toString());
      genreNames.push(genre.name);
    }
    if (!selectedGenres.includes(genre.id.toString())) {
      selectedGenres.push(genre.id.toString());
      genreNames.push(genre.name);
    }
  };

  const handleGenres = (genre: IGenre) => {
    setError('');
    setTotalResults('');
    constructLists(genre);
  };

  return (
    <div>
      <label htmlFor='filter'>Refine results</label>

      <ul className='genre-list'>
        {genres?.map((genre) => (
          <li onClick={() => handleGenres(genre)}>{genre.name}</li>
        ))}
      </ul>
      {totalResults && <span>{totalResults} result(s)</span>}
      <button onClick={handleFilterSubmit}>Search</button>
      {genreUIList && <span>You selected: {genreUIList} </span>}
      <div>Here are your results:</div>
      <ul>
        {filterResults?.map((movie) => (
          <Movie movie={movie} />
        ))}
      </ul>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Filter;
