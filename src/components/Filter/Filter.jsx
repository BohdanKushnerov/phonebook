import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
// import { FilterInput, FilterLabel } from './Filter.styled';

const Filter = ({ filter, handleChangeFilter }) => {
  return (
    <TextField
      id="outlined-controlled"
      // label="Controlled"
      type="text"
      placeholder="Find contacts by name"
      name="filter"
      value={filter}
      onChange={handleChangeFilter}
    />
    // <FilterLabel>
    //   Find contacts by name
    //   <FilterInput
    //     type="text"
    //     name="filter"
    //     value={filter}
    //     onChange={handleChangeFilter}
    //   />
    // </FilterLabel>
  );
};

Filter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
