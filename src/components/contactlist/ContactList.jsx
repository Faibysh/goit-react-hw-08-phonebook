import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import { deleteContact, fetchContacts } from 'store/operations';
import { useEffect } from 'react';
import Loader from 'loader';

export function ContactList() {
  const { contacts, isLoading } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        filteredContacts.map(contact => (
          <li className={styles.item} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={styles.button}
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default ContactList;
