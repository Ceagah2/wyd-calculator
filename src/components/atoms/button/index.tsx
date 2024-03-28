import { IButton } from "../../../types";
import { ButtonContainer, ButtonText } from "./styles";

export const Button = (props: IButton) => {
  return (
    <ButtonContainer {...props}>
      <ButtonText>{props.text}</ButtonText>
    </ButtonContainer>
  );
}