
import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { IButton } from '../../../types';

export const ButtonContainer = styled.button<IButton>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.color};
    scale: 1.05;
    transition: 0.3s ease-in-out;
  }
`;

export const ButtonText = styled.p`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  text-align: center;
`