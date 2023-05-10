import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { addContact } from 'store/operations';
import { getContacts } from 'store/selectors';
import { css } from '@emotion/react';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  let name = useSelector(state => state.contacts.name);
  let number = useSelector(state => state.contacts.number);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    switch (e.target.name) {
      case 'name':
        name = e.target.value;
        break;

      case 'number':
        number = e.target.value;
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contExist = contacts.find(
      contact =>
        contact.name.toLowerCase() ===
        e.target.elements.name.value.toLowerCase()
    );
    if (contExist) {
      return alert(
        `${e.target.elements.name.value} is already in contacts list!`
      );
    }
    const form = e.target;
    dispatch(
      addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form onSubmit={handleSubmit} className={css.contactForm}>
        <TextField
          // id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          sx={{
            mt: 35,
            ml: 5,
            width: 300,
          }}
        />
        <TextField
          // id="outlined-basic"
          label="Number"
          variant="outlined"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          sx={{
            mt: 35,
            ml: 5,
            width: 300,
          }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundImage:
              'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,48,79,1) 35%, rgba(10,177,217,1) 86%, rgba(0,212,255,1) 100%)',
            mt: 36,
            ml: 5,
            mb: 5,
            maxWidth: '300px',
          }}
        >
          Add contact
        </Button>
      </form>
    </div>
  );
};
