import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ThemeProvider, CssBaseline } from '@material-ui/core';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider >
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
