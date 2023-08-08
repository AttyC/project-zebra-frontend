import {
    useState,
    useEffect,
    createContext,
    Dispatch,
    SetStateAction,
} from 'react';
import { IMovie } from '../types/interfaces';

type SearchContextType = {
    movies: IMovie[];
    loading: boolean;
    error: string;
    query: string;
    genres: string[];
    setQuery: Dispatch<SetStateAction<string>>;
    setGenres: Dispatch<SetStateAction<string[]>>;
};

type SearchContextProviderPropsType = {
    children: React.ReactNode[] | React.ReactNode;
};

export const SearchContext = createContext<SearchContextType>({
    movies: [],
    loading: false,
    error: '',
    query: '',
    genres: [],
    setQuery: () => {},
    setGenres: () => {},
});

const SearchContextProvider = ({
    children,
}: SearchContextProviderPropsType) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [genres, setGenres] = useState<string[]>([]);
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState<IMovie[]>([]);

    const url = 'http://localhost:3000/search?';

    const genresParams = genres.join(',');
    const searchParams = new URLSearchParams({
        query: query,
        genres: genresParams,
    }).toString();

    useEffect(() => {
        const searchByQueryAndGenre = async () => {
            setLoading(true);
            try {
                const response = await fetch(url + searchParams);
                const data = await response.json();
                setMovies(data);
                setLoading(false);
            } catch (error) {
                setError(error as string);
                setLoading(false);
            }
        };
        searchByQueryAndGenre();
    }, [genres, query]);

    return (
        <SearchContext.Provider
            value={{
                movies,
                loading,
                error,
                query,
                setQuery,
                genres,
                setGenres,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContextProvider;
