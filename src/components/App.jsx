import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  // state = {
  //   contacts: [],
  //   name: '',
  //   number: '',
  // };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(e.target.elements);

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          // name: prevState.name,
          // number: prevState.number,
          name: this.state.name,
          number: this.state.number,
        },
      ],
    }));

    this.reset();
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter, name, number } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input type="text" value={filter} onChange={this.changeFilter} />
        </label>
        {contacts.length ? (
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
        )}
      </div>
    );
  }
}
