import { Genre } from '../hooks/useGenres';
import { useContext } from 'react';
import { SearchContext } from '../hooks/SearchContext';

const FilterButton = ({ name, id }: Genre) => {
    const { genres, setGenres } = useContext(SearchContext);
    const genreIndex = genres.indexOf(id.toString());
    const activeStyling = genres.includes(id) ? 'filter__button--active' : '';

    const handleClick = () => {
        if (genreIndex > -1) {
            const genresWithIdRemoved = genres.filter(
                (genreId) => genreId !== id,
            );
            setGenres([...genresWithIdRemoved]);
        } else {
            setGenres((prev) => [...prev, id]);
        }
    };

    return (
        <button
            value={id}
            className={'filter__list--item ' + activeStyling}
            onClick={handleClick}
        >
            {name}
        </button>
    );
};

export default FilterButton;
