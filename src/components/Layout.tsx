import { Outlet } from 'react-router-dom'

import { Header } from './Header';
import { Footer } from './Footer';
import SearchAndFilter from './SearchAndFilter';
import '../index.css';
const Layout = () => {
    return (
        <div className="p-6">
            <Header />
            <SearchAndFilter />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout