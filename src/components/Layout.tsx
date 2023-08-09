import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';

const Layout = () => {
    return (
        <div className="lg:p-6">
            <Header />
            <main className="bg-gray-800 px-8">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
