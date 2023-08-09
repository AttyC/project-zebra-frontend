import { useGenres } from '../hooks/useGenres';

type Genre = {
    id: string;
    name: string;
};

const Genres = () => {
    const { genresList, error } = useGenres();
    return (
        <section className="py-8">
            <h1 className="text-white font-medium">Genres</h1>
            <ul className="text-white font-medium">
                {genresList
                    ? genresList.map((genre: Genre) => (
                          <li key={genre.id}>
                              <h2>
                                  {genre.name} (id: {genre.id})
                              </h2>
                          </li>
                      ))
                    : error}
            </ul>
        </section>
    );
};

export default Genres;
