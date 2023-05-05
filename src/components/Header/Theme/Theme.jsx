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
          // primary: {
          //   main: '#121212',
          // },
          // secondary: {
          //   main: '#70bd7c',
          // },
          // white: {
          //   main: '#ffffff',
          // },
          // bcgInput: {
          //   main: '#b6e7ba',
          //   focus: '#cdf1d0',
          // },
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
