import { ISoulValues } from "../../../types";
import { StyledSelect } from "./styles";

export const Select = (props: ISoulValues) => {
  const SoulValues = props.values;

  return (
    <StyledSelect {...props}>
      {SoulValues.map((soulValue) => (
        <option key={soulValue.name} value={soulValue.value}>
          {soulValue.name}
        </option>
      ))}
    </StyledSelect>
  );
};