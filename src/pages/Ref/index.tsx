import { Container } from "../../components/atoms/container";
import { Navbar } from "../../components/atoms/navbar";
import * as S from './styles';
export default function Refinements() {
  return (
    <Container>
      <Navbar />
      <S.Content>
        <S.Sidebar>Menu lateral</S.Sidebar>
        <S.MainContent>Box principal</S.MainContent>
      </S.Content>
    </Container>
  );
}
