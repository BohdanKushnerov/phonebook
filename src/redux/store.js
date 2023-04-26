import { createStore } from 'redux';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const reducer = (state = initialState, action) => {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case 'handleChangeFilter':
      return {
        ...state,
        filter: action.payload,
      };
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export const store = createStore(reducer);

export const addContact = obj => {
  return {
    type: 'contacts/addContact',
    payload: { id: nanoid(), ...obj },
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};
