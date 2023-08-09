import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="pr-6">
            <ul className="sm:flex sm:space-x-6 text-xl">
                <li>
                    <Link to="/" className="nav-link text-white">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/latest" className="nav-link text-white">
                        Latest
                    </Link>
                </li>
                <li>
                    <Link to="/upcoming" className="nav-link text-white">
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
                        Health
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
