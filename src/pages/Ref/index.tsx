import { useState } from "react";
import { Container } from "../../components/atoms/container";
import { Navbar } from "../../components/atoms/navbar";
import { RefiList } from "../../constants/menu";
import * as S from './styles';
export default function Refinements() {
  const [refiValue, setRefiValue] = useState(0);
  return (
    <Container>
      <Navbar />
      <S.Content>
        <S.Sidebar>
          <S.SideMenu>
            {RefiList.map((item) => (
              <S.MenuItem key={item.id} onClick={() => setRefiValue(item.value)}>{item.name}</S.MenuItem>
            ))}
          </S.SideMenu>
        </S.Sidebar>
        <S.MainContent>
          <S.PageTitle>Escolha uma opcao ao lado para iniciar seus calculos. Boa sorte !</S.PageTitle> 
        </S.MainContent>
      </S.Content>
    </Container>
  );
}
