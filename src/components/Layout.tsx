import { Outlet } from 'react-router-dom'

import { Header } from './Header';
import { Footer } from './Footer';
import SearchAndFilter from './SearchAndFilter';

const Layout = () => {
  return (
    <div>
      <Header />
      <SearchAndFilter />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout