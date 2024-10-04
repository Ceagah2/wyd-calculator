import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const TableContainer = styled.div`
  width: 70vw;
  height: 40vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`
export const Table = styled.table`
  width: 40%;
  height: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  background: ${theme.colors.white};
  border-radius: 10px;
`
export const HRow = styled.tr`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.heading};
  height: 75px;
`;
export const HCol = styled.th`
  border: 1px solid black;
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.heading};
`;
export const Row = styled.tr`
  border: 1px solid black;
`;
export const Col = styled.td`
  text-align: center;
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.heading};
  padding: 10px;
`;

export const Footer = styled.div`
  border: 1px solid black;
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.heading};
  width: 40%;
  height: 75px;
  margin-bottom: 20px;
`