import { Outlet } from 'react-router-dom';

import { Header } from './Header';

const Layout = () => {
    return (
        <div className="lg:p-6">
            <Header />
            <main className="bg-gray-800 px-8">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
