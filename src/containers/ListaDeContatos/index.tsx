import Contato from '../../components/Contato'
import { Container } from './styles'

import * as enums from '../../Utils/Enums/contato'

const contatos = [
  {
    nome: 'Thiago Brito de Oliveira',
    mail: 'deoliveira.tbrito@gmail.com',
    tel: '(11) 98728-1594',
    categoria: enums.Categoria.FAMILIA,
    status: enums.Status.PROXIMO
  },
  {
    nome: 'Thiago Oliveira',
    mail: 'thiago.oliveira@gmail.com',
    tel: '(11) 98999-1511',
    categoria: enums.Categoria.AMIGO,
    status: enums.Status.PROXIMO
  },
  {
    nome: 'Thiago Brito',
    mail: 'brito.thiago@gmail.com',
    tel: '(11) 98558-1994',
    categoria: enums.Categoria.TRABALHO,
    status: enums.Status.NPROXIMO
  }
]

const ListaDeContatos = () => (
  <Container>
    <p>
      2 numeros salvos como: &quot;familiaridade&ldquo; e
      &quot;proximidade&ldquo;{' '}
    </p>
    <ul>
      {contatos.map((c) => (
        <li key={c.nome}>
          <Contato
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

export default ListaDeContatos
