/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISelect } from "../../../types";
import { StyledSelect } from "./styles";

export const Select = (props: ISelect) => {

  return (
    <StyledSelect onChange={props.onChange}>
     {props.children}
    </StyledSelect>
  );
};