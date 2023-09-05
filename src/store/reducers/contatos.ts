import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../Utils/Enums/contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      tel: '(11) 98728-1594',
      mail: 'deoliveira.tbrito@gmail.com',
      categoria: enums.Categoria.AMIGO,
      status: enums.Status.PROXIMO,
      nome: 'Thiago Brito de Oliveira'
    },
    {
      id: 2,
      tel: '(11) 99555-2233',
      mail: 'deliveira@gmail.com',
      categoria: enums.Categoria.FAMILIA,
      status: enums.Status.NPROXIMO,
      nome: 'Daniel Marcos'
    },
    {
      id: 3,
      tel: '(11) 98553-5473',
      mail: 'mathias@gmail.com',
      categoria: enums.Categoria.TRABALHO,
      status: enums.Status.PROXIMO,
      nome: 'Mathias Silva'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state: { itens: any[] }, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const ContatoExistente = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (ContatoExistente) {
        alert('Já existe um contato com este nome')
      } else {
        const ultimocontato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimocontato ? ultimocontato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    },
    alterarStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato].status = action.payload.finalizado
          ? enums.Status.PROXIMO
          : enums.Status.NPROXIMO
      }
    }
  }
})

export const { remover, editar, cadastrar, alterarStatus } =
  contatoSlice.actions

export default contatoSlice.reducer
