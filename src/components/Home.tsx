import { useState, useEffect } from "react";

import Movie from './Movie';
import { IMovie } from '../types/interfaces';

const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const API_URL = `http://localhost:3000/test`;
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        console.log('res :', response);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data : ', data);

        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
      }
    };
    fetchMovies();
  }, []);

  return (
      <section>
          <h1>Popular Movies</h1>
          <ul className="flex flex-wrap justify-center">
              {movies?.map((movie) => (
                  <li key={movie.id}>
                      <Movie movie={movie} />
                  </li>
              ))}
          </ul>
      </section>
  );
};

export default Home