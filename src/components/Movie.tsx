import { IMovie } from '../types/interfaces';

interface IMovieProps {
  movie: IMovie;
}

const Movie: React.FC<IMovieProps> = ({ movie }) => {
  const { title, overview, poster_path } = movie;
  return (
    <>
      <h2>{title}</h2>
      <p>{overview}</p>
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={title}
        />
      )}
    </>
  );
};

export default Movie;
