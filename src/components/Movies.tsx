import { useEffect, useState } from 'react';
import { IMovie } from '../types/interfaces';
import MovieList from './MovieList';

interface IMovieListProps {
    criteria: string;
}

const Movies: React.FC<IMovieListProps> = ({ criteria }) => {
    const [movies, setMovieData] = useState<Array<IMovie> | null>(null);

    const url = `http://localhost:3000/${criteria}`;

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(
                        'Request failed with status ' + response.status,
                    );
                }
                const data = await response.json();
                setMovieData(data.results);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieData();
    }, []);

    return (
        <section className="py-8">
            <h1 className="text-white font-medium">{criteria} Movies</h1>
            {movies && <MovieList movies={movies} />}
        </section>
    );
};

export default Movies;
