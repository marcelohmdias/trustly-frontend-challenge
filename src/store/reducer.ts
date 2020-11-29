import { produce } from 'immer'

import { Cart, Product, State } from './state'

export type ReducerAction =
  | {
      type: 'ADD_TO_CART'
      payload: Cart
    }
  | {
      type: 'CART_LOADING'
      payload: boolean
    }
  | {
      type: 'FILTER_PRODUCTS'
      payload: string
    }
  | {
      type: 'LOAD_PRODUCTS'
      payload: Array<Product>
    }
  | {
      type: 'RESET_CART'
    }

export function reducer(state: State, action: ReducerAction) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, (draft) => {
        draft.cart = action.payload
      })

    case 'CART_LOADING':
      return produce(state, (draft) => {
        draft.cartLoading = action.payload
      })

    case 'FILTER_PRODUCTS':
      return produce(state, (draft) => {
        const str = action.payload?.trim().toLowerCase()

        draft.products = draft.products.map((item) => {
          item.visible = str
            ? item.description.toLowerCase().includes(str)
            : true
          return item
        })
      })

    case 'LOAD_PRODUCTS':
      return produce(state, (draft) => {
        draft.products = action.payload
      })

    case 'RESET_CART':
      return produce(state, (draft) => {
        draft.cart = undefined
      })

    default:
      return state
  }
}
