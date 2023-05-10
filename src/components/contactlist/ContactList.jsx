import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Button } from '@mui/material';
import { getVisibleContacts } from 'store/selectors';
import { deleteContact } from 'store/operations';
import authSelectors from 'store/auth/auth-selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedin);
  const visibleContacts = useSelector(getVisibleContacts);
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <List
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {isLoggedIn &&
        visibleContacts.map(contact => (
          <ListItem
            key={contact.id}
            sx={{
              mb: 2,
              borderRadius: 15,
              backgroundImage:
                'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,48,79,1) 35%, rgba(10,177,217,1) 86%, rgba(0,212,255,1) 100%)',
              display: 'flex',
              justifyContent: 'space-between',
              maxWidth: 400,
              fontWeight: 500,
              color: 'white',
            }}
          >
            {contact.name}: {contact.number}
            <Button
              variant="contained"
              type="button"
              onClick={() => {
                handleDelete(contact.id);
              }}
              sx={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,48,79,1) 35%, rgba(10,177,217,1) 86%, rgba(0,212,255,1) 100%)',
                ml: 5,
                maxWidth: '300px',
              }}
            >
              Delete
            </Button>
          </ListItem>
        ))}
    </List>
  );
};

ContactList.propTypes = {
  value: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
