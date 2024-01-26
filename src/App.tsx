import { useState } from 'react';
import { getDetailMovie } from './API/getDetailMovies';
import { getMovies } from './API/getMovies';
import './App.css'
import { Box, Button, ChakraProvider, Heading, Input } from '@chakra-ui/react'

function App() {

  const [searchId, setSearchId] = useState('');

  const handleGetMovies = async () => {
    try {
      const movies = await getMovies();
      console.log('Elenco dei film:', movies);
      // Puoi gestire la risposta come preferisci
    } catch (error) {
      console.error('Errore durante la chiamata a getMovies:', error);
      // Puoi gestire l'errore a tuo piacimento
    }
  };

  const handleSearchById = async () => {
    try {
      const movieDetail = await getDetailMovie(searchId);
      console.log('Dettagli del film:', movieDetail);
      // Puoi gestire la risposta come preferisci
    } catch (error) {
      console.error('Errore durante la chiamata a getDetailMovie:', error);
      // Puoi gestire l'errore a tuo piacimento
    }
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <Heading as="h1" mb={4}>
          Movie App
        </Heading>
        <Button colorScheme="teal" onClick={handleGetMovies} mb={4}>
          Get all movies di Harry Potter
        </Button>
        <Box>
          <Heading as="h2" mb={2}>
            Cerca per ID
          </Heading>
          <Input
            type="text"
            placeholder="Inserisci ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            mb={2}
          />
          <Button colorScheme="teal" onClick={handleSearchById}>
            Cerca
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default App;