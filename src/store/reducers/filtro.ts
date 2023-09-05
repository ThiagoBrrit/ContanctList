import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../Utils/Enums/contato'

type FiltroState = {
  termo?: string
  criterio: 'categoria' | 'status' | 'todos'
  valor?: enums.Categoria | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
