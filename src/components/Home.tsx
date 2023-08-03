import { useState, useEffect } from "react";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

// type Props = {}
// props: Props
const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const API_URL = `http://localhost:3000/test`;
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        console.log("res :", response);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Data : ", data);

        setMovies(data.results);

      } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home