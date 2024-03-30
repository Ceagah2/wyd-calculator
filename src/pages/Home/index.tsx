import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/atoms/button";
import { Container } from "../../components/atoms/container";
import { MenuList } from '../../constants/menu';
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
       {MenuList.map((item) => (
         <Button
           key={item.id}
           text={item.name}
           onClick={() => navigator(item.link)} 
           backgroundColor={''} 
           width={200} 
           height={200}
        />
       ))}
      </S.ButtonContainer>
    </Container>
  );
}