import { useEffect, useState } from 'react';
import { PersonDetails as PersonDetailType } from '../types/interfaces';
import { useParams } from 'react-router-dom';

const PersonDetails: React.FC = () => {
    const [personData, setPersonData] = useState<PersonDetailType | null>(null);
    const { id } = useParams<{ id: string }>();
    const API_URL = `http://localhost:3000/person/${id}`;
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';

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
        <div>
            {personData ? (
                <>
                    <h2>{personData.name}</h2>
                    {personData.profile_path && (
                        <img
                            src={personData.profile_path}
                            alt={personData.name}
                        />
                    )}

                    <p>Birthday: {personData.birthday}</p>
                    <p>Place of Birth: {personData.place_of_birth}</p>
                    <p>Department: {personData.known_for_department}</p>
                    <p>Biography: {personData.biography}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PersonDetails;
