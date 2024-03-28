import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledSelect = styled.select`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
  font-size: ${theme.sizes.body};
`

export const StyledOption = styled.option`
  font-size: ${theme.sizes.body};
`