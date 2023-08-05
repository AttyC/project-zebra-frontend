import { useState, useEffect } from "react";

import Movie from './Movie';
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
          <Movie movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default Home