import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './Contacts/ContactList';
import { Container } from './App.style';

import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';
import { getFilter, getContacts } from 'redux/selectors';

export function App() {
  const filterState = useSelector(getFilter);
  const contactsState = useSelector(getContacts);

  console.log('filterState', filterState);

  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    const { value } = e.currentTarget;

    dispatch(changeFilter(value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filterState.toLowerCase();
    return contactsState.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm contacts={contactsState} />

      <h2>Contacts</h2>
      <Filter filter={filterState} handleChangeFilter={handleChangeFilter} />
      <ContactList
        contacts={contactsState.length}
        visibleContacts={getVisibleContacts()}
      />
    </Container>
  );
}
