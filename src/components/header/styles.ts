import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
 from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Container = styled.header`
  width:100%;
  background: #222222;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items:center;
`;

export const Title = styled.h1`
`;

export const Image = styled.img`
  margin: 0 20px;

 animation: 5s ${rotate} infinite;
`;
