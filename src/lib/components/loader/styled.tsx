import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

interface LoaderProps {
    color?: string;
    background?: string,
    size?: string,
}

export const LoaderStyles = styled.div<LoaderProps>`
    animation: ${rotate} .8s infinite linear;
    border-radius: 50%;
    border: 3px solid ${(props) => props.background};
    border-top-color: ${(props) => props.color};
    width: ${(props) => props.size};
    height: ${(props) => props.size};
`;
