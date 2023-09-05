import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../Utils/Enums/contato'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

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

  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
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
            <S.BotaoSalvar
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
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
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
