export const fetchGenres = async (API_URL: string) => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setGenres(data.genres);
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
};
