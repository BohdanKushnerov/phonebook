import { nanoid } from 'nanoid';

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

export const changeFilter = e => {
  return {
    type: 'filter/changeFilter',
    payload: e.currentTarget.value,
  };
};
