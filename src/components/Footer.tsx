import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-orange-700 py-8 text-white font-semibold text-center">
            <p>Created by Team B - Tech Returners 2023</p>
            <nav className="py-3 flex justify-center">
                <ul className="flex space-x-6  text-md">
                    <li>
                        <Link to="/" className="nav-link text-white">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/upcomingMovies"
                            className="nav-link text-white"
                        >
                            Upcoming
                        </Link>
                    </li>
                    <li>
                        <Link to="/genres" className="nav-link text-white">
                            Genres
                        </Link>
                    </li>
                    <li>
                        <Link to="/health" className="nav-link text-white">
                            API Health
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};
