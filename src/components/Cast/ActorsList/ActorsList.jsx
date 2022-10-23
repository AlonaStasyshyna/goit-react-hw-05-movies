import PropTypes from 'prop-types';

export const ActorsList = ({ actors: { cast } }) => {
  return (
    <>
      {cast.length ? (
        <ul>
          {cast.map(({ id, profile_path: profile, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile
                    ? `https://image.tmdb.org/t/p/w500/${profile}`
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9eQEsbMk4HtIB82kLWbDvlzALPtbBOTgSLA&usqp=CAU'
                }
                alt={name}
                width="64px"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No actors to show.</p>
      )}
    </>
  );
};

ActorsList.propTypes = {
  actors: PropTypes.object,
};
