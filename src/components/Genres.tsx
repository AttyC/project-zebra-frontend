import { useGenres } from '../hooks/useGenres';

type Genre = {
    id: string;
    name: string;
};

const Genres = () => {
    const { genresList, error } = useGenres();
    return (
        <>
            <h1>Genres</h1>
            <ul>
                {genresList ? genresList.map((genre: Genre) => (
                    <li key={genre.id}>
                        <h2>
                            {genre.name} (id: {genre.id})
                        </h2>
                    </li>
                )) : error}
            </ul>
        </>
    );
};

export default Genres;
