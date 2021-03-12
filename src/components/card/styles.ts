import styled, { css } from 'styled-components';

export const Container = styled.li<{ isDragging: boolean, type:string }>`
    list-style: none;
    margin: 12px;
    border-radius: 5px;
    box-shadow: 1px 1px 2px #00000050;
    height: 50px;
    padding: 12px;
    background: #ffffff;
    border-left: 3px solid ${({ theme, type }) => theme.colors[type]}

    ${({ isDragging }) => isDragging && css`
        background: #000000 !important;
        border: 2px dashed #ebebeb;
        box-shadow: none;

        span {
            display: none;
        }
    `}
`;
