import { Routes, Route } from 'react-router-dom';
// import Movie from './components/Movie';
import Home from './components/Home';
import Layout from './components/Layout';
import Genres from './components/Genres';
import PersonDetails from './components/Person';
import MovieDetails from './components/MovieDetails';

const MovieRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="genres" element={<Genres />} />
                <Route path="person/:id" element={<PersonDetails />} />
                <Route path="movie/:id" element={<MovieDetails />} />
            </Route>
        </Routes>
    );
};

export default MovieRoutes;
