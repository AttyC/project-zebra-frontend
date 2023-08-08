import { useEffect, useState } from 'react';
import { IGenre, IMovie } from '../types/interfaces';
import FilterList from './FilterList';
import FilterResults from './FilterResults';

const Filter = () => {
    const [filterResults, setFilterResults] = useState<Array<IMovie>>([]);
    const [error, setError] = useState('');
    const [totalPages, setTotalPages] = useState('');
    const [totalResults, setTotalResults] = useState('');
    const [selectedGenres, setSelectedGenres] = useState<Array<string>>([]);

    const FILTER_URL = `http://localhost:3000/filter?`;
    const HOME_URL = `http://localhost:3000/test`;

    const fetchFilteredData = async (url: string) => {
        console.log('fetch url', url);
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
        setError('');
        fetchFilteredData(HOME_URL);
    };

    const highlightselection = () => {
        if (selectedGenres.length !== 0) {
            selectedGenres.forEach((id) => {
                const highLightedTag = document.getElementById(id);
                highLightedTag?.classList.add('highlight');
            });
        }
    };
    const createGenreList = async (genre: IGenre) => {
        const currentGenres = [...selectedGenres, genre.id.toString()];
        const fetchUrl =
            FILTER_URL + '&with_genres=' + encodeURI(currentGenres.join(','));
        fetchFilteredData(fetchUrl);

        selectedGenres.length === 0 && setSelectedGenres(currentGenres);
        !selectedGenres.includes(genre.id.toString()) &&
            setSelectedGenres(currentGenres);

        highlightselection();
    };

    return (
        <section className="filters">
            <FilterList createGenreList={createGenreList} />
            {totalResults && <span>{totalResults} result(s)</span>}
            <button onClick={() => clearFilters()}>Clear Filters</button>
            <FilterResults filterResults={filterResults} />
            {error && <div>{error}</div>}
        </section>
    );
};

export default Filter;
