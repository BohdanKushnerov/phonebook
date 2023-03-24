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
  visibleContacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
