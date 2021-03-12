import React from 'react';

import { Container } from './styles';

import Column from '../column';

const Main: React.FC = () => (
  <Container>
    <Column title="column1" />
    <Column title="column2" />
    <Column title="column3" />
    <Column title="column4" />
    <Column title="column5" />
  </Container>
);

export default Main;
