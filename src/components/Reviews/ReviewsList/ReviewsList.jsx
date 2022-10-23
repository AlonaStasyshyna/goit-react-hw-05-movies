export const ReviewsList = ({ reviews: { results } }) => {
  return (
    <>
      {results.length ? (
        <ul>
          {results.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews to show.</p>
      )}
    </>
  );
};
