import Contact from '../contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.list}>
      {Array.isArray(visibleContacts) && visibleContacts.length === 0 && (
        <li>
          <b>You do not add contacts yet</b>
        </li>
      )}
      {Array.isArray(visibleContacts) &&
        visibleContacts.map(contact => {
          return (
            <li key={contact.id} className={css.item}>
              <Contact {...contact} />
            </li>
          );
        })}
    </ul>
  );
};
export default ContactList;
