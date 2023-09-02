import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Familia" contador={1} />
        <FiltroCard legenda="Amigo" contador={2} />
        <FiltroCard legenda="Colega de Trabalho" contador={2} />
        <FiltroCard legenda="Proximo" contador={2} />
        <FiltroCard legenda="Não proximo" contador={1} />
        <FiltroCard legenda="todos" contador={10} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
