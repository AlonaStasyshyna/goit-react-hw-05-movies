import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, MovieLink } from './MoviesList.styled';

export const MoviesList = ({ listName, movies }) => {
  const location = useLocation();

  return (
    <>
      {listName && <h1>{listName}</h1>}

      <List>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </MovieLink>
          </li>
        ))}
      </List>
    </>
  );
};

MoviesList.propTypes = {
  listName: PropTypes.string,
  movies: PropTypes.array.isRequired,
};
