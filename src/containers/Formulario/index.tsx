import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../Utils/Enums/contato'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [mail, setMail] = useState('')
  const [tel, setTel] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.FAMILIA)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const ContatoAdicionar = new Contato(
      nome,
      categoria,
      enums.Status.NPROXIMO,
      tel,
      mail,
      9
    )
    dispatch(cadastrar(ContatoAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={mail}
          onChange={(evento) => setMail(evento.target.value)}
          as="textarea"
          placeholder="E-Mail"
        ></Campo>
        <Campo
          value={tel}
          onChange={(evento) => setTel(evento.target.value)}
          as="textarea"
          placeholder="Telefone"
        ></Campo>
        <Opcoes>
          <p>Categoria</p>
          {Object.values(enums.Categoria).map((categoria) => (
            <Opcao key={categoria}>
              <input
                value={categoria}
                name="categoria"
                type="radio"
                onChange={(evento) =>
                  setCategoria(evento.target.value as enums.Categoria)
                }
                id={categoria}
                defaultChecked={categoria === enums.Categoria.FAMILIA}
              />{' '}
              <label htmlFor={categoria}>{categoria}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Adicionar Contato</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
