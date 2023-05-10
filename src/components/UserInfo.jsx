import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import operations from 'store/auth/auth-operations';
import authSelectors from 'store/auth/auth-selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
      <h2>Hello, {name}!</h2>
      <Button
        component={NavLink}
        to="./"
        key="Home"
        onClick={() => dispatch(operations.logOut())}
        sx={{ ml: 5, my: 5, color: 'white', display: 'block' }}
      >
        Log Out
      </Button>
    </Box>
  );
};
