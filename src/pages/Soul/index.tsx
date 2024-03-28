import { Container } from "../../components/atoms/container";
import * as S from "./styles";

export default function Soul(){
  return (
    <Container>
      <S.Header>
        <S.PageTitle>Soul Calculator</S.PageTitle>
        <S.DescriptionContainer>
          <S.Description>
            Entre com os valores em status, e depois selecione o tipo de soul que deseja simular.
          </S.Description>
        </S.DescriptionContainer>
      </S.Header>
    </Container>
  );
}