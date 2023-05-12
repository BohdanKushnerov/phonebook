import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../Theme/Theme';
// import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Nav } from 'components/Navigation/Nav';
import { AuthNav } from 'components/Navigation/AuthNav';

export const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

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
          <Nav />

          {/* <UserMenu />

          <AuthNav /> */}

          <Toolbar sx={{ ml: 'auto' }}>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Toolbar>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
