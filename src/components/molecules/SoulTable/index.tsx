import { useState } from "react";
import { SoulValues } from "../../../constants/soulValues";
import { Status } from '../../../constants/status';
import { Input } from '../../atoms/input';
import { Select } from '../../atoms/select';

import * as S from './styles';

type Soul = {
  name?: string;
  value?: number;
}
export const SoulTable = () => {
  const [statusValues, setStatusValues] = useState(
    SoulValues.map((values) => ({ ...values }))
  );
  const [selectedSoul, setSelectedSoul] = useState<Soul>();

const handleSoulChange = (selectedSoulName: string) => {
  const selectedSoul = SoulValues.find(
    (soul) => soul.name === selectedSoulName
  );
  setSelectedSoul(selectedSoul);
  if (selectedSoul) {
    const updatedStatusValues = statusValues.map((status) => {
      const newValue = (selectedSoul.value * status.value) / 100;
      return {
        ...status,
        value: newValue,
      };
    });
    setStatusValues(updatedStatusValues);
  }
};


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
            <S.Row key={status.name}>
              <S.Col>{status.name}</S.Col>
              <S.Col>
                <Input value={status.value} />
              </S.Col>
            </S.Row>
          ))}
        </tbody>
      </S.Table>
      <S.Footer>
        <Select
          onChange={(e) => handleSoulChange(e.target.value)}
          values={SoulValues}
        />
      </S.Footer>
    </S.TableContainer>
  );
}