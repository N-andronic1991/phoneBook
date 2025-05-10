import ContactForm from '../components/contactForm/ContactForm';
import SearchBox from '../components/searchBox/SearchBox';
import ContactList from '../components/contactList/ContactList';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import { Toaster } from 'react-hot-toast';
import Container from '../components/container/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLoading,
  selectError,
  selectContacts,
} from '../redux/contacts/selectors';
import { useEffect } from 'react';
import { apiGetContacts } from '../redux/contacts/operations';
import DocumentTitle from '../components/DocumentTitle';

const styles = {
  title: {
    marginBottom: '20px',
    fontWeight: 600,
    fontSize: 32,
    textAlign: 'center',
    color: 'var(--main-title-text-color)',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'spaceBetween',
    alignItems: 'baseline',
    gap: '30px',
  },
};

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);
  return (
    <>
      <DocumentTitle>Contacts</DocumentTitle>
      <Container>
        <h1 style={styles.title}>Phonebook</h1>
        {Array.isArray(contacts) && contacts.length > 0 && <SearchBox />}
        <ContactForm />

        <Toaster
          position="bottom-center"
          toastOptions={{
            className: '',
            duration: 2000,
            style: {
              background: 'green',
              color: '#fff',
            },
          }}
        />
        {loading && <Loader />}
        {error && <ErrorMessage />}

        {Array.isArray(contacts) && <ContactList />}
      </Container>
    </>
  );
};

export default ContactsPage;
