import { useEffect, useState } from 'react';
import Movie from './Movie';
import { IMovie } from '../types/interfaces';

const UpcomingMovies = () => {
    const [upcomingMovies, setUpcomingMovies] = useState<Array<IMovie> | null>(
        null,
    );

    const url = `http://localhost:3000/upcomingMovies`;

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
                console.log('data', data);
                setUpcomingMovies(data.results);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieData();
    }, []);

    return (
        <section className="py-8">
            <h1 className="text-white font-medium">Upcoming Movies</h1>
            <ul className="flex flex-wrap justify-center md:py-8">
                {upcomingMovies &&
                    upcomingMovies.map((movie) => (
                        <li key={movie.id}>
                            <Movie movie={movie} />
                        </li>
                    ))}
            </ul>
        </section>
    );
};

export default UpcomingMovies;
