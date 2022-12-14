import PropTypes from 'prop-types';
import { Card, Description, Genres } from './MovieItemCard.styled';

export const MovieItemCard = ({ poster, title, rating, overview, genres }) => {
  const ratingPercentage = Math.round(rating * 10);

  return (
    <Card>
      <img
        src={
          poster
            ? `https://image.tmdb.org/t/p/w500/${poster}`
            : 'https://phonoteka.org/uploads/posts/2021-05/1619955766_15-phonoteka_org-p-svetlo-serii-fon-dlya-storis-17.jpg'
        }
        alt={title}
        width="150px"
        height="225px"
      />

      <Description>
        <h2>{title}</h2>
        <p>User score: {ratingPercentage}%</p>

        <h3>Overview</h3>
        <p>{overview}</p>

        <h4>Genres</h4>
        {genres ? (
          <Genres>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </Genres>
        ) : (
          <p>No information about genres.</p>
        )}
      </Description>
    </Card>
  );
};

MovieItemCard.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
};
