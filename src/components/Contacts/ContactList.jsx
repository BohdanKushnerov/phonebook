import PropTypes from 'prop-types';
import { Contact } from './Contact/Contact';
import { List, ContactItem, ContactButton } from './ContactList.styled';

export const ContactList = ({ contacts, visibleContacts, deleteContact }) => {
  return contacts ? (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <Contact name={name} number={number} />
            <ContactButton type="button" onClick={() => deleteContact(id)}>
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
  deleteContact: PropTypes.func.isRequired,
};
