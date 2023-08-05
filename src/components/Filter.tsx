import { useState } from 'react';
import Movie from './Movie';
import { IGenre } from '../types/interfaces';
import Filters from './Filters';

const Filter = () => {
  const [filterQuery, setFilterQuery] = useState('');
  const [filterResults, setFilterResults] = useState([]);
  const [error, setError] = useState('');
  const [totalPages, setTotalPages] = useState('');
  const [totalResults, setTotalResults] = useState('');
  const [genreUIList, setGenreUIList] = useState('');

  // TODO get genres from genres - or from context! and then use them as the select options programatically

  // TODO add a RESET button to clear filters
  // TODO extract functions

  const handleFilterSubmit = async () => {
    setFilterQuery(encodeURI(selectedGenres.join(',')));
    setGenreUIList(encodeURI(genreNames.join(',')));
    setError('');
    const filterURL =
      `http://localhost:3000/filter?` + '&with_genres=' + filterQuery;
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
    <section className='filters'>
      <Filters handleGenres={handleGenres} />
      {totalResults && <span>{totalResults} result(s)</span>}
      <button onClick={handleFilterSubmit}>Search</button>
      {genreUIList && <span>You selected: {genreUIList} </span>}
      <ul>
        {filterResults?.map((movie) => (
          <Movie movie={movie} />
        ))}
      </ul>
      {error && <div>{error}</div>}
    </section>
  );
};

export default Filter;
