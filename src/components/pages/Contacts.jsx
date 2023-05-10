import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/contactlist/ContactList';
import { Filter } from 'components/filter/Filter';
import { ContactForm } from 'components/contactform/ContactForm';
import { fetchContacts } from 'store/operations';
import { getError, getIsLoading } from 'store/selectors';
import Loader from 'loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2 style={{ marginLeft: 120, color: '#232b33' }}>My Contacts</h2>
      <ContactForm />
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
};

export default Contacts;
