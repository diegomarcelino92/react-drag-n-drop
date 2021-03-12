import React from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { GlobalStyle } from '../../configuration/global-styles';

import Header from '../header';
import Main from '../main';
import Footer from '../footer';

const App: React.FC = () => (
  <DndProvider backend={HTML5Backend}>
    <GlobalStyle />
    <Header />
    <Main />
    <Footer />
  </DndProvider>
);

export default App;
