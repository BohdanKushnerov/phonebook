import { Toolbar } from '@mui/material';
import { StyledNavLink } from 'components/Navigation/Nav.styled';

export const AuthNav = () => {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Toolbar
      style={{
        display: 'flex',
        gap: 8,
      }}
    >
      <StyledNavLink to="/login">Login</StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
    </Toolbar>
  );
};
