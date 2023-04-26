import { useEffect } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './Contacts/ContactList';
import { Container } from './App.style';
import { useDispatch, useSelector } from 'react-redux';

export function App() {
  const filterState = useSelector(state => state.filter);
  const contactsState = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? [];
  // });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contactsState));
  }, [contactsState]);

  const handleChangeFilter = e => {
    dispatch({ type: 'handleChangeFilter', payload: e.currentTarget.value });
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filterState.toLowerCase();
    return contactsState.filter(contact => {
      console.log(contact);
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
