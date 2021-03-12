import React from 'react';
import Card from '../card';

import { Container, Title } from './styles';

interface ColumnProps {
    title?: string;
}

const Column = ({ title }: ColumnProps) => (
  <Container>
    <Title>{title}</Title>
    <ul>
      <Card type="info" />
      <Card type="warning" />
      <Card type="error" />
      <Card type="success" />
    </ul>
  </Container>
);

export default Column;
