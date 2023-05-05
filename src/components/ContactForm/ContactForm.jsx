import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/operations';
import PropTypes from 'prop-types';
import { Form } from './ContactForm.styled';

import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import { InputBase } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ContactForm({ contacts }) {
  const theme = useTheme();
  console.log(theme);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const isIncludes = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    isIncludes
      ? alert(`${name} is already in contacts`)
      : dispatch(addContacts({ name, phone }));
    reset();
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Box
        sx={{
          maxWidth: '100%',
        }}
      >
        <TextField
          fullWidth
          id="outlined-controlled"
          label="Name"
          name="name"
          value={name}
          onChange={handleChange}
          inputProps={{
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            title:
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
            required: true,
          }}
          // sx={{

          //   color: theme.palette.mode === 'dark' ? '#000' : '#fff',
          //   '&:focus': {
          //     borderColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
          //     backgroundColor:
          //       theme.palette.mode === 'dark' ? '#f4f4f4' : '#B6E7BA',
          //   },
          // }}
        />
      </Box>

      <Box
        sx={{
          // width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField
          fullWidth
          id="outlined-controlled"
          label="Phone"
          name="phone"
          value={phone}
          onChange={handleChange}
          inputProps={{
            pattern:
              '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
            title:
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
            required: true,
          }}
        />
      </Box>

      <Button variant="contained" color="success" type="submit">
        Add contact
      </Button>
    </Form>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
};
