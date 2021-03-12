import React from 'react';

import { useDrag } from 'react-dnd';

import { Container } from './styles';

interface CardProps {
  type: string
}

const Card = ({ type }: CardProps) => {
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'card' },
    collect: (montior) => ({
      isDragging: montior.isDragging(),
    }),
  });

  console.log(isDragging);

  return (
    <Container isDragging={isDragging} ref={dragRef} type={type}>
      <span>Card</span>
    </Container>
  );
};

export default Card;
