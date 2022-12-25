import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'instantsearch.css/themes/satellite.css';

// Material UI Imports
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";

// Page Imports
import HomePage from "./components/pages/HomePage";
import NoPageFound from "./components/pages/NoPageFound";

import theme from "./theme/customTheme";

const App = () => {

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path={"/"} exact component={HomePage} />
          <Route exact component={NoPageFound} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
