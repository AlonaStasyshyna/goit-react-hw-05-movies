import { Link, useLocation } from 'react-router-dom';

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
