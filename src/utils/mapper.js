export const mapper = movies =>
  movies.map(({ id, title, poster_path: poster }) => ({ id, title, poster }));
