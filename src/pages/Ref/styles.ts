import styled from "styled-components";
import { theme } from "../../styles/theme";


export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 20vw;
  background: ${theme.colors.background};
`

export const SideMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 100%;
`
export const MenuItem = styled.li`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  margin: 10px;
  cursor: pointer;

  &:hover {
    scale: 1.05;
    transition: 0.3s ease-in-out;
  }
`
export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 80vw;
  background: ${theme.colors.background}
`

export const PageTitle = styled.h3`
  font-size: ${theme.sizes.large};
  color: ${theme.colors.royalBlue};
  font-family: ${theme.fonts.body};
  width: 50%;
`