import { TextField } from '@mui/material';
import { Form } from 'styles/Form.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { MainButton } from 'styles/MainButton.styled';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email, password }));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <p>E: "yayaya@mail.com" P:"weqew123"</p>

        <TextField
          fullWidth
          id="outlined-controlled"
          label="Name"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          id="outlined-controlled"
          label="Password"
          // type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <MainButton variant="contained" type="submit">
          Log In
        </MainButton>
      </Form>
    </>
  );
}
