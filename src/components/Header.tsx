import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <header className="top-0 left-0 w-full rounded mb-10 bg-[#14443e] text-white border-b border-cyan-200 py-4 flex items-center justify-between">
            <div className="logo pl-6 text-4xl font-black tracking-widest">
                Project Zebra
            </div>
            <nav className="pr-6">
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="nav-link text-white">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/movie" className="nav-link text-white">
                            Movies
                        </Link>
                    </li>
                    <li>
                        <Link to="/genres" className="nav-link text-white">
                            Genres
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-link text-white">
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
