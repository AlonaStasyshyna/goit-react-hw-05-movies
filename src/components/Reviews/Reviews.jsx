import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'fetchApi/fetchApi';
import { Loader } from 'components/Loader/Loader';
import { ReviewsList } from './ReviewsList/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    fetchMovieById(movieId, '/reviews')
      .then(setReviews)
      .catch(setError)
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews && <ReviewsList reviews={reviews} />}
      {error && <p>No reviews to show.</p>}
    </>
  );
};

export default Reviews;
