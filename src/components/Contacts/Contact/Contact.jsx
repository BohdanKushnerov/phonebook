import * as React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { DeleteBtn } from './Contact.styled';

const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      sx={{
        border: '1px solid grey',
        borderRadius: 2,
        '& .MuiListItemText-primary': {
          fontWeight: 'bold',
        },
      }}
    >
      <ListItemAvatar>
        <Avatar
        // alt={`Avatar n°${value + 1}`}
        // src={`/static/images/avatar/${value + 1}.jpg`}
        />
      </ListItemAvatar>
      <ListItemText
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6">{name}</Typography>
        <p>{phone}</p>
      </ListItemText>
      <DeleteBtn
        type="button"
        variant="contained"
        size="small"
        onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </DeleteBtn>
    </ListItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
