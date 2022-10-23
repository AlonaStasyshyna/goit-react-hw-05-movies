import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieItemCard } from './MovieItemCard/MovieItemCard';
import { MovieItemInfo } from './MovieItemInfo/MovieItemInfo';

export const MovieItem = ({ movie }) => {
  const location = useLocation();
  const navigation = useNavigate();

  const {
    genres,
    title,
    overview,
    poster_path: poster,
    vote_average: rating,
  } = movie;

  return (
    <section>
      <button
        type="button"
        onClick={() => navigation(location?.state?.from || '/')}
      >
        &#8592; Go back
      </button>

      <MovieItemCard
        poster={poster}
        title={title}
        rating={rating}
        overview={overview}
        genres={genres}
      />
      <MovieItemInfo />
    </section>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
