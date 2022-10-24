import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'fetchApi/fetchApi';
import { Loader } from 'components/Loader/Loader';
import { MovieItem } from 'components/MovieItem/MovieItem';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    fetchMovieById(movieId, '')
      .then(setMovie)
      .catch(setError)
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {movie && <MovieItem movie={movie} />}
      {error && <p>Ooops! Something went wrong.</p>}

      <Outlet />
    </>
  );
};

export default MovieDetails;
