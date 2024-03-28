import { StyledSelect } from "./styles";

export const Select = () => {
  const SoulValues = [
    "Selecione sua Soul",
    "STR",
    "INT",
    "DEX",
    "CONS",
    "STR + DEX",
    "STR + INT",
    "STR + CONS",
    " INT + DEX",
    "INT + CONS",
    "DEX + CONS",
  ];

  return (
    <StyledSelect>
      {SoulValues.map((soulValue) => (
        <option key={soulValue} value={soulValue}>
          {soulValue}
        </option>
      ))}
    </StyledSelect>
  )
}