import { Outlet } from 'react-router-dom'
import SearchBar from './SearchBar'
import Filter from './Filter';

const Layout = () => {
  return (
    <div>
      Layout
      <SearchBar />
      <Filter />
      <Outlet />
    </div>
  );
};

export default Layout