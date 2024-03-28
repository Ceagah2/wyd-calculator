import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 20vh;
  width: 80vw;
  padding: 20px;
`

export const HomeTitle = styled.h1`
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

export const ButtonContainer = styled.div`
  width: 80vw;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`