import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';
import { fetchContacts } from 'redux/operations';
import { getFilter, getContacts } from 'redux/selectors';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './Contacts/ContactList';
import { Container } from './App.style';

export function App() {
  const filterState = useSelector(getFilter);
  const { items, isLoading, error } = useSelector(getContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChangeFilter = e => {
    const { value } = e.currentTarget;

    dispatch(changeFilter(value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filterState.toLowerCase();
    return items.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm contacts={items} />

      <h2>Contacts</h2>
      <Filter filter={filterState} handleChangeFilter={handleChangeFilter} />
      {isLoading && <p>Loading contacts...</p>}
      {items.length > 0 && (
        <ContactList
          contacts={items.length}
          visibleContacts={getVisibleContacts()}
        />
      )}
      {error && <p>{error}</p>}
    </Container>
  );
}
