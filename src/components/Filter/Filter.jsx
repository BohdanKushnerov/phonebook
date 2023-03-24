import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

const Filter = ({ filter, handleChangeFilter }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
