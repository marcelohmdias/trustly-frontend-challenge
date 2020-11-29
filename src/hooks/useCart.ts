import { useContext } from 'react'

import { Cart } from './../store/state'
import { Context, ContextStore } from './../store/Store'

export function useCart() {
  const [state, dispatch] = useContext<ContextStore>(Context)

  const { cart, cartLoading } = state

  function addToCart({ product, quantity, size }: Omit<Cart, 'total'>) {
    dispatch({ type: 'CART_LOADING', payload: true })

    return new Promise((resolve) => {
      const total = parseFloat(product.price) * parseInt(quantity, 10)

      const payload = { product, quantity, size, total }

      dispatch({ type: 'ADD_TO_CART', payload })

      setTimeout(() => {
        dispatch({ type: 'CART_LOADING', payload: false })
        resolve(true)
      }, 1500)
    })
  }
  function resetCart() {
    dispatch({ type: 'RESET_CART' })
  }

  return { addToCart, cart, cartLoading, resetCart }
}
