import { Product, State } from './state'

export type ReducerAction = {
  type: 'LOAD_PRODUCTS'
  payload: Array<Product>
}

export function reducer(state: State, action: ReducerAction) {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return { ...state, products: action.payload }
    default:
      return state
  }
}
