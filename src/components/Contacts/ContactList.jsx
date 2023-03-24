import PropTypes from 'prop-types';
import { Contact } from './Contact/Contact';

export const ContactList = ({ contacts, visibleContacts, deleteContact }) => {
  return contacts ? (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact name={name} number={number} />
            <button type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
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
