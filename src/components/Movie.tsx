import { IMovie } from '../types/interfaces';

interface IMovieProps {
    movie: IMovie;
}

const Movie: React.FC<IMovieProps> = ({ movie }) => {
    const { title, overview, poster_path } = movie;
    return (
        <section className="max-w-xs">
            <h2>{movie.title}</h2>
            <div className="flex flex-col">
                {poster_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                        alt={title}
                        className="max-w-xs"
                    />
                )}
                <p className="max-w-xs">{overview}</p>
            </div>
        </section>
    );
};

export default Movie;
