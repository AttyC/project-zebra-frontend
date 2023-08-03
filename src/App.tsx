import React, { useState, useEffect } from "react";
import MovieRoutes from './MovieRoutes.tsx'
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {

  return (
    <BrowserRouter >
      <MovieRoutes />
    </BrowserRouter>
  );
};

export default App;
