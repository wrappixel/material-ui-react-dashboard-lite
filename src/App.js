import React from 'react';
import { useRoutes } from "react-router-dom";
import Themeroutes from './routes/Router'
import { Provider } from "react-redux";
import store from './redux/Store'
import { ThemeProvider } from '@material-ui/styles';
import {theme} from './assets/jss/Theme-variable';
import GlobalStyles from './assets/jss/Globalstyles';

const App = () => {
  const routing = useRoutes(Themeroutes);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
  	  	  <GlobalStyles/>
          {routing}
      </ThemeProvider>
    </Provider>
  );
}

export default App;
