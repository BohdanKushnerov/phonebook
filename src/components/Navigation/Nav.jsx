import { Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { StyledNavLink } from './Nav.styled';
import { getisLoggedInStatus } from 'redux/auth/authSelectors';

export const Nav = () => {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isLoggedIn = useSelector(getisLoggedInStatus);

  return (
    <Toolbar
      style={{
        display: 'flex',
        gap: 8,
      }}
    >
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/phonebook">Phonebook</StyledNavLink>}
    </Toolbar>
  );
};
