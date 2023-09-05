import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Container>
      <p>
        2 numeros salvos como: &quot;familiaridade&ldquo; e
        &quot;proximidade&ldquo;{' '}
      </p>
      <ul>
        {itens.map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
              nome={c.nome}
              categoria={c.categoria}
              mail={c.mail}
              tel={c.tel}
              status={c.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
