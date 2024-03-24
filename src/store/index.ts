import { configureStore, createSlice } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const todoSilce = createSlice({
  name: 'todo',
  initialState: ['Fazer café com açucar', 'Estudar Redux'],

  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo)
    },
  },
})

export const store = configureStore({
  reducer: {
    todo: todoSilce.reducer,
  },
})

export const { add } = todoSilce.actions

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
