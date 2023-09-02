import BarraLateral from './containers/BarraLateral'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral></BarraLateral>
        <ListaDeContatos></ListaDeContatos>
      </Container>
    </>
  )
}

export default App
