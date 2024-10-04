/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { SoulValues } from "../../../constants/soulValues";
import { Status } from "../../../constants/status";
import { Button } from "../../atoms/button";
import { Input } from "../../atoms/input";
import { Select } from "../../atoms/select";
import * as S from "./styles";

export const SoulTable = () => {
  const [incrementoSelecionado, setIncrementoSelecionado] = useState("");
  const [status, setStatus] = useState(Status);
  const [statusCalculado, setStatusCalculado] = useState<any[]>([]);

  function calcularIncremento() {
    const soulConfig = SoulValues.find(
      (config) => config.key === incrementoSelecionado
    );


    if (soulConfig) {
      const novosStatus = status.map((stat) => {
        const incremento = soulConfig.attributes.find(
          (attr) => attr.name === stat.name
        );

        if (incremento) {
          const novoValor = stat.value * incremento.multiplier;
          console.log(
            `Calculando: ${stat.value} * ${incremento.multiplier} = ${novoValor}`
          );
          return { ...stat, value: novoValor };
        }
        return stat;
      });
      setStatusCalculado(novosStatus);
    } else {
      console.warn(
        "Nenhuma configuração encontrada para:",
        incrementoSelecionado
      );
    }
  }


  const handleInputChange = (name: string, value: string) => {
    const updatedStatus = status.map((stat) => {
      if (stat.name === name) {
        return { ...stat, value: parseInt(value) || 0 };
      }
      return stat;
    });
    setStatus(updatedStatus);
  };

  return (
    <S.TableContainer>
      <S.Content>
        <S.Table>
          <thead>
            <S.HRow>
              <S.HCol>Status</S.HCol>
              <S.HCol>Valor</S.HCol>
            </S.HRow>
          </thead>
          <tbody>
            {status.map((stat) => (
              <S.Row key={stat.name}>
                <S.Col>{stat.name}</S.Col>
                <S.Col>
                  <Input
                    name={stat.name}
                    value={stat.value}
                    onChange={(e) =>
                      handleInputChange(stat.name, e.target.value)
                    }
                  />
                </S.Col>
              </S.Row>
            ))}
          </tbody>
        </S.Table>
        <S.Footer>
          <Select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setIncrementoSelecionado(e.target.value);
            }}
          >
            <option value="">Selecione...</option>
            {SoulValues.map((config) => (
              <option key={config.key} value={config.key}>
                {config.label}
              </option>
            ))}
          </Select>
        </S.Footer>
        <Button
          text="Calcular"
          onClick={calcularIncremento}
          width={150}
          height={50}
        />
      </S.Content>
      {statusCalculado.length > 0 && (
        <S.Table>
          <thead>
            <S.HRow>
              <S.HCol>Status</S.HCol>
              <S.HCol>Valor Calculado</S.HCol>
            </S.HRow>
          </thead>
          <tbody>
            {status.map((stat, index) => (
              <S.Row key={stat.name}>
                <S.Col>{stat.name}</S.Col>
                <S.Col>{statusCalculado[index].value}</S.Col>
              </S.Row>
            ))}
          </tbody>
        </S.Table>
      )}
    </S.TableContainer>
  );
};
