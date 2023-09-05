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
      tel: '11987465',
      mail: 'deolvso@gmail.com',
      categoria: enums.Categoria.AMIGO,
      status: enums.Status.PROXIMO,
      nome: 'thiagao'
    },
    {
      id: 2,
      tel: '00465465',
      mail: 'deolvso@gmail.com',
      categoria: enums.Categoria.FAMILIA,
      status: enums.Status.NPROXIMO,
      nome: 'thiagaaaao'
    },
    {
      id: 3,
      tel: '546987465',
      mail: 'deolvso@gmail.com',
      categoria: enums.Categoria.TRABALHO,
      status: enums.Status.PROXIMO,
      nome: 'thiagdasdao'
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
    }
  }
})

export const { remover, editar } = contatoSlice.actions

export default contatoSlice.reducer
