import { useEffect, useState } from 'react';

export type Genre = {
    id: string;
    name: string;
};

export type GenreResponse = {
    id: number;
    name: string;
};
export const useGenres = () => {
    const [loading, setLoading] = useState(false);
    const [genresList, setGenresList] = useState<Genre[]>();
    const [error, setError] = useState('');

    const url = 'http://localhost:3000/genres';

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const data = await (await fetch(url)).json();
                const formattedGenres = data.genres.map((el: GenreResponse) => {
                    return { id: el.id.toString(), name: el.name };
                });
                setGenresList(formattedGenres);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error as string);
                setLoading(false);
            }
        };
        fetchGenres();
    }, []);

    return { genresList, loading, error };
};
