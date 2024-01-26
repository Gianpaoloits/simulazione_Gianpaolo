const axios = require('axios').default;
// http://www.omdbapi.com/?apikey=55e30f57&
export const API_BASE_URL = 'https://www.omdbapi.com/?apikey=55e30f57';

// Funzione per ottenere l'elenco dei film
const getMovies = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}&s=Harry&type=movie`);
      return response.data;
    } catch (error) {
      console.error('Errore durante la chiamata a getMovies:', error);
      throw error; // Puoi gestire l'errore a tuo piacimento
    }
  };

  export { getMovies };