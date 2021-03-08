import React from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Header from '../header'
import Main from '../main'
import Footer from '../footer'

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Main />
      <Footer />
    </DndProvider>
  )
}

export default App;