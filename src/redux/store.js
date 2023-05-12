import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';
// import { authReducer } from './auth/authSlice';
import { persistStore } from 'redux-persist';
import { persistedReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    auth: persistedReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// const store = createStore(persistedReducer);
export const persistor = persistStore(store);
