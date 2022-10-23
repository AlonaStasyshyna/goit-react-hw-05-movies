import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ listName, movies }) => {
  const location = useLocation();

  return (
    <ul>
      <h1>{listName}</h1>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  listName: PropTypes.string,
  movies: PropTypes.array.isRequired,
};
