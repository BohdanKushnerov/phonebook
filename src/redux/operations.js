import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  deleteContactInProgress,
  deleteContactSuccess,
  deleteContactError,
  addContactInProgress,
  addContactSuccess,
  addContactError,
} from './contacts/contactsSlice';

axios.defaults.baseURL = 'https://6451ef13bce0b0a0f7387a3e.mockapi.io';
export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');

    console.log(response.data);
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};

export const deleteContactAction = id => {
  return async dispatch => {
    try {
      dispatch(deleteContactInProgress());
      const response = await axios.delete(
        `https://6451ef13bce0b0a0f7387a3e.mockapi.io/contacts/${id}`
      );

      console.log(response.data);
      dispatch(deleteContactSuccess(response.data.id));
    } catch (e) {
      dispatch(deleteContactError(e.message));
    }
  };
};

export const addContactAction = ({ name, phone }) => {
  return async dispatch => {
    try {
      dispatch(addContactInProgress());
      const response = await axios.post(
        `https://6451ef13bce0b0a0f7387a3e.mockapi.io/contacts/`,
        { name, phone }
      );

      console.log(response.data);
      dispatch(addContactSuccess(response.data));
    } catch (e) {
      dispatch(addContactError(e.message));
    }
  };
};
