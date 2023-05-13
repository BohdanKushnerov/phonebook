import { Toolbar } from '@mui/material';
import { StyledNavLink } from 'components/Navigation/Nav.styled';

// import Typography from '@mui/material/Typography';

export const AuthNav = () => {
  return (
    <Toolbar
      style={{
        display: 'flex',
        gap: 8,
      }}
    >
      <StyledNavLink to="/login">
        Login
        {/* <Typography variant="h6">Login</Typography> */}
      </StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
    </Toolbar>
  );
};
