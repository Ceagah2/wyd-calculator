import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/atoms/button";
import { Container } from "../../components/atoms/container";
import * as S from "./styles";

export default function Home(){
  const navigator = useNavigate();
  return (
    <Container>
      <S.Header>
        <S.HomeTitle>Wyd Calculator</S.HomeTitle>
        <S.DescriptionContainer>
          <S.Description>
            Escolha dentre as opções abaixo a qual calculadora deseja acessar.
          </S.Description>
        </S.DescriptionContainer>
      </S.Header>
      <S.ButtonContainer>
        <Button
          text="Soul Calculator"
          color={""}
          backgroundColor={""}
          width={300}
          height={300}
          onClick={() => navigator("/soul")}
        />
        <Button
          text="Critical Calculator"
          color={""}
          backgroundColor={""}
          width={300}
          height={300}
          onClick={() => navigator("/crit")}
        />
      </S.ButtonContainer>
    </Container>
  );
}