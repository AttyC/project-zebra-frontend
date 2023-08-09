import { Link } from 'react-router-dom';
import { IMovie } from '../types/interfaces';

interface IMovieProps {
    movie: IMovie;
}

const Movie: React.FC<IMovieProps> = ({ movie }) => {
    const { title, overview, poster_path } = movie;
    return (
        <section
            className="lg:max-w-xs md:mx-2 lg:mmx-4 p-6 bg-gray-100 rounded border-2 hover:scale-105 transition-transform duration-500'
         mb-6"
        >
            <Link to={`/movie/${movie.id}`} className="text-gray-700">
                <h2 className="text-lmd font-semibold mb-2 md:max-w-overview text-xl">
                    {title}
                </h2>
            </Link>
            <div className="flex flex-col">
                {poster_path && (
                    <Link to={`/movie/${movie.id}`}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                            alt={title}
                        />
                    </Link>
                )}
                <p className="md:max-w-overview font-600 py-2">{overview}</p>
                <p className="text-sm">
                    {' '}
                    <Link to={`/movie/${movie.id}`}>read more</Link>
                </p>
            </div>
        </section>
    );
};

export default Movie;
