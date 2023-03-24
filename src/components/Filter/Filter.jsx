import PropTypes from 'prop-types';

export const Filter = ({ filter, handleChangeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
