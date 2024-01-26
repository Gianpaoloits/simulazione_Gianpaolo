import axios from "axios";
import { API_BASE_URL } from "./getMovies";

 
 
 // Funzione per ottenere i dettagli di un film
  const getDetailMovie = async (id : string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}?i=${id}`);
      return response.data;
    } catch (error) {
      console.error('Errore durante la chiamata a getDetailMovie:', error);
      throw error; // Puoi gestire l'errore a tuo piacimento
    }
  };

export { getDetailMovie }