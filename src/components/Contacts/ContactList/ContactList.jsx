import PropTypes from 'prop-types';
import Contact from '../Contact';
import { List, ContactItem, ContactButton } from './ContactList.styled';

import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/actions';
import { deleteContact } from 'redux/store';

const ContactList = ({ contacts, visibleContacts }) => {
  const dispatch = useDispatch();

  return contacts ? (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <Contact name={name} number={number} />
            <ContactButton
              type="button"
              onClick={() => dispatch(deleteContact(id))}
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
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
