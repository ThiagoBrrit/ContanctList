import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../Utils/Enums/contato'
import { Botao } from '../../styles'

type TagProps = {
  categoria?: enums.Categoria
  status?: enums.Status
  parametro: 'status' | 'categoria'
}

function retornaCordeFundo(props: TagProps): string {
  if (props.parametro === 'categoria') {
    if (props.categoria === enums.Categoria.FAMILIA) return variaveis.familia
    if (props.categoria === enums.Categoria.AMIGO) return variaveis.amigo
    if (props.categoria === enums.Categoria.TRABALHO) return variaveis.trabalho
  } else {
    if (props.status === enums.Status.PROXIMO) return variaveis.proximo
    if (props.status === enums.Status.NPROXIMO) return variaveis.nproximo
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    aling-items: center;
    margin-bottom: 16px;
  }
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCordeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const TeleEmail = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
