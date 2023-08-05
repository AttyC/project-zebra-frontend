interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

interface MovieProps {
  movie: Movie;
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
  const { id, title, overview, poster_path } = movie;
  return (
    <li key={id}>
      <h2>{title}</h2>
      <p>{overview}</p>
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={title}
        />
      )}
    </li>
  );
};

export default Movie;
