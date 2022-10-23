import { Link, useLocation } from 'react-router-dom';

export const MovieItemInfo = () => {
  const location = useLocation();

  return (
    <div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast" state={location.state}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state={location.state}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
};
