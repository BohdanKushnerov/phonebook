import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: bold;

  &.active {
    color: #f00;
  }
`;
