import { Link } from 'react-router-dom';
import Nav from './Nav';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-orange-700 py-8 text-white font-semibold text-center">
            <p>Created by Team B - Tech Returners 2023</p>
            <Nav />
        </footer>
    );
};
