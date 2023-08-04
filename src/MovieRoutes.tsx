import { Routes, Route } from 'react-router-dom'
import Movie from './components/Movie'
import Home from './components/Home'
import Layout from './components/Layout'
import Genres from './components/Genres';

const MovieRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='movie' element={<Movie />} />
        <Route path='genres' element={<Genres />} />
      </Route>
    </Routes>
  );
}

export default MovieRoutes