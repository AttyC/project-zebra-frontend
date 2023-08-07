import { useState } from 'react';
import { IGenre, IMovie } from '../types/interfaces';
import FilterList from './FilterList';
import FilterResults from './FilterResults';

const Filter = () => {
  const [filterResults, setFilterResults] = useState<Array<IMovie>>([]);
  const [error, setError] = useState('');
  const [totalPages, setTotalPages] = useState('');
  const [totalResults, setTotalResults] = useState('');
  const [genreNames, setGenreNames] = useState<Array<string>>([]);

  const FILTER_URL = `http://localhost:3000/filter?`;
  const HOME_URL = `http://localhost:3000/test`;
  const selectedGenres:Array<string> = []
  // TODO get genres from genres - or from context! and then use them as the select options programatically

  const fetchFilteredData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setFilterResults(data.results);
      setTotalPages(data.total_pages.toString());
      setTotalResults(data.total_results.toString());
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('There was an error fetching movies! Please try again.');
    }
  };

  const clearFilters = async () => {
    setGenreNames([]);
    setError('');
    fetchFilteredData(HOME_URL);
  };
  const toggleClass = (id) => {}
  const createGenreList = (genre: IGenre) => {
toggleClass(id)


    if (selectedGenres.length === 0) {
      selectedGenres.push(genre.id.toString());
      setGenreNames([...genreNames, genre.name]);
    }
    if (!selectedGenres.includes(genre.id.toString())) {
      selectedGenres.push(genre.id.toString());
      setGenreNames([...genreNames, genre.name]);
    }
    selectedGenres.length !==0 && fetchFilteredData(FILTER_URL + '&with_genres=' + encodeURI(selectedGenres.join(',')));
  };

  return (
    <section className='filters'>
      <FilterList createGenreList={createGenreList} />
      {totalResults && <span>{totalResults} result(s)</span>}
      <div>
        <button onClick={() => clearFilters()}>Clear Filters</button>
      </div>
      {genreNames.length > 0 && <h3> You selected: {genreNames.join(', ')}</h3>}
      <FilterResults filterResults={filterResults} />
      {error && <div>{error}</div>}
    </section>
  );
};

export default Filter;
