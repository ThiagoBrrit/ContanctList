import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar, alterarStatus } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'
import * as enums from '../../Utils/Enums/contato'

type Props = ContatoClass

const Contato = ({
  categoria,
  mail: mailOriginal,
  nome,
  status,
  tel: telOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [mail, setMail] = useState('')
  const [tel, setTel] = useState('')

  useEffect(() => {
    if (mailOriginal.length > 0) {
      setMail(mailOriginal)
    }
    if (telOriginal.length > 0) {
      setTel(telOriginal)
    }
  }, [mailOriginal, telOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setMail(mailOriginal)
    setTel(telOriginal)
  }

  function alteraStatusContato(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alterarStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={nome}>
        <input
          type="checkbox"
          id={nome}
          checked={status === enums.Status.PROXIMO}
          onChange={alteraStatusContato}
        ></input>
        <S.Nome>
          {estaEditando ? <em>Editando: </em> : ''}

          {nome}
        </S.Nome>
      </label>
      <S.Tag parametro="categoria" categoria={categoria}>
        {categoria}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.TeleEmail
        disabled={!estaEditando}
        value={mail}
        onChange={(evento) => setMail(evento.target.value)}
      />
      <S.TeleEmail
        disabled={!estaEditando}
        value={tel}
        onChange={(evento) => setTel(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    mail,
                    tel,
                    id,
                    nome,
                    status,
                    categoria
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
