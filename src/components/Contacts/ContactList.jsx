import PropTypes from 'prop-types';
import { Contact } from './Contact/Contact';
import { nanoid } from 'nanoid';

export const ContactList = ({ contacts, visibleContacts }) => {
  return contacts ? (
    <ul>
      {visibleContacts.map(({ name, number }) => {
        return (
          <li key={nanoid()}>
            <Contact name={name} number={number} />
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
};
