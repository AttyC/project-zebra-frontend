import { useEffect, useState } from 'react';
type Genre = {
  id: string;
  name: string;
};
const Genres = () => {
  const [genres, setGenres] = useState<Array<Genre>>([]);

  useEffect(() => {
    const API_URL = `http://localhost:3000/genres`;
    const fetchGenres = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
        return [];
      }
    };
    fetchGenres();
  }, []);

  return (
    <>
      <h1>Genres</h1>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <h2>
              {genre.name} (id: {genre.id})
            </h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Genres;
