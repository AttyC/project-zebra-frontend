import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

import IMAGES from '../images/Images';

export const Header: React.FC = () => {
    return (
        <header className="top-0 left-0 w-full rounded-t  bg-gray-800 text-white py-4 flex items-center justify-between border-b-2 border-b-orange-600">
            <div className="logo pl-6 text-4xl font-black tracking-widest">
                <Link to="/" className="nav-link text-white">
                    <img
                        src={IMAGES.logoLightTransparent}
                        alt="Project Zebra logo"
                        className="lg:w-32 w-24"
                    />
                </Link>
            </div>
            <Nav />
        </header>
    );
};
