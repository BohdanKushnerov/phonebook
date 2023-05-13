import { logIn, register, logOut, refreshUser } from './authOperations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handleAuthFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.error = null;
};

const handleLogOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.error = null;
};

const handleRefreshUserPending = state => {
  state.isRefreshing = true;
};

const handleRefreshUserFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};

const handleRefreshUserRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const handleAuthRejected = (state, action) => {
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(register.fulfilled, handleAuthFulfilled)
      // .addCase(register.rejected, handleAuthRejected)
      // .addCase(logIn.fulfilled, handleAuthFulfilled)
      // .addCase(logIn.rejected, handleAuthRejected)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      // .addCase(logOut.rejected, handleAuthRejected)
      .addCase(refreshUser.pending, handleRefreshUserPending)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, handleRefreshUserRejected)
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        handleAuthFulfilled
      )
      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected, logOut.rejected),
        handleAuthRejected
      );
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
