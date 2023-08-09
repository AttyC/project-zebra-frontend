import { useEffect, useState } from 'react';
import { PersonDetails as PersonDetailType } from '../types/interfaces';
import { useParams } from 'react-router-dom';

const PersonDetails: React.FC = () => {
    const [personData, setPersonData] = useState<PersonDetailType | null>(null);
    const { id } = useParams<{ id: string }>();
    const API_URL = `http://localhost:3000/person/${id}`;

    useEffect(() => {
        const fetchPersonData = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(
                        'Request failed with status ' + response.status,
                    );
                }
                const data: PersonDetailType = await response.json();
                setPersonData(data);
            } catch (error) {
                console.error('Error fetching person details:', error);
            }
        };

        fetchPersonData();
    }, [API_URL]);

    return (
        <div className="flex justify-center ">
            <div className="p-5 bg-gray-200 dark:bg-gray-800 w-full md:w-2/3 lg:w-3/5">
                {personData ? (
                    <>
                        <div className="flex md:flex">
                            {personData.profile_path && (
                                <img
                                    src={personData.profile_path}
                                    className="w-auto h-48 md:h-96 object-cover rounded-lg"
                                    alt={personData.name}
                                />
                            )}
                            <div className="flex bg-gray-100 dark:bg-gray-700 flex-col p-4">
                                <h2 className="text-2xl font-bold pb-4">
                                    {personData.name}
                                </h2>
                                <h3 className="text-base font-bold">
                                    Biography
                                </h3>

                                <p className="text-sm pb-4">
                                    {personData.biography}
                                </p>
                                <p className="text-sm pb-2">
                                    Birthday: {personData.birthday}
                                </p>
                                <p className="text-sm pb-2">
                                    Place of Birth: {personData.place_of_birth}
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default PersonDetails;
