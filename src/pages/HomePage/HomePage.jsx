import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'fetchApi/fetchApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetchTrendingMovies()
      .then(setMovies)
      .catch(setError)
      .finally(setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {movies && <MoviesList listName="Trending today" movies={movies} />}
      {error && <p>Ooops! Something went wrong.</p>}
    </>
  );
};

export default HomePage;
