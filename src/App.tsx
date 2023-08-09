import React from 'react';
import MovieRoutes from './MovieRoutes.tsx';
import { BrowserRouter } from 'react-router-dom';
import SearchContextProvider from './hooks/SearchContext.tsx';

const App: React.FC = () => {
    return (
        <SearchContextProvider>
            <BrowserRouter>
                <MovieRoutes />
            </BrowserRouter>
        </SearchContextProvider>
    );
};

export default App;
