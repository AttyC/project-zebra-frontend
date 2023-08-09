import { Link } from 'react-router-dom';
import { IMovie } from '../types/interfaces';

interface IMovieProps {
    movie: IMovie;
}

const Movie: React.FC<IMovieProps> = ({ movie }) => {
    const { title, overview, poster_path } = movie;
    return (
        <section className="lg:max-w-xs lg:mx-6 py-4">
            <Link to={`/movie/${movie.id}`}>
                <h2>{title}</h2>
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
                <p className="max-w-overview">{overview}</p>
                <p className="text-sm">
                    {' '}
                    <Link to={`/movie/${movie.id}`}>read more</Link>
                </p>
            </div>
        </section>
    );
};

export default Movie;
