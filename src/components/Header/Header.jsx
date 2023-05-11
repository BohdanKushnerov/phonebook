import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../Theme/Theme';
import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';

import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar component="nav">
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Toolbar
            style={{
              display: 'flex',
              gap: 8,
            }}
          >
            <NavLink to="/phonebook">
              <Button
                style={{
                  backgroundColor: 'white',
                }}
              >
                Phonebook
              </Button>
            </NavLink>
            <NavLink to="/login">
              <Button
                style={{
                  backgroundColor: 'white',
                }}
              >
                Login
              </Button>
            </NavLink>
            <NavLink to="/register">
              <Button
                style={{
                  backgroundColor: 'white',
                }}
              >
                Register
              </Button>
            </NavLink>
          </Toolbar>
          <div>
            <UserMenu></UserMenu>
          </div>
          <IconButton
            sx={{ ml: 'auto' }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
