import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = token;
};

const unSetToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    // const res = await axios.post('/users/signup', credentials);
    const res = await axios.post('/users/signup', credentials);

    console.log(res);
    setToken(res.data.token);
    return res.data;
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    // const res = await axios.post('/users/login', credentials);
    const res = await axios.post('/users/login', credentials);

    console.log(res);
    setToken(res.data.token);
    return res.data;
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  // const res = await axios.post('/users/logout');
  const res = await axios.post('/users/logout');

  console.log(res);
  unSetToken(res.data.token);
  return res.data;
});
