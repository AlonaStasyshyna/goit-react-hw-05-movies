import PropTypes from 'prop-types';
import { List } from './ReviewsList.styled';

export const ReviewsList = ({ reviews: { results } }) => {
  return (
    <>
      {results.length ? (
        <List>
          {results.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </List>
      ) : (
        <p>No reviews to show.</p>
      )}
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.object,
};
