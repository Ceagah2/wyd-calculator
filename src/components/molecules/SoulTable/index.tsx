import { Input } from '../../atoms/input';
import { Select } from '../../atoms/select';
import * as S from './styles';
export const SoulTable = () => {
  const Status = ['STR', 'INT', 'DEX', 'CONS'];
  return (
    <S.TableContainer>
      <S.Table>
        <thead>
          <S.HRow>
            <S.HCol>Status</S.HCol>
            <S.HCol>Valor</S.HCol>
          </S.HRow>
        </thead>
        <tbody>
          {Status.map((status) => (
            <S.Row key={status}>
              <S.Col>{status}</S.Col>
              <S.Col>
                <Input />
              </S.Col>
            </S.Row>
          ))}
        </tbody>
      </S.Table>
        <S.Footer>
          <Select />
        </S.Footer>
    </S.TableContainer>
  );
}