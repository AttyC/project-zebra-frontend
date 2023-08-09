import { useEffect, useState } from 'react';

const Health = () => {
    const [healthStatus, setHealthStatus] = useState<number>();

    const url = `http://localhost:3000/health`;

    useEffect(() => {
        const getHealthStatus = async () => {
            try {
                const response = await fetch(url);
                console.log('API status: ', response.status);
                if (!response.ok) {
                    throw new Error(
                        'Request failed with status ' + response.status,
                    );
                }
                setHealthStatus(response.status);
            } catch (error) {
                console.error(
                    'Error fetching server - health not good!:',
                    error,
                );
            }
        };

        getHealthStatus();
    }, []);

    return (
        <section className="py-8">
            <h1 className="text-white font-medium">Health Status</h1>
            {healthStatus === 200 && (
                <p className="text-white font-medium">
                    Great news! The Movies API is Up and Running! Now you can
                    search for your favourite movies, see who's acting in them
                    andfind out whats coming up!{' '}
                </p>
            )}
        </section>
    );
};

export default Health;
