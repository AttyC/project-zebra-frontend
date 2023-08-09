import React from 'react';
import { CastMember } from '../types/interfaces';
import { Link } from 'react-router-dom';

interface MovieCreditsProps {
    credits: CastMember[];
    maxCreditsToShow: number;
}

const MovieCredits: React.FC<MovieCreditsProps> = ({
    credits,
    maxCreditsToShow,
}) => {
    const creditsToShow = credits.slice(0, maxCreditsToShow);

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Top Cast</h2>
            <div className="flex flex-wrap gap-2">
                {creditsToShow.map((castMember, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md flex-shrink-0 w-36"
                    >
                        <Link
                            to={`/person/${castMember.id}`}
                            className="block hover:opacity-75 focus:outline-none focus:ring"
                        >
                            <div className="p-2">
                                {castMember.profile_path && (
                                    <div className="w-32 h-36 mb-2">
                                        <img
                                            src={castMember.profile_path}
                                            alt={castMember.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                                <h3 className="text-sm font-semibold mb-1 whitespace-normal">
                                    {castMember.name}
                                </h3>
                                <p className="text-xs whitespace-normal">
                                    {castMember.character}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieCredits;
