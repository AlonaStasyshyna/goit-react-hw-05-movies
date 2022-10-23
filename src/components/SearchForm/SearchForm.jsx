import PropTypes from 'prop-types';

export const SearchForm = ({ handleSubmit }) => {
  const submitForm = e => {
    e.preventDefault();

    let { value } = e.target.elements.searchQuery;
    handleSubmit(value.toLowerCase().trim());

    e.target.elements.searchQuery.value = '';
  };

  return (
    <form onSubmit={submitForm}>
      <input type="text" name="searchQuery" />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
