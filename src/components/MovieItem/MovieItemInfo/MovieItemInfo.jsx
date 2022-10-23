import { useLocation } from 'react-router-dom';
import { InfoList, InfoLink } from './MovieItemInfo.styled';

export const MovieItemInfo = () => {
  const location = useLocation();

  return (
    <div>
      <p>Additional information</p>
      <InfoList>
        <li>
          <InfoLink to="cast" state={location.state}>
            Cast
          </InfoLink>
        </li>
        <li>
          <InfoLink to="reviews" state={location.state}>
            Reviews
          </InfoLink>
        </li>
      </InfoList>
    </div>
  );
};
