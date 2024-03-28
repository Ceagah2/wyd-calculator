import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const AppContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.royalBlue}
`