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
    const [showClearButton, setShowClearButton] = useState(false);
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

    const highlightselection = (currentGenres: Array<string>) => {
        const tags = document.querySelectorAll('.filter__list--item--button');
        tags.forEach((tag) => {
            tag.classList.remove('highlight');
            setShowClearButton(false);
        });
        setShowClearButton(false);
        if (currentGenres.length !== 0) {
            currentGenres.forEach((id) => {
                const highLightedTag = document.getElementById(id);
                highLightedTag?.classList.add('highlight');
            });
            setShowClearButton(true);
        }
    };

    const createGenreList = async (genre: IGenre) => {
        let currentGenres = selectedGenres;
        if (currentGenres.includes(genre.id.toString())) {
            currentGenres.forEach((id, idx) => {
                if (id == genre.id) {
                    currentGenres.splice(idx, 1);
                }
            });
        } else {
            currentGenres = [...selectedGenres, genre.id.toString()];
        }

        const fetchUrl =
            FILTER_URL + '&with_genres=' + encodeURI(currentGenres.join(','));
        fetchFilteredData(fetchUrl);
        selectedGenres.length === 0 && setSelectedGenres(currentGenres);

        !selectedGenres.includes(genre.id.toString()) &&
            setSelectedGenres(currentGenres);

        highlightselection(currentGenres);
    };

    return (
        <section className="filters flex justify-center">
            <div>
                <FilterList createGenreList={createGenreList} />
                {totalResults && <span>{totalResults} result(s)</span>}
                {showClearButton && (
                    <button
                        onClick={() => clearFilters()}
                        className="highlight"
                        id="clear"
                    >
                        Clear
                    </button>
                )}
            </div>
            <FilterResults filterResults={filterResults} />
            {error && <div>{error}</div>}
        </section>
    );
};

export default Filter;
