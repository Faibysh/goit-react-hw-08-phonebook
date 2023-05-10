import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { addFilter } from 'store/filterSlice/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const filterChange = e => {
    dispatch(addFilter(e.currentTarget.value));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TextField
        autoComplete="off"
        label="Find contacts by name"
        variant="outlined"
        type="text"
        value={filter}
        onChange={filterChange}
        sx={{
          mt: 2,
          mb: 2,
          width: 300,
        }}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
