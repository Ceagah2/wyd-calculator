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
export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 80vw;
  background: ${theme.colors.background}
`