import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const Container = styled.nav`
  min-width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: ${theme.colors.background};
`

export const Logo = styled.img`
  width: 120px;
  height: 100px;
  object-fit: cover;
  object-position: center;
`
export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  width: 100%;
`

export const MenuItem = styled.li`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.royalBlue};
    scale: 1.05;
    transition: 0.3s ease-in-out;
  }
`