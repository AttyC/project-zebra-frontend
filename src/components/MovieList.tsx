import Movie from './Movie';
import { IMovie } from '../types/interfaces';

interface IMovieListProps {
    movies: Array<IMovie>;
}
const MovieList: React.FC<IMovieListProps> = ({ movies }) => {
    console.log('movies', movies);
    return (
        <ul className="flex flex-wrap justify-center md:py-8">
            {movies &&
                movies.map((movie) => (
                    <li key={movie.id}>
                        <Movie movie={movie} />
                    </li>
                ))}
        </ul>
    );
};

export default MovieList;
