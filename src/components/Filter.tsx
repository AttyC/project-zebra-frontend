import { useContext } from 'react';
import { useGenres } from '../hooks/useGenres';
import { SearchContext } from '../hooks/SearchContext';

import FilterButton from './FilterButton';

const Filter = () => {
    const { genresList } = useGenres();
    const { setGenres, setQuery } = useContext(SearchContext);

    const clearFilters = async () => {
        setGenres([]);
        setQuery('');
    };

    return (
        <section className="filter">
            <div className="filter__list md:max-w-4xl flex justify-center my-4">
                {genresList &&
                    genresList.map((genre) => (
                        <FilterButton
                            key={genre.id}
                            name={genre.name}
                            id={genre.id}
                        />
                    ))}
            </div>

            <button onClick={() => clearFilters()}>Clear All</button>
        </section>
    );
};

export default Filter;
