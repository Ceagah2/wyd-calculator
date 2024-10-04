import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
`

export const PageTitle = styled.h1`
  font-size: ${theme.sizes.heading};
  color: ${theme.colors.white};
  font-family: ${theme.fonts.heading};
  text-shadow: 4px 4px 4px #000000;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Description = styled.p`
  font-size: ${theme.sizes.body};
  color: ${theme.colors.white};
  font-family: ${theme.fonts.body};
  text-shadow: 4px 4px 4px #000000;
`

export const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
`;