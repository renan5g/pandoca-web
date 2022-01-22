import { ThemeProvider } from 'styled-components';
import { myTheme } from '@app/styles/theme';
import { GlobalStyles } from '@app/styles/global';

import Router from '@app/routes/Router';

export function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}
