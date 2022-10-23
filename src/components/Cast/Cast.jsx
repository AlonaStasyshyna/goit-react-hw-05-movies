import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'fetchApi/fetchApi';
import { Loader } from 'components/Loader/Loader';
import { ActorsList } from './ActorsList/ActorsList';

export const Cast = () => {
  const [actors, setActors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

    const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    fetchMovieById(movieId, '/credits')
      .then(setActors)
      .catch(setError)
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {actors && <ActorsList actors={actors} />}
      {error && <p>No information about actors.</p>}
    </>
  );
};
