import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../Utils/Enums/contato'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Categoria.FAMILIA}
                criterio="categoria"
                legenda="Familia"
              />
              <FiltroCard
                valor={enums.Categoria.AMIGO}
                criterio="categoria"
                legenda="Amigo"
              />
              <FiltroCard
                valor={enums.Categoria.TRABALHO}
                criterio="categoria"
                legenda="Colega de Trabalho"
              />
              <FiltroCard
                valor={enums.Status.PROXIMO}
                criterio="status"
                legenda="Proximo"
              />
              <FiltroCard
                valor={enums.Status.NPROXIMO}
                criterio="status"
                legenda="Não proximo"
              />
              <FiltroCard criterio="todos" legenda="todos" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            voltar para lista de Contato
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
