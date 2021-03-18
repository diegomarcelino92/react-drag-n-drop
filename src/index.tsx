import React from 'react';

import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { theme } from './configuration/theme';
import { GlobalStyles } from './configuration/global-styles';

import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <GlobalStyles />

        <App />
      </DndProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
