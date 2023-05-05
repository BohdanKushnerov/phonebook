import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function ToggleColorMode({ children }) {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#70bd7c',
          },
          // secondary: {
          //   main: '#70bd7c',
          // },
          // white: {
          //   main: '#ffffff',
          // },
          button: {
            // main: '#f4f4f4',
            // dark: '#4e4e4e',
            // bcg: '#474747',
            // bcgDark: '#cacaca',
            main: '#ffffff',
            dark: '#3c3f3c',
            // bcg: '#1976d2',
            bcg: '#70bd7c',
            bcgDark: '#f5f5f5',
            hover: '#4d8b51',
            hoverDark: '#8a8a8a',
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
