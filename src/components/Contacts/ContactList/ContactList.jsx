import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import PropTypes from 'prop-types';
import Contact from '../Contact';
import { List, ContactItem, ContactButton } from './ContactList.styled';

const ContactList = ({ contacts, visibleContacts }) => {
  const dispatch = useDispatch();

  return contacts ? (
    <List>
      {visibleContacts.map(({ id, name, phone }) => {
        return (
          <ContactItem key={id}>
            <Contact name={name} phone={phone} />
            <ContactButton
              type="button"
              onClick={() => dispatch(deleteContacts(id))}
            >
              Delete
            </ContactButton>
          </ContactItem>
        );
      })}
    </List>
  ) : (
    <></>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.number.isRequired,
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
