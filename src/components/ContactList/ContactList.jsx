import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const ContactList = ({ contacts, visibleContacts }) => {
  return contacts ? (
    <ul>
      {visibleContacts.map(({ name, number }) => {
        return (
          <li key={nanoid()}>
            {name}: {number}
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
