import { createContext, Dispatch, useReducer } from 'react'

import { JSXProps } from './../types'
import { reducer, ReducerAction } from './reducer'
import { initialState, State } from './state'

export type ContextStore = [State, Dispatch<ReducerAction>]

export const Context = createContext<ContextStore>(initialState as any)

function Store({ children }: JSXProps) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  )
}

export default Store
