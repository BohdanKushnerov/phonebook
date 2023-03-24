import { nanoid } from 'nanoid';

export const ContactList = props => {
  return props.contacts ? (
    <ul>
      {props.visibleContacts.map(({ name, number }) => {
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
