import { Link } from 'react-router-dom';
import { IMovie } from '../types/interfaces';

interface IMovieProps {
    movie: IMovie;
}

const Movie: React.FC<IMovieProps> = ({ movie }) => {
    const { title, overview, poster_path } = movie;
    return (
        <Link to={`/movie/${movie.id}`}>
            <section className="lg:max-w-xs lg:mx-6 py-4 text-white">
                <h2>{title}</h2>
                <div className="flex flex-col">
                    {poster_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                            alt={title}
                            className="lg:max-w-xs"
                        />
                    )}
                    <p className="lg:max-w-xs">{overview}</p>
                </div>
            </section>
        </Link>
    );
};

export default Movie;
