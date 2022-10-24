import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { fetchSearchMovie } from 'fetchApi/fetchApi';

const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      setIsLoading(true);

      fetchSearchMovie(query)
        .then(setSearchMovies)
        .catch(setError)
        .finally(setIsLoading(false));
    }

    <p>Enter data to search for movies.</p>;
  }, [query]);

  const handleSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
  };

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />

      {isLoading && <Loader />}
      {searchMovies && <MoviesList movies={searchMovies} />}
      {error && <p>Ooops! Something went wrong.</p>}
    </>
  );
};

export default MoviesPage;
