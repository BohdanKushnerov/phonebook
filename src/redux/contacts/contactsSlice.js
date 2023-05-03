import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    fetchingInProgress(state) {
      state.contacts.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    fetchingError(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    //===============================================
    deleteContactInProgress(state) {
      state.contacts.isLoading = true;
    },
    deleteContactSuccess(state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    deleteContactError(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    //=================================================
    addContactInProgress(state) {
      state.contacts.isLoading = true;
    },
    addContactSuccess(state, action) {
      state.contacts.items.push(action.payload);
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    addContactError(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    //=================================================
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  deleteContactInProgress,
  deleteContactSuccess,
  deleteContactError,
  addContactInProgress,
  addContactSuccess,
  addContactError,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
