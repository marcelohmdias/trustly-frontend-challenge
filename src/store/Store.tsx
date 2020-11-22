import { createContext, Dispatch, useReducer } from 'react'

import { WithChildren } from '@/types'

import { reducer, ReducerAction } from './reducer'
import { initialState, State } from './state'

export type ContextStore = [State, Dispatch<ReducerAction>]

export const Context = createContext<ContextStore>(initialState as any)

function Store({ children }: WithChildren<{}>) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  )
}

export default Store
