import { useEffect, useState } from 'react';
import { MovieDetails as MovieDetailType } from '../types/interfaces';
import { useParams } from 'react-router-dom';

const MovieDetails: React.FC = () => {
    const [movieData, setMovieData] = useState<MovieDetailType | null>(null);
    const { id } = useParams<{ id: string }>();
    const API_URL = `http://localhost:3000/movie/${id}`;

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(
                        'Request failed with status ' + response.status,
                    );
                }
                const data: MovieDetailType = await response.json();
                setMovieData(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieData();
    }, [API_URL]);

    return (
        <div>
            {movieData ? (
                <>
                    <h2>{movieData.title}</h2>
                    <h3>{movieData.tagline}</h3>
                    <ul>
                        {movieData.genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    {movieData.poster_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movieData.poster_path}`} //BW - Move this to the server and just send profile_path, make sure to do url encoding
                        />
                    )}
                    <p>{movieData.overview}</p>
                    <p>Release Date: {movieData.release_date}</p>
                    <p>Runtime: {movieData.runtime}</p>
                    <p>Budget: {movieData.budget}</p>
                    <p>Revenue: {movieData.revenue}</p>
                    {movieData.poster_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movieData.backdrop_path}`} //BW - Move this to the server and just send profile_path, make sure to do url encoding
                        />
                    )}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MovieDetails;
